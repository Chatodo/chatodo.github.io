#!/bin/bash
# SSH honeypot: log every executed command via auditd, mirror to /var/log/commands.log via rsyslog.
set -euo pipefail

# A stale third-party repo must not abort the run (set -e); the installs below still fail loudly
sudo apt-get update || echo "warning: apt-get update reported errors, continuing" >&2
sudo apt-get install -y auditd audispd-plugins openssh-server rsyslog

# own rules.d file, distro rules untouched
sudo tee /etc/audit/rules.d/99-exec-commands.rules > /dev/null <<'EOF'
-a always,exit -F arch=b64 -S execve -k exec_commands
-a always,exit -F arch=b32 -S execve -k exec_commands
EOF
# Not `systemctl restart auditd`: Debian ships the unit with RefuseManualStop=yes,
# which would abort the script here under set -e
sudo augenrules --load

# Log every interactive command with user and source IP (idempotent)
line_user="export PROMPT_COMMAND='RETRN_VAL=\$?;logger -p local1.notice -t bash -i \"USER=\$USER IP=\$(echo \$SSH_CLIENT | awk '\\''{print \$1}'\\'') CMD=\$(history 1 | { read x cmd; echo \"\$cmd\"; })\"'"
grep -qF "$line_user" /etc/profile || echo "$line_user" | sudo tee -a /etc/profile > /dev/null

sudo tee /etc/rsyslog.d/60-honeypot-commands.conf > /dev/null <<'EOF'
local1.*    /var/log/commands.log
EOF
sudo systemctl restart rsyslog

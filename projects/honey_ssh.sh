#!/bin/bash

sudo apt update
sudo apt install -y auditd audispd-plugins openssh-server rsyslog

# Configure audit rules for command logging
sudo bash -c 'cat <<EOF > /etc/audit/rules.d/audit.rules
# Monitor all executed commands
-a always,exit -F arch=b64 -S execve -k exec_commands
-a always,exit -F arch=b32 -S execve -k exec_commands
EOF'

# Restart Auditd service
sudo systemctl restart auditd

# Configure Bash to log all commands run by users
line_user="export PROMPT_COMMAND='RETRN_VAL=\$?;logger -p local1.notice -t bash -i \"USER=\$USER IP=\$(echo \$SSH_CLIENT | awk '\\''{print \$1}'\\'') CMD=\$(history 1 | { read x cmd; echo \"\$cmd\"; })\"'"
echo "$line_user" | sudo tee -a /etc/profile

# Configure rsyslog to log to a specific file
sudo bash -c 'cat <<EOF > /etc/rsyslog.d/50-default.conf
local1.*    /var/log/commands.log
EOF'

# Restart rsyslog service
sudo systemctl restart rsyslog

# Confirmation message
echo "Setup complete. All SSH commands will be logged to /var/log/commands.log"

---
layout: default
---

<div class="projects-container">
  <div class="projects-header">
    <h1 class="projects-title">Projects</h1>
    <p class="projects-subtitle">// A selection of academic, security &amp; CTF work — most reports are in French.</p>
  </div>

  <div class="project-section reveal">
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-graduation-cap" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">Master's Thesis Research</h3>
        <p class="project-description">
          Analyzed hardware and firmware security against low-level threats —
          TPM 2.0, Secure Boot, and defense architectures across x86/x64 and
          embedded systems.
        </p>
        <div class="project-tags">
          <span class="project-tag">Hardware Security</span>
          <span class="project-tag">Firmware Protection</span>
          <span class="project-tag">TPM 2.0</span>
          <span class="project-tag">Trusted Computing</span>
          <span class="project-tag">Low-Level Threats</span>
        </div>
        <div class="project-links">
          <a
            href="{{ '/assets/files/mémoire.pdf' | relative_url }}"
            class="project-link primary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            Read Full Research
          </a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-flask" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">SEED Security Labs</h3>
        <p class="project-description">
          Exploited vulnerable Set-UID binaries via stack-based buffer overflows
          and environment-variable attacks, and examined the stack-protection
          mechanisms meant to stop them (SEED labs).
        </p>
        <div class="project-tags">
          <span class="project-tag">Buffer Overflow</span>
          <span class="project-tag">Binary Exploitation</span>
          <span class="project-tag">Set-UID</span>
          <span class="project-tag">Stack Protection</span>
        </div>
        <div class="project-links">
          <a
            href="{{ '/assets/files/SEED_Buffer%20Overflow%20Attack%20Lab.pdf' | relative_url }}"
            class="project-link primary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            Buffer Overflow Lab
          </a>
          <a
            href="{{ '/assets/files/SEED_Environment%20Variable%20and%20Set-UID.pdf' | relative_url }}"
            class="project-link secondary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            Environment Variable Lab
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-section reveal">
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-chart-line" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">QRadar SIEM</h3>
        <p class="project-description">
          Built threat-detection rules, custom dashboards, and security
          analytics on the IBM QRadar SIEM platform, as part of an academic SOC
          project.
        </p>
        <div class="project-tags">
          <span class="project-tag">SIEM</span>
          <span class="project-tag">IBM QRadar</span>
          <span class="project-tag">Threat Detection</span>
          <span class="project-tag">SOC Analytics</span>
        </div>
        <div class="project-links">
          <a
            href="{{ '/assets/files/qradar_contribution.pdf' | relative_url }}"
            class="project-link primary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            View Contribution
          </a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-shield-alt" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">Active Defense with a Honeypot Network</h3>
        <p class="project-description">
          Deployed a multi-level honeypot infrastructure on the T-Pot platform
          (Dionaea, Cowrie, Pentbox) and analyzed real-world attacks — EternalBlue
          exploitation and SSH brute-force campaigns — through Kibana dashboards.
          Built a high-interaction SSH honeypot with auditd/rsyslog logging for
          threat intelligence.
        </p>
        <div class="project-tags">
          <span class="project-tag">T-Pot</span>
          <span class="project-tag">Cowrie/Dionaea</span>
          <span class="project-tag">ELK/Kibana</span>
          <span class="project-tag">SSH Honeypot</span>
        </div>
        <div class="project-links">
          <a
            href="{{ '/assets/files/honeypots.pdf' | relative_url }}"
            class="project-link primary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            Read Report
          </a>
          <a
            href="https://raw.githubusercontent.com/Chatodo/chatodo.github.io/refs/heads/main/projects/honey_ssh.sh"
            class="project-link secondary"
            target="_blank"
          >
            <i class="fas fa-code" aria-hidden="true"></i>
            View Script
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-section reveal">
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-cubes" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">Secure Microservices Architecture</h3>
        <p class="project-description">
          Designed and secured a containerized microservices stack (Flask API,
          Nginx frontend, MySQL) with an Istio service mesh enforcing mTLS, load
          balancing, and traffic management — hardened on Kubernetes with RBAC,
          TLS certificates, secrets management, and persistent volumes.
        </p>
        <div class="project-tags">
          <span class="project-tag">Kubernetes</span>
          <span class="project-tag">Istio</span>
          <span class="project-tag">mTLS</span>
          <span class="project-tag">RBAC</span>
          <span class="project-tag">Docker</span>
        </div>
        <div class="project-links">
          <a
            href="https://github.com/Chatodo/kubernetes-projet"
            class="project-link primary"
            target="_blank"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
            View on GitHub
          </a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-network-wired" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">VPN &amp; IPsec Implementation</h3>
        <p class="project-description">
          Configured and tested IPsec VPN tunnels, covering key exchange,
          encryption, and the tunnel/transport security architecture; documented
          in a technical presentation.
        </p>
        <div class="project-tags">
          <span class="project-tag">Network Security</span>
          <span class="project-tag">VPN Implementation</span>
          <span class="project-tag">IPsec Protocols</span>
          <span class="project-tag">Network Architecture</span>
        </div>
        <div class="project-links">
          <a
            href="{{ '/assets/files/vpn_ipsec_tp_presentation.pdf' | relative_url }}"
            class="project-link primary"
            target="_blank"
          >
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            View Presentation
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-section reveal">
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-flag" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">CTF &amp; HackTheBox Write-ups</h3>
        <p class="project-description">
          Step-by-step write-ups of machine compromises — enumeration,
          exploitation, and privilege escalation to root — plus ongoing
          offensive &amp; defensive training on HTB Academy.
        </p>
        <div class="project-tags">
          <span class="project-tag">Penetration Testing</span>
          <span class="project-tag">Privilege Escalation</span>
          <span class="project-tag">Machine Exploitation</span>
          <span class="project-tag">HTB Academy</span>
        </div>
        <div class="project-links">
          <a
            href="https://github.com/Chatodo/chatodo.github.io/tree/main/projects/writeups"
            class="project-link primary"
            target="_blank"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
            View All Write-ups
          </a>
          <a
            href="{{ '/assets/files/HTB.pdf' | relative_url }}"
            class="project-link secondary"
            target="_blank"
          >
            <i class="fas fa-chart-line" aria-hidden="true"></i>
            HTB Academy Progress
          </a>
        </div>
      </div>
      <div class="project-card">
        <div class="project-icon">
          <i class="fas fa-folder-open" aria-hidden="true"></i>
        </div>
        <h3 class="project-title">Bachelor's Degree Projects</h3>
        <p class="project-description">
          Undergraduate projects in C and Java: data-structure &amp; algorithm
          implementations, low-level systems and network programming, and web
          fundamentals.
        </p>
        <div class="project-tags">
          <span class="project-tag">C</span>
          <span class="project-tag">Java</span>
          <span class="project-tag">Algorithms</span>
          <span class="project-tag">Data Structures</span>
          <span class="project-tag">System/Network Programming</span>
        </div>
        <div class="project-links">
          <a
            href="https://github.com/Chatodo/Projets-Licence/blob/main/README_EN.md"
            class="project-link primary"
            target="_blank"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
            View Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

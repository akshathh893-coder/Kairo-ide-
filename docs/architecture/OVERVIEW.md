# KAIRO Cloud IDE — System Architecture Overview

## 1. Vision

KAIRO Cloud IDE turns an iPad (or any lightweight client) into a first-class development workstation.  
Heavy lifting (compilers, language servers, containers, AI agents) runs on cloud infrastructure.  
The client remains secure, low-latency, and essentially stateless.

The platform prioritizes:

- Reproducibility
- Automation
- Portability across cloud providers
- Modularity
- Infrastructure as Code
- Zero (or near-zero) manual configuration

## 2. Guiding Principles

Every subsystem must satisfy these principles:

1. **Idempotent automation** — Running any script twice produces the same result.
2. **Infrastructure defined as code** — No click-ops in production paths.
3. **Minimal manual configuration** — Sensible defaults + progressive disclosure.
4. **Cloud-first execution** — Local is for testing; real work happens in the cloud.
5. **Provider abstraction** — Switching from Oracle Free Tier to Hetzner should be a config change.
6. **Security by default** — Least privilege, encrypted tunnels, secret scanning, signed commits.
7. **Stateless client devices** — iPad can be wiped; environment is recovered from Git + backups.
8. **Version-controlled infrastructure** — Everything lives in this repository.
9. **Continuous validation** — Doctor + CI catch drift early.
10. **Modular extensibility** — New providers, tools, or KAIRO modules plug in cleanly.

## 3. High-Level Architecture

```
                 iPad / Client
                      │
                Tailscale VPN
                      │
             Cloudflare Tunnel
                      │
             Reverse Proxy (Caddy/Traefik)
                      │
     ┌────────────────────────────────────┐
     │         KAIRO Cloud Server         │
     ├────────────────────────────────────┤
     │  code-server / VS Code Server      │
     │  Claude Code                       │
     │  Git + GitHub CLI                  │
     │  Docker + Docker Compose           │
     │  Node.js / pnpm                    │
     │  Python / Rust / Go                │
     │  Terraform                         │
     │  Monitoring & Self-healing         │
     └────────────────────────────────────┘
                      │
              GitHub + CodeRabbit
                      │
               Deployment Targets
```

## 4. Key Design Decisions

- **code-server** (or official VS Code Server) is the primary interactive surface because it works excellently in Safari on iPad with Apple Pencil support for notes/sketching alongside code.
- **Tailscale** provides private mesh networking and MagicDNS with almost zero configuration.
- **Cloudflare Tunnel** gives public (or Zero-Trust) access without opening ports on the host.
- **Provider interface** allows the same bootstrap logic to target local Docker, Codespaces, Oracle, Hetzner, etc.
- **Claude Code** is treated strictly as an implementation engine, not an architect.

## 5. Security Model (Summary)

- All external access goes through Cloudflare Access (Zero Trust) or Tailscale ACLs.
- SSH key-only authentication.
- Secrets never live in the repository; they are injected at runtime or via a secrets manager.
- Containers run with least privilege.
- Daily encrypted backups of volumes and configuration.
- Automated dependency and secret scanning in CI.

## 6. Relationship to Broader KAIRO Ecosystem

Phase 5 elevates this platform from a generic cloud IDE into the operational environment for the wider KAIRO system (Knowledge Hub, multi-project orchestration, AI-assisted workflows, shared secrets, plugin system).

Until then, KAIRO Cloud IDE remains deliberately focused and excellent at one thing: giving you a professional coding environment on an iPad.

# KAIRO Cloud IDE — Roadmap

## Phase 1 — Foundation (Current)

Goal: A clean, well-documented repository that can bootstrap itself and run in Codespaces.

- [x] Repository structure & documentation-first layout
- [x] Architecture overview & guiding principles
- [ ] Core CLI skeleton (`kairo`)
- [ ] `install.sh` / `bootstrap` pipeline
- [ ] `doctor.sh` with comprehensive checks
- [ ] `.devcontainer` + GitHub Codespaces support
- [ ] Basic GitHub Actions CI (lint, validate, security)
- [ ] Initial ADRs and coding standards
- [ ] `.claude/` playbooks and context files

**Exit criteria**: A contributor can open the repo in Codespaces and have a working environment in < 2 minutes. `./doctor.sh` reports green on a clean machine after bootstrap.

## Phase 2 — Cloud Infrastructure

- Docker + Compose reference stack
- Caddy (or Traefik) reverse proxy
- Cloudflare Tunnel integration
- Tailscale integration & MagicDNS
- Oracle Cloud Free Tier provider (primary free path)
- Basic monitoring (CPU, memory, disk, tunnel health)
- Automated certificate handling

## Phase 3 — Developer Experience

- code-server / VS Code Server hardened for iPad
- Claude Code deep integration
- GitHub + CodeRabbit automation
- SSH key management & one-command access
- Remote terminal quality-of-life
- Mobile-optimized web UI hints / progressive web app considerations

## Phase 4 — Automation & Resilience

- One-command deploy (`kairo deploy`)
- Automatic repair / self-healing
- Automatic updates
- Backup & restore (volumes, config, encrypted keys)
- Provisioning orchestration
- Cost-aware scheduling / auto-stop for free tiers

## Phase 5 — KAIRO Ecosystem Integration

- Unified workspace management
- Knowledge Hub integration
- Multi-project orchestration
- Shared configuration & secrets management
- Plugin / module system
- AI-assisted development workflows that understand the full KAIRO context

---

*This roadmap is living. Major changes require an ADR.*

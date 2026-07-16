# KAIRO Cloud IDE — Roadmap

## Phase 1 — Foundation (Current — nearly complete)

Goal: A clean, well-documented repository that can bootstrap itself and run in Codespaces.

- [x] Repository structure & documentation-first layout
- [x] Architecture overview & guiding principles
- [x] Development model (Architect ↔ Claude Code separation)
- [x] Initial ADRs
- [x] Doctor system (`doctor.sh`) with actionable guidance
- [x] Bootstrap / install script
- [x] `.devcontainer` + GitHub Codespaces support
- [x] Basic GitHub Actions CI (structure validation + secret scanning)
- [x] `.claude/` context and playbooks
- [x] Provider interface specification
- [x] Implementation Queue
- [x] Minimal TypeScript CLI skeleton (`kairo doctor`, `kairo --help`)
- [ ] Formal TypeScript types for the Provider interface
- [ ] Codespaces polish & green doctor on first open

**Exit criteria**: A contributor can open the repo in Codespaces and have a working environment in < 2 minutes. `./doctor.sh` (and `kairo doctor`) reports green (or only optional warnings) after bootstrap.

## Phase 2 — Cloud Infrastructure

- Docker + Compose reference stack (code-server focused)
- Caddy (or Traefik) reverse proxy
- Cloudflare Tunnel integration helpers
- Tailscale integration & MagicDNS helpers
- Oracle Cloud Free Tier provider (primary free long-running path)
- Basic monitoring (CPU, memory, disk, tunnel health)
- Automated certificate handling where applicable

## Phase 3 — Developer Experience

- Hardened code-server / openvscode-server experience optimized for iPad Safari
- Claude Code deep integration and playbooks
- GitHub + CodeRabbit automation refinements
- SSH key management & one-command access
- Remote terminal quality-of-life improvements
- Progressive Web App / mobile browser considerations

## Phase 4 — Automation & Resilience

- One-command deploy (`kairo deploy`)
- Automatic repair / self-healing
- Automatic updates
- Backup & restore (volumes, config, encrypted keys)
- Provisioning orchestration
- Cost-aware scheduling / auto-stop helpers for free tiers

## Phase 5 — KAIRO Ecosystem Integration

- Unified workspace management
- Knowledge Hub integration
- Multi-project orchestration
- Shared configuration & secrets management
- Plugin / module system
- AI-assisted development workflows that understand the full KAIRO context

---

*This roadmap is living. Major changes require an ADR.*

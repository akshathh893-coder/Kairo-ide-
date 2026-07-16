# KAIRO Cloud IDE — Roadmap

## Phase 1 — Foundation ✅ COMPLETE

Goal: A clean, well-documented repository that can bootstrap itself and run in Codespaces.

- [x] Repository structure & documentation-first layout
- [x] Architecture overview & guiding principles
- [x] Development model (Architect ↔ Claude Code separation)
- [x] Initial ADRs
- [x] Doctor system (`doctor.sh`) with actionable guidance
- [x] Bootstrap / install script
- [x] `.devcontainer` + GitHub Codespaces support
- [x] Basic GitHub Actions CI
- [x] `.claude/` context and playbooks
- [x] Provider interface specification + TypeScript types
- [x] Minimal TypeScript CLI (`kairo doctor`, `kairo providers`, `kairo help`)
- [x] Local provider stub + registry
- [x] CLI + Local provider specifications
- [x] Codespaces postCreate polish

**Exit criteria met**: Contributors can open the repo in Codespaces, run `npx kairo doctor`, and have a clear, documented path forward. Architecture is stable and specifications exist before further implementation.

## Phase 2 — Cloud Infrastructure

- Docker + Compose reference stack (code-server focused)
- Full Local Provider implementation
- Caddy (or Traefik) reverse proxy
- Cloudflare Tunnel integration helpers
- Tailscale integration & MagicDNS helpers
- Oracle Cloud Free Tier provider (primary free long-running path)
- Basic monitoring

## Phase 3 — Developer Experience

- Hardened code-server experience optimized for iPad Safari
- Claude Code deep integration
- GitHub + CodeRabbit automation refinements
- SSH key management & one-command access
- Remote terminal quality-of-life

## Phase 4 — Automation & Resilience

- One-command deploy
- Automatic repair / self-healing
- Automatic updates
- Backup & restore
- Cost-aware scheduling for free tiers

## Phase 5 — KAIRO Ecosystem Integration

- Unified workspace management
- Knowledge Hub integration
- Multi-project orchestration
- Shared configuration & secrets management
- Plugin / module system

---

*This roadmap is living. Major changes require an ADR.*

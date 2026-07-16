# KAIRO Cloud IDE

> Transform your iPad into a portable, professional development workstation.

**KAIRO Cloud IDE** is a reproducible, cloud-native development platform. All heavy computation runs in the cloud. Your iPad (or any device) becomes a secure, low-latency client.

## Vision

Stop fighting local toolchains on mobile devices.  
Spin up a fully configured, version-controlled development environment in the cloud that feels native — then access it from anywhere via Tailscale + Cloudflare Tunnel.

### Core Values
- **Reproducibility** — Every environment is identical and declaratively defined
- **Automation first** — Idempotent scripts, zero manual configuration where possible
- **Cloud-native** — Compute lives in the cloud; clients stay lightweight
- **Provider portable** — Oracle Free Tier today, Hetzner / DigitalOcean / local Docker tomorrow
- **Security by default** — Zero-trust access, encrypted tunnels, least privilege
- **Documentation as source of truth** — Specs before code. ADRs before implementation.

## Quick Start

```bash
git clone https://github.com/akshathh893-coder/Kairo-ide-.git
cd Kairo-ide-

./install.sh
./doctor.sh

# TypeScript CLI (after npm install && npm run build)
npx kairo doctor
npx kairo doctor local
npx kairo providers
npx kairo help
```

**Fastest path**: Open this repository in **GitHub Codespaces**. The Dev Container builds the CLI and prepares the environment automatically.

## Current Status

**Phase 1 — Foundation is complete.**

- Stable Provider interface (specification + TypeScript types)
- Working CLI (`doctor`, `providers`, `help`)
- Local provider stub with functional doctor
- Codespaces / Dev Container ready
- Full documentation, ADRs, and implementation queue for the next phase

Next work is Phase 2 (Cloud Infrastructure). See:

- [docs/IMPLEMENTATION_QUEUE.md](docs/IMPLEMENTATION_QUEUE.md)
- [docs/roadmap/ROADMAP.md](docs/roadmap/ROADMAP.md)
- [docs/PHASE1_COMPLETION_PLAN.md](docs/PHASE1_COMPLETION_PLAN.md)

## Development Model

| Role                | Responsibility                          |
|---------------------|-----------------------------------------|
| Chief Architect     | Architecture, ADRs, Specs, Interfaces   |
| Claude Code         | Implementation against approved specs   |
| CodeRabbit          | Automated review                        |

**Never invent APIs or redesign architecture in a PR.**  
Read the relevant file under `docs/specifications/` first.

## Repository Layout (key paths)

```
cli/src/                  # TypeScript CLI + Provider types
docs/specifications/      # Contracts (source of truth)
docs/adr/                 # Architecture Decision Records
docs/IMPLEMENTATION_QUEUE.md
doctor.sh / install.sh    # Bootstrap scripts
.devcontainer/            # Codespaces / Dev Container
```

## License

Private / personal project for now.

---

*Built for people who want desktop-class development on an iPad without compromise.*

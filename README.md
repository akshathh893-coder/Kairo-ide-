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

## Quick Start (Phase 1)

```bash
# Clone
git clone https://github.com/akshathh893-coder/Kairo-ide-.git
cd Kairo-ide-

# Bootstrap (idempotent)
./install.sh

# Health check (shell)
./doctor.sh

# Or via the new TypeScript CLI (after build)
npm run build
npx kairo doctor
# or once linked: kairo doctor
```

**Fastest path right now**: Open this repository in **GitHub Codespaces**. The `.devcontainer` configures a ready environment automatically.

## Architecture Overview

```
iPad / Laptop
     │
     │  Tailscale (private mesh) + Cloudflare Tunnel (public edge)
     ▼
┌─────────────────────────────────────┐
│         KAIRO Cloud Server          │
│  • code-server / VS Code Server     │
│  • Claude Code                      │
│  • Docker + Compose                 │
│  • Git + GitHub CLI                 │
│  • Language toolchains (Node, Go,   │
│    Python, Rust, Terraform...)      │
│  • Monitoring & self-healing        │
└─────────────────────────────────────┘
     │
     ▼
GitHub + CodeRabbit + Deployment Targets
```

## Repository Philosophy

This is not a typical codebase. **The repository is the documentation.**

Every major feature begins with a written specification.  
Claude Code (and human contributors) implement *exactly* against that specification.  
Architecture decisions are recorded as ADRs and never forgotten.

```
docs/
├── architecture/     # System design
├── adr/              # Architecture Decision Records
├── specifications/   # Feature specs (SPEC.md, API.md, FLOW.md, TESTS.md)
├── modules/          # Module contracts
├── workflows/        # Operational runbooks
├── standards/        # Coding & process standards
├── roadmap/          # Phased plan
└── diagrams/         # Visuals
```

## Development Model

| Role                  | Responsibility                              |
|-----------------------|---------------------------------------------|
| **Chief Architect**   | Architecture, ADRs, Specs, Interfaces       |
| **Claude Code**       | Implementation against approved specs       |
| **CodeRabbit**        | Automated review (bugs, security, style)    |

No one invents APIs mid-implementation.  
No one redesigns architecture in a PR.

See [docs/standards/DEVELOPMENT_MODEL.md](docs/standards/DEVELOPMENT_MODEL.md) and [ADR-0003](docs/adr/ADR-0003-development-model.md).

## Current Status

**Phase 1 — Foundation** (nearly complete)

- [x] Repository structure & documentation-first layout
- [x] Architecture overview & guiding principles
- [x] Development model (strict Architect ↔ Implementer separation)
- [x] Doctor system with actionable guidance
- [x] Bootstrap / install script
- [x] Codespaces / Dev Container
- [x] Basic CI (structure + secret scanning)
- [x] Provider interface specification
- [x] Implementation Queue & Claude context files
- [x] Minimal TypeScript CLI skeleton (`kairo doctor`, `kairo --help`)
- [ ] Formal TypeScript types for the Provider interface
- [ ] Codespaces polish & green doctor on first open

See [docs/roadmap/ROADMAP.md](docs/roadmap/ROADMAP.md) and [docs/IMPLEMENTATION_QUEUE.md](docs/IMPLEMENTATION_QUEUE.md) for what’s next.

## Supported Providers (Planned)

| Provider              | Status      | Notes                          |
|-----------------------|-------------|--------------------------------|
| Local Docker          | Planned     | Fastest for development        |
| GitHub Codespaces     | Scaffolded  | Zero local setup               |
| Oracle Cloud Free Tier| Planned     | Primary free production path   |
| Hetzner               | Planned     | Cost-effective EU              |
| DigitalOcean          | Planned     | Simple UX                      |

## Contributing / Working on this repo

1. Read the relevant specification in `docs/specifications/`
2. Implement exactly against the interfaces and acceptance criteria
3. Do not redesign. If the spec is incomplete, open an issue or update the ADR first.
4. Keep PRs small and focused.
5. Check [docs/IMPLEMENTATION_QUEUE.md](docs/IMPLEMENTATION_QUEUE.md) for prioritized next work.

## License

Private / personal project for now.

---

*Built for people who want desktop-class development on an iPad without compromise.*

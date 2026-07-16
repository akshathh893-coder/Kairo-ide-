# Providers

Each subdirectory implements the Provider interface defined in:

`docs/specifications/provider/SPEC.md`

## Planned Providers

- `local/` — Docker / Docker Compose on the current machine
- `codespaces/` — GitHub Codespaces (mostly configuration-driven)
- `oracle/` — Oracle Cloud Infrastructure Always Free tier (primary long-running free option)
- `hetzner/` — Hetzner Cloud
- `digitalocean/` — DigitalOcean
- `github/` — Future GitHub-hosted runners or related

## Adding a New Provider

1. Create `docs/specifications/provider-<name>/SPEC.md`
2. Write an ADR if the choice has significant trade-offs
3. Implement under `providers/<name>/` following the interface
4. Add doctor checks and CLI support
5. Document failure modes and cost characteristics

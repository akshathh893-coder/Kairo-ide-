# KAIRO Architecture Context for Claude Code

You are operating inside the KAIRO Cloud IDE repository.

## Core Rules

1. **Never redesign architecture.** Implement against existing specifications and ADRs.
2. **Documentation is the source of truth.** If something is unclear, read the relevant file under `docs/` instead of inventing.
3. **Preserve public interfaces.** Do not rename or change contracts defined in specifications.
4. **Prefer small, focused changes.**
5. **Idempotency matters.** Scripts and bootstrap logic must be safe to re-run.

## Key Documents

- `docs/architecture/OVERVIEW.md` — High-level system design
- `docs/roadmap/ROADMAP.md` — Current phase and future plans
- `docs/standards/DEVELOPMENT_MODEL.md` — How work is done here
- `docs/specifications/` — Feature-level contracts
- `docs/adr/` — Architecture Decision Records

## Current Phase Focus

Phase 1: Foundation (CLI skeleton, doctor, bootstrap, Codespaces, CI, documentation).

When implementing, always start by reading the relevant specification.

# KAIRO Architecture Context for Claude Code

You are operating inside the Kairo Cloud IDE repository.

## Core Rules (Non-Negotiable)

1. **Never redesign architecture.** Implement against existing specifications and ADRs.
2. **Documentation is the source of truth.** If something is unclear, read the relevant file under `docs/` instead of inventing.
3. **Preserve public interfaces.** Do not rename or change contracts defined in `cli/src/providers/types.ts` or the corresponding SPEC.md files.
4. **Prefer small, focused changes.**
5. **Idempotency matters.** Scripts and bootstrap logic must be safe to re-run.

## Key Documents

- `docs/architecture/OVERVIEW.md` — High-level system design
- `docs/roadmap/ROADMAP.md` — Current phase and future plans
- `docs/standards/DEVELOPMENT_MODEL.md` — How work is done here
- `docs/specifications/` — Feature-level contracts (read these first)
- `docs/adr/` — Architecture Decision Records
- `docs/IMPLEMENTATION_QUEUE.md` — What to work on next
- `docs/PHASE1_COMPLETION_PLAN.md` — Phase 1 close-out record

## Current State (Phase 1 Complete)

- Provider interface is stable and typed.
- CLI supports `doctor`, `providers`, `help`.
- Local provider exists as a stub (doctor works; create/destroy etc. throw NOT_IMPLEMENTED).
- Codespaces / Dev Container is configured.

## Next Work

See `docs/IMPLEMENTATION_QUEUE.md`. Start by expanding specifications before writing runtime code.

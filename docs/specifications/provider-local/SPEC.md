# Local Provider — Specification

## Purpose

Run the KAIRO stack on the current machine using Docker / Docker Compose.

Ideal for fast iteration while developing the platform itself and for offline scenarios.

## Status

Phase 1: Interface implemented + `doctor()` functional.  
Phase 2: Full create / destroy / status / backup / restore.

## Interface Compliance

Implements the Provider interface defined in `docs/specifications/provider/SPEC.md` and `cli/src/providers/types.ts`.

## Phase 1 Behavior

- `doctor()` — checks Docker, Docker Compose, and Node.js availability.
- All other methods throw `ProviderError` with code `NOT_IMPLEMENTED` and a clear message pointing to Phase 2.

## Phase 2 Acceptance Criteria (future)

- [ ] `create()` brings up the reference Compose stack
- [ ] `status()` reports healthy/unhealthy with useful details
- [ ] `destroy()` cleanly tears down resources
- [ ] `backup()` / `restore()` work for named volumes and configuration
- [ ] Idempotent re-runs of `create()` are safe

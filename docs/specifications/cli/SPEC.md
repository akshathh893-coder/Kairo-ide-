# CLI — Specification (Phase 1 Surface)

## Purpose

Provide a single, consistent entry point (`kairo`) for automation and daily operations.

## Current Phase 1 Commands (implemented)

| Command | Description |
|---------|-------------|
| `kairo doctor` | Run host-level health checks (delegates to `./doctor.sh`) |
| `kairo doctor <provider>` | Run doctor for a specific provider |
| `kairo providers` | List registered providers |
| `kairo help` | Show help |
| `kairo --version` | Show version |

## Future Commands (require their own specifications before implementation)

- `kairo init`
- `kairo bootstrap`
- `kairo update`
- `kairo repair`
- `kairo deploy`
- `kairo provider ...`
- `kairo backup` / `kairo restore`
- `kairo tunnel`
- `kairo status`
- `kairo logs`
- `kairo ssh`
- `kairo cloud`
- `kairo sync`

## Rules

- Every new command must have a written specification before code is written.
- Commands that mutate state should be idempotent or clearly warn.
- Prefer progressive disclosure: simple daily commands first, advanced flags later.
- Exit codes: 0 = success, non-zero = failure (actionable message required).

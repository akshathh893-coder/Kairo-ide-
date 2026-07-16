# Coding Standards

## Languages & Tooling

- **TypeScript** (strict mode) for CLI and any application code
- **Shell** (bash) for bootstrap, doctor, and infrastructure scripts — must be idempotent and shellcheck-clean
- **Docker / Compose** for runtime environments
- **Terraform** (later) for provider infrastructure where appropriate

## General Rules

- Prefer small, focused pull requests
- Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, ...)
- Semantic Versioning for any published packages/CLI
- Feature branches → PR → CodeRabbit → merge
- All public interfaces must be documented before implementation
- Scripts must be idempotent
- No secrets in the repository

## TypeScript

- `strict: true`
- Explicit return types on exported functions
- Prefer `interface` for public contracts
- ESLint + Prettier (configuration will live in the repo)

## Shell

- `set -euo pipefail`
- ShellCheck clean
- Prefer functions over long linear scripts
- Clear error messages that tell the user how to recover

## Documentation

- Every non-trivial module has a corresponding entry under `docs/modules/` or a specification
- ADRs for any decision that has alternatives and long-term consequences

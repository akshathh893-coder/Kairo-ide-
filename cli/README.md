# KAIRO CLI

The `kairo` CLI is the single entry point for all automation in the Kairo Cloud IDE platform.

## Implemented (Phase 1)

```bash
kairo doctor              # Host-level health checks (./doctor.sh)
kairo doctor local        # Local provider doctor
kairo providers           # List registered providers
kairo help
kairo --version
```

## Development

```bash
# From repository root
npm install
npm run build             # Compiles TypeScript → dist/
npx kairo doctor
npx kairo providers
```

## Architecture Notes

- Provider interface lives in `cli/src/providers/types.ts` (matches `docs/specifications/provider/SPEC.md`).
- Providers register themselves in `cli/src/providers/registry.ts`.
- New providers must implement the interface and be registered; no hard-coded switches elsewhere.

## Future Commands

See `docs/specifications/cli/SPEC.md` and `docs/IMPLEMENTATION_QUEUE.md`.  
Do not implement new commands without a written specification first.

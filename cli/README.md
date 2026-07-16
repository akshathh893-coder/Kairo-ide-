# KAIRO CLI

The `kairo` CLI is the single entry point for all automation in the Kairo Cloud IDE platform.

## Current Status (Phase 1 Skeleton)

Implemented:

```bash
kairo doctor          # Runs the environment health checks
kairo help            # Shows usage
kairo --version
```

## Development

```bash
# From repository root
npm install          # (once dependencies are added)
npm run build        # Compiles TypeScript → dist/
npm run kairo doctor # Run via the built binary
```

Or during development:

```bash
npx tsx cli/src/cli.ts doctor
```

## Planned Commands (see docs/specifications and IMPLEMENTATION_QUEUE)

```
kairo init
kairo bootstrap
kairo update
kairo repair
kairo deploy
kairo provider
kairo backup
kairo restore
kairo tunnel
kairo status
kairo logs
kairo ssh
kairo cloud
kairo sync
```

All new commands must be backed by a written specification before implementation.

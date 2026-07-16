# KAIRO CLI

The `kairo` CLI is the single entry point for all automation.

## Planned Commands

```
kairo init          # Initialize a new workspace / config
kairo bootstrap     # Full environment bootstrap
kairo doctor        # Health & dependency checks
kairo update        # Update tools and platform components
kairo repair        # Attempt automatic recovery
kairo deploy        # Deploy / provision to a provider
kairo provider      # Manage providers (list, set default, ...)
kairo backup        # Create backup
kairo restore       # Restore from backup
kairo tunnel        # Manage Cloudflare / Tailscale tunnels
kairo status        # High-level status of the environment
kairo logs          # Tail relevant logs
kairo ssh           # Open an SSH session
kairo cloud         # Cloud-specific helpers
kairo sync          # Sync local state with remote
```

## Implementation Notes

- Written in TypeScript (strict)
- Uses the Provider interface defined in `docs/specifications/provider/`
- Prefer progressive disclosure: simple commands for daily use, advanced flags for power users
- Every command that mutates state should be idempotent or clearly warn

See `docs/specifications/cli/` (to be created) for the full specification.

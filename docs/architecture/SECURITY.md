# Security Model

## Principles

- Least privilege everywhere
- No secrets in the repository
- All external access mediated by Zero Trust (Cloudflare Access) or private mesh (Tailscale)
- Encrypted backups
- Automated scanning (secrets, dependencies, CodeQL)

## Access Paths

1. **Primary (recommended)**: Tailscale mesh → private IP / MagicDNS
2. **Secondary**: Cloudflare Tunnel + Cloudflare Access (Zero Trust policies)
3. **Emergency**: SSH with key-only authentication (keys never committed)

## Future Hardening (Phase 2+)

- Automatic key rotation helpers
- Secrets injection via external manager (1Password, Doppler, etc.)
- Container runtime security (seccomp, AppArmor profiles)
- Regular restore testing of backups

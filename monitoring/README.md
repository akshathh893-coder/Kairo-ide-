# Monitoring

Planned metrics and health signals:

- CPU / Memory / Disk usage
- Docker daemon and container health
- Cloudflare Tunnel status
- Tailscale connectivity
- Certificate expiry
- Backup success / age
- GitHub Actions status (via API)

Initial implementation will be simple shell + Prometheus node exporter style, later expanded.

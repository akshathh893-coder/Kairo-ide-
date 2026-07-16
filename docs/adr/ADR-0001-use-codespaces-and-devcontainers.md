# ADR-0001: Use GitHub Codespaces + Dev Containers as primary zero-setup path

## Status
Accepted

## Context

We need a way for any contributor (including future versions of Claude Code) to get a fully working development environment with zero local installation friction. The iPad use-case also benefits from being able to open a Codespace in the browser when Tailscale is not convenient.

## Decision

- Provide a high-quality `.devcontainer` configuration.
- Treat GitHub Codespaces as a first-class supported provider.
- All bootstrap and doctor logic must work inside the Codespace as well as on a bare VM.

## Consequences

- Positive: Instant onboarding, reproducible environments, excellent GitHub integration.
- Negative: Codespaces have usage limits and cost money beyond the free tier. Oracle Free Tier remains the preferred long-running production environment.
- We must keep the Dev Container lean so it starts quickly.

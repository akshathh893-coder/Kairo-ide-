# ADR-0002: Provider Abstraction Layer

## Status
Accepted

## Context

We want to support multiple backends (local Docker, Codespaces, Oracle Free Tier, Hetzner, DigitalOcean) without rewriting bootstrap, doctor, backup, or deploy logic for each one.

## Decision

Define a clear `Provider` interface that every backend must implement:

```ts
interface Provider {
  name: string;
  create(config: ProviderConfig): Promise<Instance>;
  destroy(instance: Instance): Promise<void>;
  status(instance: Instance): Promise<Status>;
  doctor(): Promise<DoctorReport>;
  backup(instance: Instance): Promise<BackupResult>;
  restore(instance: Instance, backup: BackupId): Promise<void>;
  update(instance: Instance): Promise<void>;
  configure(config: ProviderConfig): Promise<void>;
}
```

Concrete providers live under `providers/<name>/`.

## Consequences

- Adding a new cloud becomes a matter of implementing the interface + writing a specification.
- Shared logic (networking, reverse proxy, monitoring) stays provider-agnostic.
- We accept some indirection in exchange for long-term portability.

# Provider Interface — Specification

## Purpose

Abstract away the differences between compute backends so that the rest of KAIRO (CLI, bootstrap, doctor, deploy, backup) can remain provider-agnostic.

## Requirements

- Every supported environment (local, Codespaces, Oracle, Hetzner, etc.) must implement the same interface.
- Operations must be idempotent where possible.
- Failures must return structured, human-readable errors.
- The interface must be implementable in both TypeScript (CLI) and shell (bootstrap scripts).

## Public Interface (TypeScript)

```typescript
export interface ProviderConfig {
  // provider-specific fields + common ones
  region?: string;
  size?: string;
  image?: string;
  tags?: Record<string, string>;
}

export interface Instance {
  id: string;
  provider: string;
  status: "creating" | "running" | "stopped" | "error";
  publicIp?: string;
  privateIp?: string;
  metadata: Record<string, unknown>;
}

export interface Status {
  healthy: boolean;
  message: string;
  details: Record<string, unknown>;
}

export interface DoctorReport {
  ok: boolean;
  checks: Array<{ name: string; ok: boolean; message: string; fix?: string }>;
}

export interface Provider {
  readonly name: string;
  create(config: ProviderConfig): Promise<Instance>;
  destroy(instanceId: string): Promise<void>;
  status(instanceId: string): Promise<Status>;
  doctor(): Promise<DoctorReport>;
  backup(instanceId: string): Promise<{ backupId: string }>;
  restore(instanceId: string, backupId: string): Promise<void>;
  update(instanceId: string): Promise<void>;
  configure(config: ProviderConfig): Promise<void>;
}
```

## Acceptance Criteria

- [ ] Interface is documented and stable
- [ ] At least one concrete provider (Local / Codespaces) implements it
- [ ] CLI can list providers and call `doctor` on the selected one
- [ ] All methods have clear error messages

## Failure Modes

- Provider credentials missing → clear error with setup instructions
- Quota exceeded → structured error, not a stack trace
- Network partition → timeout with retry guidance

/**
 * Provider Interface — TypeScript Contract
 *
 * Source of truth: docs/specifications/provider/SPEC.md
 *
 * Do not change these types without first updating the specification
 * and creating an ADR if the change is architectural.
 */

export interface ProviderConfig {
  /** Cloud region (provider-specific meaning) */
  region?: string;
  /** Instance size / shape */
  size?: string;
  /** Base image or snapshot identifier */
  image?: string;
  /** Arbitrary tags / labels */
  tags?: Record<string, string>;
  /** Allow provider-specific extension fields */
  [key: string]: unknown;
}

export type InstanceStatus = "creating" | "running" | "stopped" | "error";

export interface Instance {
  id: string;
  provider: string;
  status: InstanceStatus;
  publicIp?: string;
  privateIp?: string;
  metadata: Record<string, unknown>;
}

export interface Status {
  healthy: boolean;
  message: string;
  details: Record<string, unknown>;
}

export interface DoctorCheck {
  name: string;
  ok: boolean;
  message: string;
  fix?: string;
}

export interface DoctorReport {
  ok: boolean;
  checks: DoctorCheck[];
}

/**
 * Core Provider contract.
 * Every backend (local, Codespaces, Oracle, Hetzner, ...) must implement this.
 */
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

/**
 * Structured error that providers should throw / return
 * so the CLI can surface clear, actionable messages.
 */
export class ProviderError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly fix?: string,
  ) {
    super(message);
    this.name = "ProviderError";
  }
}

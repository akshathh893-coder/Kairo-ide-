/**
 * Local Provider (stub for Phase 1)
 *
 * Implements the Provider interface using the host machine + Docker.
 * Full create/destroy/backup logic arrives in Phase 2.
 * For now only `doctor()` is functional.
 */

import { spawnSync } from "node:child_process";
import type {
  Provider,
  ProviderConfig,
  Instance,
  Status,
  DoctorReport,
  DoctorCheck,
} from "./types.js";
import { ProviderError } from "./types.js";

function checkCommand(cmd: string, args: string[] = []): boolean {
  const result = spawnSync(cmd, args, { stdio: "ignore" });
  return result.status === 0;
}

export class LocalProvider implements Provider {
  readonly name = "local";

  async create(_config: ProviderConfig): Promise<Instance> {
    throw new ProviderError(
      "Local provider create() is not yet implemented. Coming in Phase 2.",
      "NOT_IMPLEMENTED",
      "See docs/roadmap/ROADMAP.md — Phase 2",
    );
  }

  async destroy(_instanceId: string): Promise<void> {
    throw new ProviderError(
      "Local provider destroy() is not yet implemented.",
      "NOT_IMPLEMENTED",
    );
  }

  async status(_instanceId: string): Promise<Status> {
    throw new ProviderError(
      "Local provider status() is not yet implemented.",
      "NOT_IMPLEMENTED",
    );
  }

  async doctor(): Promise<DoctorReport> {
    const checks: DoctorCheck[] = [];

    const dockerOk = checkCommand("docker", ["version"]);
    checks.push({
      name: "Docker",
      ok: dockerOk,
      message: dockerOk ? "Docker is available" : "Docker is missing or not running",
      fix: dockerOk ? undefined : "Install Docker Desktop or the Docker engine",
    });

    const composeOk = checkCommand("docker", ["compose", "version"]);
    checks.push({
      name: "Docker Compose",
      ok: composeOk,
      message: composeOk ? "Docker Compose v2 is available" : "Docker Compose v2 is missing",
      fix: composeOk ? undefined : "Install Docker Compose v2 (usually comes with modern Docker)",
    });

    const nodeOk = checkCommand("node", ["--version"]);
    checks.push({
      name: "Node.js",
      ok: nodeOk,
      message: nodeOk ? "Node.js is available" : "Node.js is missing",
      fix: nodeOk ? undefined : "Install Node.js 20+",
    });

    const ok = checks.every((c) => c.ok);

    return { ok, checks };
  }

  async backup(_instanceId: string): Promise<{ backupId: string }> {
    throw new ProviderError("Local provider backup() is not yet implemented.", "NOT_IMPLEMENTED");
  }

  async restore(_instanceId: string, _backupId: string): Promise<void> {
    throw new ProviderError("Local provider restore() is not yet implemented.", "NOT_IMPLEMENTED");
  }

  async update(_instanceId: string): Promise<void> {
    throw new ProviderError("Local provider update() is not yet implemented.", "NOT_IMPLEMENTED");
  }

  async configure(_config: ProviderConfig): Promise<void> {
    // No-op for now — local provider needs almost no configuration
  }
}

export const localProvider = new LocalProvider();

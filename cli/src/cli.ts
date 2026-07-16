#!/usr/bin/env node

/**
 * KAIRO Cloud IDE CLI
 *
 * Phase 1 foundation.
 * Implements the minimal surface needed for bootstrap, health checks,
 * and provider awareness. Full command set grows against specifications.
 */

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { listProviders, getProvider } from "./providers/registry.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");

function printHelp(): void {
  console.log(`
KAIRO Cloud IDE CLI  v0.1.0

Usage:
  kairo <command> [options]

Commands:
  doctor [provider]   Run environment health checks (default: host + local provider)
  providers           List available providers
  help                Show this help message
  --version           Show version

Examples:
  kairo doctor
  kairo doctor local
  kairo providers
  kairo help

Note: Full command set (bootstrap, deploy, tunnel, backup, etc.)
will be added once the corresponding specifications are complete.
See docs/IMPLEMENTATION_QUEUE.md and docs/PHASE1_COMPLETION_PLAN.md.
`);
}

function runHostDoctor(): number {
  const doctorPath = resolve(REPO_ROOT, "doctor.sh");

  if (!existsSync(doctorPath)) {
    console.error("❌ doctor.sh not found. Are you running from the Kairo-ide- repository root?");
    return 1;
  }

  const result = spawnSync("bash", [doctorPath], {
    stdio: "inherit",
    cwd: REPO_ROOT,
  });

  return result.status ?? 1;
}

async function runProviderDoctor(providerName: string): Promise<number> {
  const provider = getProvider(providerName);
  if (!provider) {
    console.error(`❌ Unknown provider: ${providerName}`);
    console.error(`Available: ${listProviders().map((p) => p.name).join(", ")}`);
    return 1;
  }

  console.log(`🩺 Running doctor for provider: ${provider.name}\n`);

  try {
    const report = await provider.doctor();

    for (const check of report.checks) {
      const icon = check.ok ? "✅" : "❌";
      console.log(`  ${icon} ${check.name.padEnd(20)} ${check.message}`);
      if (!check.ok && check.fix) {
        console.log(`     → Fix: ${check.fix}`);
      }
    }

    console.log();
    if (report.ok) {
      console.log("🎉 Provider doctor passed.");
      return 0;
    } else {
      console.log("⚠️  Some provider checks failed.");
      return 1;
    }
  } catch (err) {
    console.error("❌ Provider doctor failed:", err instanceof Error ? err.message : err);
    return 1;
  }
}

function listProvidersCmd(): number {
  const providers = listProviders();
  console.log("Available providers:\n");
  for (const p of providers) {
    console.log(`  • ${p.name}`);
  }
  console.log();
  return 0;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0] ?? "help";

  switch (command) {
    case "doctor": {
      const providerName = args[1];
      if (providerName) {
        process.exit(await runProviderDoctor(providerName));
      } else {
        // Default: run host-level doctor.sh
        process.exit(runHostDoctor());
      }
      break;
    }

    case "providers":
    case "provider":
      process.exit(listProvidersCmd());
      break;

    case "help":
    case "--help":
    case "-h":
      printHelp();
      process.exit(0);
      break;

    case "--version":
    case "-v":
      console.log("kairo 0.1.0");
      process.exit(0);
      break;

    default:
      console.error(`Unknown command: ${command}\n`);
      printHelp();
      process.exit(1);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});

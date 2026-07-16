#!/usr/bin/env node

/**
 * KAIRO Cloud IDE CLI
 *
 * Phase 1 skeleton.
 * Implements only the minimal surface needed for bootstrap and health checks.
 * Full command set will grow against documented specifications.
 */

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");

function printHelp(): void {
  console.log(`
KAIRO Cloud IDE CLI  v0.1.0

Usage:
  kairo <command> [options]

Commands:
  doctor          Run environment health checks
  help            Show this help message

Examples:
  kairo doctor
  kairo help

Note: Full command set (bootstrap, deploy, provider, tunnel, etc.)
will be added in later phases once the corresponding specifications
are complete. See docs/IMPLEMENTATION_QUEUE.md.
`);
}

function runDoctor(): number {
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

function main(): void {
  const args = process.argv.slice(2);
  const command = args[0] ?? "help";

  switch (command) {
    case "doctor":
      process.exit(runDoctor());
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

main();

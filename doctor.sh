#!/usr/bin/env bash
set -euo pipefail

# KAIRO Cloud IDE — Doctor
# Comprehensive health and dependency checker.
# Designed to be runnable on macOS, Linux, and inside Codespaces / Dev Containers.

echo "🩺 KAIRO Doctor"
echo "=============="
echo

FAILED=0

check() {
  local name="$1"
  local cmd="$2"
  local fix="${3:-}"

  if eval "$cmd" &>/dev/null; then
    printf "  ✅ %-20s OK\n" "$name"
  else
    printf "  ❌ %-20s MISSING\n" "$name"
    if [[ -n "$fix" ]]; then
      echo "     → Fix: $fix"
    fi
    FAILED=1
  fi
}

echo "Core tools"
check "Git"              "command -v git"              "Install Git"
check "Docker"           "command -v docker"           "Install Docker or start Docker Desktop"
check "Docker Compose"   "docker compose version"      "Install Docker Compose v2"
check "Node.js"          "command -v node"             "Install Node.js 20+"
check "npm"              "command -v npm"              "Comes with Node.js"
check "pnpm"             "command -v pnpm"             "corepack enable && corepack prepare pnpm@latest --activate"
check "GitHub CLI"       "command -v gh"               "Install GitHub CLI (gh)"
check "SSH"              "command -v ssh"              "Install OpenSSH client"

echo
echo "Optional but recommended"
check "Cloudflared"      "command -v cloudflared"      "Install cloudflared for tunnels"
check "Tailscale"        "command -v tailscale"        "Install Tailscale"
check "jq"               "command -v jq"               "Install jq for JSON processing"
check "curl"             "command -v curl"             "Install curl"

echo
echo "Environment"
check "Git user.name"    "git config user.name"        "git config --global user.name 'Your Name'"
check "Git user.email"   "git config user.email"       "git config --global user.email 'you@example.com'"

echo
if [[ $FAILED -eq 0 ]]; then
  echo "🎉 All critical checks passed."
  exit 0
else
  echo "⚠️  Some checks failed. Address the items above and re-run ./doctor.sh"
  exit 1
fi

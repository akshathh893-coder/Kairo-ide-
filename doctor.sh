#!/usr/bin/env bash
set -euo pipefail

# KAIRO Cloud IDE — Doctor
# Comprehensive health and dependency checker.
# Designed to be runnable on macOS, Linux, and inside Codespaces / Dev Containers.

echo "🩺 KAIRO Doctor"
echo "=============="
echo

FAILED=0
WARNINGS=0

check() {
  local name="$1"
  local cmd="$2"
  local fix="${3:-}"
  local level="${4:-error}"   # error | warn

  if eval "$cmd" &>/dev/null; then
    printf "  ✅ %-22s OK\n" "$name"
  else
    if [[ "$level" == "warn" ]]; then
      printf "  ⚠️  %-22s missing (optional)\n" "$name"
      WARNINGS=$((WARNINGS + 1))
    else
      printf "  ❌ %-22s MISSING\n" "$name"
      FAILED=1
    fi
    if [[ -n "$fix" ]]; then
      echo "     → $fix"
    fi
  fi
}

echo "Core tools"
check "Git"              "command -v git"              "Install Git: https://git-scm.com"
check "Docker"           "command -v docker"           "Install Docker Desktop or engine"
check "Docker Compose"   "docker compose version"      "Docker Compose v2 is required (comes with modern Docker)"
check "Node.js"          "command -v node"             "Install Node.js 20+ (https://nodejs.org)"
check "npm"              "command -v npm"              "Comes with Node.js"
check "GitHub CLI"       "command -v gh"               "Install GitHub CLI: https://cli.github.com"
check "SSH client"       "command -v ssh"              "Install OpenSSH"

echo
echo "Recommended"
check "pnpm"             "command -v pnpm"             "corepack enable && corepack prepare pnpm@latest --activate" "warn"
check "jq"               "command -v jq"               "Install jq for better scripting" "warn"
check "curl"             "command -v curl"             "Install curl" "warn"
check "cloudflared"      "command -v cloudflared"      "Install Cloudflare Tunnel client" "warn"
check "tailscale"        "command -v tailscale"        "Install Tailscale" "warn"

echo
echo "Git identity"
check "user.name"        "git config user.name"        "git config --global user.name 'Your Name'"
check "user.email"       "git config user.email"       "git config --global user.email 'you@example.com'"

echo
echo "Repository"
if [[ -f "README.md" && -d "docs" ]]; then
  printf "  ✅ %-22s OK\n" "KAIRO repo structure"
else
  printf "  ❌ %-22s Not in KAIRO repo root\n" "KAIRO repo structure"
  FAILED=1
fi

echo
if [[ $FAILED -eq 0 ]]; then
  if [[ $WARNINGS -gt 0 ]]; then
    echo "🎉 Critical checks passed ($WARNINGS optional warnings)."
  else
    echo "🎉 All checks passed."
  fi
  exit 0
else
  echo "⚠️  Some critical checks failed. Fix the items above and re-run:"
  echo "   ./doctor.sh"
  exit 1
fi

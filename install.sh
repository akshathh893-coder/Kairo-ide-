#!/usr/bin/env bash
set -euo pipefail

# KAIRO Cloud IDE — Bootstrap / Install
# Idempotent. Safe to re-run.

echo "🚀 KAIRO Cloud IDE — Bootstrap"
echo "=============================="
echo

# Ensure we are in the repository root
if [[ ! -f "README.md" ]] || [[ ! -d "docs/architecture" ]]; then
  echo "❌ Error: Please run this script from the root of the Kairo-ide- repository."
  exit 1
fi

echo "→ Making scripts executable"
chmod +x doctor.sh install.sh 2>/dev/null || true

echo
echo "→ Running doctor (current state)"
./doctor.sh || true

echo
echo "→ Phase 1 bootstrap complete."
echo
echo "Recommended next steps:"
echo "  1. Open this repository in GitHub Codespaces for the fastest fully-configured experience."
echo "  2. Or install missing tools reported by doctor and re-run ./doctor.sh"
echo "  3. Explore docs/roadmap/ROADMAP.md to see what is coming next."
echo
echo "The platform is intentionally documentation-first. Read the specs before writing code."

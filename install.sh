#!/usr/bin/env bash
set -euo pipefail

# KAIRO Cloud IDE — Bootstrap / Install
# Idempotent installation of dependencies and basic configuration.

echo "🚀 KAIRO Cloud IDE — Bootstrap"
echo "=============================="
echo

# Detect OS
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
echo "Detected OS: $OS"

# Ensure we are in the repo root
if [[ ! -f "README.md" ]] || [[ ! -d "docs" ]]; then
  echo "Error: Please run this script from the root of the Kairo-ide- repository."
  exit 1
fi

echo
echo "1. Making scripts executable..."
chmod +x doctor.sh install.sh || true

echo
echo "2. Running doctor (pre-check)..."
./doctor.sh || true

echo
echo "3. Core setup complete for Phase 1."
echo "   Next steps:"
echo "   - Open in GitHub Codespaces for the fastest experience"
echo "   - Or continue with provider-specific bootstrap once Phase 2 lands"
echo
echo "Run './doctor.sh' any time to verify your environment."

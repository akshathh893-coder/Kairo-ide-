# Bootstrap Workflow

```
Clone Repository
       ↓
Install Dependencies (install.sh)
       ↓
Run Doctor
       ↓
Configure Environment
       ↓
Install Docker (if missing and allowed)
       ↓
Install Node / pnpm / GitHub CLI
       ↓
Generate Configuration
       ↓
Run Validation
       ↓
Ready
```

All steps must be idempotent. Re-running `./install.sh` or `kairo bootstrap` on an already configured machine should be a no-op or only apply missing pieces.

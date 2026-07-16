# Implementation Queue

Ordered list of the next concrete pieces of work. Claude Code (or human contributors) should pick from the top.

## Immediate (Phase 1 completion)

1. ~~**CLI skeleton**~~ ✅  
   Minimal TypeScript CLI that can run `kairo doctor` (wrapping the shell doctor) and `kairo --help` / `--version`.

2. **Provider interface TypeScript definition**  
   Formalize `docs/specifications/provider/SPEC.md` into actual TypeScript types under `cli/src/providers/types.ts` (or similar).

3. **Codespaces polish**  
   Ensure `.devcontainer/devcontainer.json` starts cleanly and that `postCreateCommand` leaves the environment in a green doctor state.

4. **First real ADR for free-tier strategy**  
   Document why Oracle Always Free is the preferred long-running target and the constraints it imposes.

## Shortly after

5. Local Docker Compose reference stack (code-server + Caddy)
6. Basic Cloudflare Tunnel helper scripts
7. Tailscale join helper

---

*Update this file when items are completed or priorities shift. Major priority changes should also update the ROADMAP.*

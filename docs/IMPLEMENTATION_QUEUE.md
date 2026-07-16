# Implementation Queue

Ordered list of the next concrete pieces of work. Claude Code (or human contributors) should pick from the top.

## Phase 1 — Foundation (Architect close-out complete)

1. ~~CLI skeleton~~ ✅
2. ~~Provider interface TypeScript definition~~ ✅
3. ~~Local provider stub + registry~~ ✅
4. ~~CLI integration (`kairo doctor`, `kairo providers`)~~ ✅
5. ~~Codespaces polish~~ ✅
6. ~~CLI + Local provider specifications~~ ✅

## Next work (Phase 2 preparation — for Claude Code / future sessions)

These items require following the DEVELOPMENT_MODEL:

1. Write full specification for Local Provider create/destroy/status (expand the existing stub SPEC).
2. Implement Local Provider runtime against that specification (Docker Compose reference stack).
3. Add Cloudflare Tunnel helper specification + minimal scripts.
4. Add Tailscale join helper specification + minimal scripts.
5. Oracle Free Tier provider specification (high priority free path).

## Rules for implementers

- Read the relevant SPEC.md first.
- Do not redesign interfaces.
- Do not invent new public commands or provider methods without updating the specification.
- Keep PRs small and focused.
- Update this queue when an item is completed.

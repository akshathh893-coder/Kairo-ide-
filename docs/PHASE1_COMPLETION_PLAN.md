# Phase 1 Completion Plan (Architect Scope)

This document guides the final close-out of Phase 1 Foundation so that Claude Code sessions can continue cleanly without inventing architecture.

## Goals of this close-out

1. Provide stable TypeScript contracts that match the written specifications.
2. Make the CLI usable for the two most important daily commands (`doctor`, basic provider awareness).
3. Ensure Codespaces / Dev Container starts in a green state.
4. Leave clear, complete specifications and queue items for the next human/Claude session.
5. No premature implementation of Phase 2+ runtime components (Docker stacks, tunnels, Oracle, etc.).

## Ordered Steps

| # | Step | Status |
|---|------|--------|
| 1 | Formalize Provider interface as TypeScript types | In progress |
| 2 | Expand CLI with `providers` / `doctor` integration using the types | Pending |
| 3 | Add minimal Local provider stub (types only + doctor) | Pending |
| 4 | Codespaces polish (postCreate + doctor green) | Pending |
| 5 | Write missing lightweight specifications (CLI commands, Local provider) | Pending |
| 6 | Final consistency pass (README, ROADMAP, QUEUE, .claude context) | Pending |
| 7 | Proof-read entire Phase 1 surface | Pending |

Only after step 7 is the Architect portion of Phase 1 considered complete.

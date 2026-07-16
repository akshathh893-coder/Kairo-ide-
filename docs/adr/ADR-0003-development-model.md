# ADR-0003: Strict Separation of Architecture and Implementation

## Status
Accepted

## Context

AI coding agents (Claude Code and others) are extremely capable at writing and refactoring code, but they have a tendency to redesign architecture while implementing features. This leads to inconsistent interfaces, forgotten decisions, and systems that become hard to reason about over time.

## Decision

We enforce a clear division of labor:

- **Chief Architect** (human / ChatGPT role): Owns architecture, ADRs, technical specifications, public interfaces, and the overall roadmap.
- **Claude Code** (and human implementers): Implements *exactly* against approved specifications. May refactor internally, fix bugs, write tests, and address review comments — but must not change public contracts or high-level design without an updated specification/ADR.

Every non-trivial feature begins with a written specification under `docs/specifications/`.

## Consequences

- Positive: Long-term coherence, easier onboarding for both humans and AI, clear audit trail of *why* decisions were made.
- Positive: Claude Code can move extremely fast because the design space is constrained.
- Negative: Slightly higher up-front documentation cost. We accept this trade-off.
- Negative: Requires discipline. PRs that redesign will be rejected.

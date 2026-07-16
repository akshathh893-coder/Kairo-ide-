# Development Model

## Roles & Responsibilities

| Component                  | Owner              | Notes |
|----------------------------|--------------------|-------|
| System architecture        | Chief Architect    | High-level design only |
| Technical specifications   | Chief Architect    | Detailed, testable |
| ADRs                       | Chief Architect    | Immutable historical record |
| Interfaces & contracts     | Chief Architect    | Written before code |
| Folder structure           | Chief Architect    | |
| Coding standards           | Chief Architect    | |
| Implementation             | Claude Code        | Against approved specs |
| Refactoring                | Claude Code        | Preserve architecture |
| Build / CI fixes           | Claude Code        | |
| CodeRabbit feedback        | Claude Code        | Without redesigning |

## Mandatory Workflow for Every Feature

1. **Specification**  
   Architect writes (or updates):
   - Purpose
   - Requirements
   - Interfaces / API contracts
   - Acceptance criteria
   - Failure modes
   - Tests

2. **Implementation**  
   Claude Code (or human) implements *exactly* against the specification.  
   No redesign. No renaming of public interfaces. No new public APIs without updating the spec first.

3. **Review**  
   CodeRabbit reviews for correctness, security, performance, and style.  
   Findings are addressed while preserving the approved architecture.  
   If a finding requires architectural change, the specification / ADR is updated first.

## Claude Code Prompt Pattern

```
Read the following specification(s):

docs/specifications/<feature>/SPEC.md
docs/specifications/<feature>/API.md

Implement exactly.

Rules:
- Do not redesign architecture
- Do not rename public interfaces
- Do not change contracts
- If implementation is impossible given the current constraints, stop and explain why
```

## Why This Model?

Large systems die when architecture is reinvented in every PR.  
By treating Claude Code as a senior implementation engineer (not an architect), we keep the system coherent as it grows. Months later we can still answer *why* every subsystem exists.

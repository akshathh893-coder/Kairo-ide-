# Module: CLI

## Purpose

Provide a single, consistent entry point (`kairo`) for all user and automation interactions with the platform.

## Requirements

- Discoverable help
- Consistent exit codes
- Structured output option (JSON) for scripting
- Works both interactively and in CI

## Dependencies

- Provider interface
- Configuration system (to be defined)

## Failure Modes

- Missing configuration → clear message + suggested `kairo init`
- Provider error → surface the provider's structured error

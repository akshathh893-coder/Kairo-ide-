/**
 * Provider Registry
 *
 * Central place where available providers are registered.
 * Adding a new provider = implement the interface + register here.
 */

import type { Provider } from "./types.js";
import { localProvider } from "./local.js";

const providers = new Map<string, Provider>();

// Built-in providers
providers.set(localProvider.name, localProvider);

export function getProvider(name: string): Provider | undefined {
  return providers.get(name);
}

export function listProviders(): Provider[] {
  return Array.from(providers.values());
}

export function registerProvider(provider: Provider): void {
  if (providers.has(provider.name)) {
    throw new Error(`Provider "${provider.name}" is already registered`);
  }
  providers.set(provider.name, provider);
}

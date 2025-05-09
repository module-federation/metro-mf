import { loadShare, loadShareSync } from "@module-federation/runtime";

const registry = {};
const loading = {};

export function loadSharedToRegistry(id) {
  if (id === "react" || id === "react-native") {
    return loadSharedToRegistrySync(id);
  } else {
    return loadSharedToRegistryAsync(id);
  }
}

export async function loadSharedToRegistryAsync(id) {
  await global.__METRO_FEDERATION__[__NAME__].__shareInit;
  const promise = loading[id];
  if (promise) {
    await promise;
  } else {
    registry[id] = {};
    loading[id] = loadShare(id);

    const shared = (await loading[id])();
    Object.getOwnPropertyNames(shared).forEach((key) => {
      registry[id][key] = shared[key];
    });
  }
}

export function loadSharedToRegistrySync(id) {
  loading[id] = loadShareSync(id);
  registry[id] = loading[id]();
}

export function getModuleFromRegistry(id) {
  const module = registry[id];

  if (!module) {
    throw new Error(`Module ${id} not found in registry`);
  }

  return module;
}

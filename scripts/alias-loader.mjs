import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

export async function resolve(specifier, context, nextResolve) {
  if (!specifier.startsWith("@/")) {
    return nextResolve(specifier, context);
  }

  const target = new URL(`../src/${specifier.slice(2)}`, import.meta.url);

  if (!/\.[a-z]+$/i.test(target.pathname)) {
    const withExtension = new URL(`${target.href}.ts`);

    if (existsSync(fileURLToPath(withExtension))) {
      return nextResolve(withExtension.href, context);
    }
  }

  return nextResolve(target.href, context);
}

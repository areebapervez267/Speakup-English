import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const HAS_EXTENSION = /\.[a-z]+$/i;

function firstExisting(url) {
  return existsSync(fileURLToPath(url)) ? url : null;
}

/** Node ESM needs an explicit extension; authored data files omit it. */
async function withExtension(specifier, context, nextResolve) {
  const target = new URL(specifier, context.parentURL);

  if (HAS_EXTENSION.test(target.pathname)) {
    return nextResolve(specifier, context);
  }

  const asFile = firstExisting(new URL(`${target.href}.ts`));
  if (asFile) return nextResolve(asFile.href, context);

  const asFolder = firstExisting(
    new URL(`${target.href.replace(/\/$/, "")}/index.ts`),
  );
  if (asFolder) return nextResolve(asFolder.href, context);

  return nextResolve(specifier, context);
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const target = new URL(`../src/${specifier.slice(2)}`, import.meta.url);

    if (!HAS_EXTENSION.test(target.pathname)) {
      const withTs = new URL(`${target.href}.ts`);
      if (existsSync(fileURLToPath(withTs))) {
        return nextResolve(withTs.href, context);
      }
      const asFolder = new URL(`${target.href.replace(/\/$/, "")}/index.ts`);
      if (existsSync(fileURLToPath(asFolder))) {
        return nextResolve(asFolder.href, context);
      }
    }

    return nextResolve(target.href, context);
  }

  const isRelative = specifier.startsWith("./") || specifier.startsWith("../");

  if (
    isRelative &&
    context.parentURL?.startsWith("file:") &&
    !HAS_EXTENSION.test(specifier)
  ) {
    return withExtension(specifier, context, nextResolve);
  }

  return nextResolve(specifier, context);
}

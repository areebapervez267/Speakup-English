import { redirect } from "next/navigation";

import { getAdminAccess } from "./auth";
import type { AdminAccess } from "./types";

export async function requireAdminPage(next = "/admin"): Promise<AdminAccess> {
  const access = await getAdminAccess();

  if (access.status === "signed-out") {
    redirect(`/login?next=${encodeURIComponent(next)}`);
  }

  return access;
}

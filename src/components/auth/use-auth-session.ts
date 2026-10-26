"use client";

import type { User } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export const AUTH_STATE_EVENT = "speakup:auth-changed";

// Display-only auth state. Protected pages verify the session on the server.
export function useAuthSession(configured: boolean) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(!configured);

  useEffect(() => {
    if (!configured) {
      return;
    }

    const client = getSupabaseBrowserClient();
    if (!client) {
      return;
    }

    let active = true;

    const refreshSession = () => {
      client.auth.getSession().then(({ data }) => {
        if (!active) {
          return;
        }

        setUser(data.session?.user ?? null);
        setReady(true);
      });
    };

    refreshSession();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      if (!active) {
        return;
      }

      setUser(session?.user ?? null);
      setReady(true);
    });

    window.addEventListener(AUTH_STATE_EVENT, refreshSession);

    return () => {
      active = false;
      subscription.unsubscribe();
      window.removeEventListener(AUTH_STATE_EVENT, refreshSession);

    };
  }, [configured, pathname]);

  return { user, ready };
}

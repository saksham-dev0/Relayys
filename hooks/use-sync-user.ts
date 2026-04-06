"use client";

import { useEffect } from "react";
import { useMutation } from "convex/react";
import { useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useSyncUser() {
  const { isAuthenticated } = useConvexAuth();
  const upsertUser = useMutation(api.users.upsertUser);

  useEffect(() => {
    if (isAuthenticated) {
      upsertUser();
    }
  }, [isAuthenticated, upsertUser]);
}

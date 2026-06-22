"use client";

import { useEffect, useState } from "react";
import type { AuthUser } from "@/lib/types/user";

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return user;
}
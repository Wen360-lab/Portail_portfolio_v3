"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (!user) {
            router.replace("/login");
            return;
        }
        setLoading(false);

    }, [router]);

    if (loading) {
        return <p>Chargement...</p>;
    }

  return <>{children}</>;
}
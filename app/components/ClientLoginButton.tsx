"use client";

import { useRouter } from "next/navigation";

export default function ClientLoginButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/login")} className="btn btn-primary">
      Log in
    </button>
  );
}

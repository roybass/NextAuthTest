import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import AdminPanel from "@/app/components/AdminPanel";

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }

  if (session.user.role !== "admin") {
    return (
      <>
        <h1>Access Denied</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminPanel />
    </div>
  );
}

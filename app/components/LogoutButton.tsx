import { auth, signOut } from "@/lib/auth";

export default async function LogoutButton() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button className="btn btn-secondary" type="submit">
        Sign out
      </button>
    </form>
  );
}

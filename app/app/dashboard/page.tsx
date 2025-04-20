import { auth, signOut } from "@/lib/auth";
import UserAvatar from "@/app/components/UserAvatar";
import LogoutButton from "@/app/components/LogoutButton";

export default async function Dashboard() {
    const session = await auth();
    if (!session) return <div>Not authenticated</div>;

    return (
        <div>
            <UserAvatar />
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
}

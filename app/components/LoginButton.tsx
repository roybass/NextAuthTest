import { auth } from "@/lib/auth";
import ClientLoginButton from "./ClientLoginButton";

export default async function LoginButton() {
  const session = await auth();
  if (session?.user) {
    return null;
  } else {
    return <ClientLoginButton />;
  }
}

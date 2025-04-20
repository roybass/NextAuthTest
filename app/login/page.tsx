import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/app/dashboard" });
        }}
      >
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm hover:bg-gray-100"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Signin with Google
        </button>
      </form>
    </>
  );
}

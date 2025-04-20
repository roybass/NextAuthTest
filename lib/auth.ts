import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, users } from "@/shared/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: DrizzleAdapter(db),
  providers: [Google],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // token: current JWT (can persist values across sessions)
      // user: only available on initial sign-in

      if (user) {
        // add custom data on initial login
        token.id = user.id;
        token.role = user.role; // make sure role is exposed via Drizzle `user`
      } else if (!token.role) {
        // token exists, but role isn't yet added (e.g. refresh) → fetch from DB
        const [dbUser] = await db
          .select({ role: users.role })
          .from(users)
          .where(eq(users.id, token.id as string))
          .limit(1);

        if (dbUser) {
          token.role = dbUser.role;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});

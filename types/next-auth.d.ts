import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Extend the built-in session types
   */
  interface Session {
    user: {
      /** The user's role */
      role: string
    } & DefaultSession["user"]
  }

  /**
   * Extend the built-in user types
   */
  interface User {
    /** The user's role */
    role: string
  }
}

declare module "next-auth/jwt" {
  /** Extend the built-in JWT types */
  interface JWT {
    /** The user's role */
    role?: string
  }
}

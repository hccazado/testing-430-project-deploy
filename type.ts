import "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    type?: string | null
    id?: string | null
    // add other custom properties here
  }

  interface Session {
    user: {
      type?: string
      id?: string
      // add other custom properties here
    } & DefaultSession["user"]
  }
}
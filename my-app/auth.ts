import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import bcrypt from 'bcrypt';
import { findUser } from './src/app/db/mongoQueries';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

declare module 'next-auth' {
  interface User {
    // Add your additional properties here:
    id?: string | null;
    type?: string | null;
  }
}

declare module '@auth/core/adapters' {
  interface AdapterUser {
    // Add your additional properties here:
    id: string | null;
    type: string | null;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const result = await findUser(email);
          if (!result) return null;
          const passwordMatch = await bcrypt.compare(password, result.password);

          if (passwordMatch) {
            const user = {
              id: result.id,
              name: result.name,
              email: result.email,
              type: result.type,
            };
            return user;
          }
          console.log('invalid credentials');
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.type = user.type;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.type = token.type as string;
      return session;
    },
  },
});

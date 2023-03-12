import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchAPI } from '@/utils/api/fetch'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials) {
        const response = await fetchAPI('/auth/local', "POST", {
          identifier: credentials.identifier,
          password: credentials.password,
        })

        const data = await response.json();
        const user = { ...data.user, jwt: data.jwt }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],

  session: {
    jwt: true,
  },

  secret: 'strapi',

  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/error', // Error code passed in query string as ?error=
    verifyRequest: '/verify-request', // (used for check email message)
    newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user.username = token.username
      session.blocked = token.blocked
      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.jwt = user.jwt;
        token.username = user.username
        token.blocked = user.blocked
      }
      return Promise.resolve(token);
    },
  },
}

const Auth = (req, res) =>
  NextAuth(req, res, authOptions);

export default Auth;
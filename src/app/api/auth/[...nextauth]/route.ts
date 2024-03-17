import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';
import { loginWithGoogle } from '@/lib/firebase/service';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || ''
    })
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === 'google') {
        const data = {
          fullName: user.name,
          email: user.email,
          type: 'google'
        };

        await loginWithGoogle(data, (result: { status: boolean; data: any }) => {
          if (result.status) {
            token.email = result.data.email;
            token.fullName = result.data.fullName;
            token.role = result.data.role;
          }
        });
      }

      return token;
    },
    async session({ session, token }: any) {
      if ('email' in token) session.user.email = token.email;

      if ('fullName' in token) session.user.fullName = token.fullName;

      if ('role' in token) session.user.role = token.role;

      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

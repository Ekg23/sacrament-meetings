import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // use your own login page instead of the Auth.js default
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protect all admin meeting routes
      const isNewMeeting = nextUrl.pathname.startsWith('/meetings/new');
      const isEditmeeting = /^\/meetings\/[^/]+\/edit$/.test(
          nextUrl.pathname,
      );

      const isProtected = isNewMeeting || isEditmeeting

      if (isProtected) {
        if(isLoggedIn) return true;
        return false; // redirects to the login page
      }
      

      // Redirect already-logged-in users away from the login page
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;
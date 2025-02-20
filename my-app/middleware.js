import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // Protect edit routes
    if (path.startsWith('/products') && path.includes('/edit')) {
      // Check specifically for creator type
      if (!token || token.type !== 'creator') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Ensure token exists and has required properties
        return !!token && typeof token.type === 'string';
      },
    },
  }
);

// Make sure to catch all product edit routes
export const config = {
  matcher: ['/products/:path*/edit'],
};

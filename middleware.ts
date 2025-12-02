import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for demo bypass
  if (request.nextUrl.searchParams.get('demo') === 'vip') {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get('accept-language');
  
  // Check if 'ja' (Japanese) is detected in accept-language header
  if (acceptLanguage && acceptLanguage.toLowerCase().includes('ja')) {
    return NextResponse.redirect('http://www.seikoro.com');
  }
  
  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


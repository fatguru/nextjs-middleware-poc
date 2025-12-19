import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // LOGIC: If Method is POST on Root -> Redirect to /pwned
  if (request.method === 'POST' && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/pwned', request.url), 307)
  }

  // LOGIC: If Method is GET/HEAD -> Allow pass through (Returns 200 from page.tsx)
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}

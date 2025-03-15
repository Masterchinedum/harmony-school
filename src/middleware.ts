//src/middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

export default clerkMiddleware((auth, req) => {
  // Public routes that don't require authentication
  const publicPaths = [/^\/$/i, /^\/(public|auth)\/.*/i];
  
  // Check if the requested path is public
  const isPublicPath = publicPaths.some(path => path.test(req.nextUrl.pathname));
  
  // If it's a public path, allow access without authentication
  if (isPublicPath) {
    return;
  }
  
  // For protected routes, check user roles
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  
  // If user is not logged in, redirect to sign-in page
  if (!role) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }
  
  // Role-based access control
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role)) {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

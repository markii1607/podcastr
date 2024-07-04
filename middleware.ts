import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// creating public routes that doesn't require authentication
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
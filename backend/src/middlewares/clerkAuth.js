import { clerkMiddleware, getAuth } from "@clerk/express";

// Clerk authentication middleware
export const requireAuth = clerkMiddleware();

// Helper to extract userId safely
export const getUserId = (req) => {
  const auth = getAuth(req);
  return auth.userId;
};

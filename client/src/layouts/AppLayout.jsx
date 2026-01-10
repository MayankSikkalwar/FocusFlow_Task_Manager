import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/app/Sidebar";

export default function AppLayout() {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-[#0B0F19] text-slate-200 flex">
          <Sidebar />
          <main className="flex-1 px-8 py-6">
            <Outlet />
          </main>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

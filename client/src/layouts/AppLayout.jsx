import { useState } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/app/Sidebar";
import AIPanel from "../components/app/AIPanel";

export default function AppLayout() {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-[#0B0F19] text-slate-200 flex relative">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 px-8 py-6">
            <Outlet />
          </main>

          {/* AI Side Panel */}
          <AIPanel open={aiOpen} />

          {/* AI Toggle Button */}
          <button
            onClick={() => setAiOpen((prev) => !prev)}
            className="
              fixed
              top-1/2
              -translate-y-1/2
              right-2

              flex
              items-center
              gap-2

              px-6
              py-4

              rounded-l-2xl
              shadow-xl

              bg-indigo-500
              hover:bg-indigo-600

              text-white
              text-sm
              font-medium

              transition
            "
          >
            <span className="text-lg">✨</span>
            <span>{aiOpen ? "Close AI" : "AI Assistant"}</span>
          </button>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

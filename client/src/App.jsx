import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/clerk-react";

import Landing from "./pages/Landing";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0C15] text-white flex items-center justify-center">
      <h1 className="text-3xl">Dashboard (Protected)</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ PUBLIC LANDING PAGE */}
        <Route path="/" element={<Landing />} />

        {/* ✅ CLERK AUTH ROUTES */}
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />

        {/* ✅ PROTECTED APP ROUTE */}
        <Route
          path="/app"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

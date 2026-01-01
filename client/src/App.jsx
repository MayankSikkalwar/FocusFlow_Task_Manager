import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to FocusFlow AI 🚀</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedOut>
                <SignIn routing="path" path="/" />
              </SignedOut>

              <SignedIn>
                <Dashboard />
              </SignedIn>
            </>
          }
        />

        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

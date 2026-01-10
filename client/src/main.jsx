import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        afterSignInUrl="/app/dashboard"
        afterSignUpUrl="/app/dashboard"
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);


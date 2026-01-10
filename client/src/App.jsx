import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />

      {/* Protected App */}
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default App;


import { LayoutGrid, CheckCircle, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `opacity-60 hover:opacity-100 transition ${
      location.pathname === path ? "opacity-100" : ""
    }`;

  return (
    <aside className="w-16 flex flex-col items-center py-6">
      {/* Top navigation */}
      <div className="flex flex-col items-center space-y-8">
        <Link to="/app/dashboard" className={linkClass("/app/dashboard")}>
          <LayoutGrid size={20} />
        </Link>

        <Link to="/app/tasks" className={linkClass("/app/tasks")}>
          <CheckCircle size={20} />
        </Link>

        {/* Settings disabled for MVP */}
        <div className="opacity-40 cursor-not-allowed">
          <Settings size={20} />
        </div>
      </div>

      {/* Bottom user controls */}
      <div className="mt-auto">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
            },
          }}
        />
      </div>
    </aside>
  );
}

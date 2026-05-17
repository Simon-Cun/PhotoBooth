import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const { accessToken, logout } = useAuthStore();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white">
      <span
        className="text-xl font-bold text-darling-brown-200"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Darling
      </span>

      <div className="flex items-center gap-6">
        <Link to="/booth" className="text-sm text-darling-brown-200">
          Photo Booth
        </Link>
        <Link to="/feed" className="text-sm text-darling-brown-200">
          Feed
        </Link>
        <Link to="/profile" className="text-sm text-darling-brown-200">
          Profile
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {accessToken ? (
          <>
            <Link
              to="/booth"
              className="bg-darling-brown-200 text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              + New card
            </Link>
            <button
              onClick={logout}
              className="text-sm text-darling-brown-200 hover:opacity-70 transition"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm text-darling-brown-200">
              Sign in
            </Link>
            <Link
              to="/register"
              className="bg-darling-brown-200 text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              Get started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

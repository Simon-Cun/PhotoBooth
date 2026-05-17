import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PhotoStrips from "@/components/PhotoStrips";

export default function Landing() {
  return (
    <div className="min-h-screen bg-darling-blue-100 flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center px-16">
        <div>
          <h1
            className="text-7xl font-bold text-darling-brown-200 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Darling
          </h1>
          <p className="text-4xl text-darling-brown-100 mb-8">
            A Digital Photo Booth
          </p>
          <div className="flex gap-3 mb-6">
            <Link
              to="/register"
              className="bg-darling-brown-200 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Create Your Card
            </Link>
            <Link
              to="/login"
              className="bg-white border border-darling-pink text-darling-brown-200 px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Browse the feed
            </Link>
          </div>
          <p className="text-xs text-darling-brown-100">
            ♥ 12k strips made · 4 dreamy styles
          </p>
        </div>

        <div className="relative flex-1 h-strip-h -translate-y-90">
          <PhotoStrips />
        </div>
      </div>
    </div>
  );
}

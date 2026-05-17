import { useState } from "react";
import api from "@/api/axios";
import { useNavigate, Link } from "react-router-dom";
import PhotoStrips from "@/components/PhotoStrips";
import Navbar from "@/components/Navbar";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/users/register/", form);
      navigate("/login");
    } catch (err) {
      if (err instanceof Error && "response" in err) {
        const axiosErr = err as { response?: { data?: { email?: string[] } } };
        const data = axiosErr.response?.data;
        if (data?.email) setError(data.email[0]);
        else setError("Something went wrong. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-darling-blue-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <div className="flex-1 flex flex-col justify-center px-16">
          <h1
            className="text-5xl font-bold text-darling-brown-200 mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get Started
          </h1>

          <div className="flex gap-3 mb-8">
            <Link
              to="/login"
              className="border bg-white border-darling-pink text-darling-brown-200 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Sign In
            </Link>
            <button className="bg-darling-brown-200 text-white px-6 py-2 rounded-full text-sm font-medium">
              Create an Account
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-sm"
          >
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <input
              placeholder="Email address"
              className="bg-white border border-darling-pink rounded-xl px-4 py-3 text-sm outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-white border border-darling-pink rounded-xl px-4 py-3 text-sm outline-none"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="submit"
              className="bg-darling-blue-200 text-white rounded-full py-3 text-sm font-medium mt-2 hover:opacity-90 transition w-40"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="relative flex-1 h-strip-h">
          <PhotoStrips />
        </div>
      </div>
    </div>
  );
}

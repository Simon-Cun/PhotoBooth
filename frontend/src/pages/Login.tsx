import { useState } from "react";
import api from "@/api/axios";
import { useAuthStore } from "@/store/authStore";
import { useNavigate, Link } from "react-router-dom";
import PhotoStrips from "@/components/PhotoStrips";
import Navbar from "@/components/Navbar";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login/", form);
      const token = res.data.access;
      const userRes = await api.get("/users/me/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAuth(userRes.data, token);
      navigate("/");
    } catch (err) {
      console.error(err);
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
            <button className="bg-darling-brown-200 text-white px-6 py-2 rounded-full text-sm font-medium">
              Sign In
            </button>
            <Link
              to="/register"
              className="border bg-white border-darling-pink text-darling-brown-200 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Create an Account
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-sm"
          >
            <input
              placeholder="Email address"
              className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-darling-brown-200"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-darling-brown-200"
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

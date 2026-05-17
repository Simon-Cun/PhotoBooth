import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const STYLES = [
  { id: "blush", label: "Blush", bg: "bg-darling-pink", photoBg: "bg-white" },
  { id: "sunshine", label: "Sunshine", bg: "bg-yellow-100", photoBg: "bg-yellow-50" },
  { id: "night", label: "Night", bg: "bg-darling-brown-200", photoBg: "bg-darling-dark" },
  { id: "pearl", label: "Pearl", bg: "bg-gray-200", photoBg: "bg-gray-100" },
];

export default function Booth() {
  const [selectedStyle, setSelectedStyle] = useState("blush");
  const [headline, setHeadline] = useState("");
  const [message, setMessage] = useState("");

  const currentStyle = STYLES.find((s) => s.id === selectedStyle)!;

  return (
    <div className="min-h-screen bg-darling-blue-100 flex flex-col">
      <Navbar />

      <div className="flex gap-12 px-12 py-8">
        {/* Left side */}
        <div className="flex-1 mx-50">
          <Link to="/" className="text-sm text-darling-brown-100 flex items-center gap-1 mb-6">
            ← Back
          </Link>

          <h1
            className="text-4xl font-bold text-darling-brown-200 mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Customize Your Card
          </h1>

          {/* Style picker */}
          <p className="text-sm font-medium text-darling-brown-200 mb-3">Strip Style</p>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {STYLES.map((style) => (
                <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`bg-white relative rounded-2xl p-3 border-2 text-left transition ${
                    selectedStyle === style.id
                    ? "border-darling-brown-200"
                    : "border-transparent "
                }`}
                >
                {selectedStyle === style.id && (
                    <span className="absolute top-2 right-2 bg-darling-brown-200 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                    </span>
                )}
                <div className={`${style.bg} rounded-xl p-2 flex flex-col gap-1 mb-2`}>
                    {[...Array(4)].map((_, i) => (
                    <div key={i} className={`${style.photoBg} rounded-md h-8`} />
                    ))}
                </div>
                <p className="text-xs text-darling-brown-200 font-medium">{style.label}</p>
                </button>
            ))}
            </div>

          {/* Photo upload */}
          <p className="text-sm font-medium text-darling-brown-200 mb-3">Photos (up to 4)</p>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-white mb-6 cursor-pointer hover:border-darling-brown-100 transition">
            <span className="text-2xl mb-2">↑</span>
            <p className="text-sm text-darling-brown-100">Drop photos here or click to upload</p>
          </div>

          {/* Headline */}
          <p className="text-sm font-medium text-darling-brown-200 mb-2">Headline</p>
          <input
            placeholder="Will you be my Valentine?"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none mb-4"
          />

          {/* Message */}
          <p className="text-sm font-medium text-darling-brown-200 mb-2">Your Message</p>
          <textarea
            placeholder="Every moment with you feels like a dream come true."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none mb-6 h-24 resize-none"
          />

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="bg-darling-brown-200 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Save photo card
            </button>
            <button className="border border-gray-200 text-darling-brown-200 px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition bg-white">
              Share
            </button>
          </div>
        </div>

        {/* Right side - preview */}
        <div className="w-64 sticky top-8 self-start mr-20">
          <div className={`${currentStyle.bg} p-4 flex flex-col gap-3`}>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`${currentStyle.photoBg} rounded-2xl h-36 flex items-center justify-center`}
              >
                <span className="text-gray-300 text-xs">Tap to add photo</span>
              </div>
            ))}
            {headline && (
              <p className="text-center text-sm italic text-darling-brown-200 mt-1">{headline}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
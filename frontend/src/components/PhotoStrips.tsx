export default function PhotoStrips() {
  return (
    <>
      <div className="absolute right-12 top-24 w-56 bg-darling-brown-200 rounded-3xl p-4 rotate-6 flex flex-col gap-3 shadow-2xl z-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-[#7a6a6a] rounded-2xl h-32" />
        ))}
        <p className="text-white/70 text-xs text-center mt-1 italic font-light tracking-wide">
          best night ever
        </p>
      </div>
      <div className="absolute right-52 top-12 w-56 bg-darling-pink rounded-3xl p-4 -rotate-3 flex flex-col gap-3 shadow-2xl z-20">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white/80 rounded-2xl h-32" />
        ))}
        <p className="text-darling-brown-200/80 text-xs text-center mt-1 italic font-light tracking-wide">
          spring 2026
        </p>
      </div>
    </>
  );
}

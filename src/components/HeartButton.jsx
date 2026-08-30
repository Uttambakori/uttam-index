import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export default function HeartButton() {
  const [likes, setLikes] = useState(48);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (e) => {
    const nextLiked = !isLiked;
    setIsLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));

    if (nextLiked) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 24,
        spread: 60,
        origin: { x, y },
        colors: ["#F9A3B5", "#FDC4CF", "#EE603E", "#F9CA3F"],
        ticks: 120,
        gravity: 1.2,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative w-full h-full rounded-[28px] p-4 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95 select-none ${
        isLiked
          ? "bg-[#FBA8B7] text-[#9E2A4B] ring-2 ring-[#F4758E]"
          : "bg-[#FDC4CF] hover:bg-[#FBA8B7] text-[#A63854]"
      }`}
      title="Give a like!"
    >
      <Heart
        className={`w-9 h-9 transition-transform duration-300 group-hover:scale-110 ${
          isLiked ? "fill-current scale-110" : "fill-current/70"
        }`}
      />
      <span className="text-[11px] font-bold mt-1 font-mono tracking-tight opacity-80">
        {likes}
      </span>
    </button>
  );
}

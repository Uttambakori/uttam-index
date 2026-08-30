import React, { useState } from "react";
import { X, Heart, MessageCircle, ExternalLink, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import ConnectModal from "./components/ConnectModal";
import ProjectModal from "./components/ProjectModal";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [likes, setLikes] = useState(48);
  const [isLiked, setIsLiked] = useState(false);

  const flashcutProject = PROJECTS.find((p) => p.id === "flashcut") || PROJECTS[0];
  const scrawlProject = PROJECTS.find((p) => p.id === "scrawl") || PROJECTS[1];

  const handleHeartClick = (e) => {
    e.stopPropagation();
    const nextLiked = !isLiked;
    setIsLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));

    if (nextLiked) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 28,
        spread: 65,
        origin: { x, y },
        colors: ["#FF91AA", "#F8D7D8", "#FFD83F", "#56D0FF", "#A4E685"],
        ticks: 150,
        gravity: 1.2,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#1E1E1E] flex flex-col items-center justify-start sm:py-8 sm:px-4 font-sans antialiased selection:bg-[#FFD83F]">
      {/* PASSPORT CARD CONTAINER (Exact 1:1 match to reference screenshot) */}
      <div className="w-full max-w-[440px] bg-white sm:rounded-[40px] sm:shadow-2xl sm:border border-black/[0.06] p-6 sm:p-7 flex flex-col justify-between min-h-screen sm:min-h-0 relative overflow-hidden transition-all duration-300">
        
        {/* TOP BAR: Close button & clean identity */}
        <div className="flex items-center justify-between pb-2">
          <button
            onClick={() => setIsConnectOpen(true)}
            className="p-2 -ml-2 rounded-full text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
            title="Close / Menu"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-black transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 1. CLOVER AVATAR & TYPOGRAPHIC PROFILE SECTION */}
        <div className="flex flex-col items-center text-center pt-1 pb-6 space-y-2">
          {/* Authentic 4-Petal Clover Shape Avatar */}
          <div className="relative w-40 h-40 flex items-center justify-center select-none transition-transform duration-300 hover:scale-105">
            <img
              src="/assets/clover_avatar.png"
              alt="Uttam Patel"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>

          {/* Bold Name: "Uttam" */}
          <div className="pt-1">
            <h1 className="text-4xl font-extrabold text-[#1E1E1E] tracking-tight font-display">
              Uttam
            </h1>
            <p className="text-sm font-medium text-zinc-500 mt-0.5">
              Hosts 10 months • AI Prototyper
            </p>
          </div>
        </div>

        {/* 2. BENTO PASSPORT GRID (Exact 2-Column Balance as in Screenshot) */}
        <div className="grid grid-cols-2 gap-3 select-none">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-3">
            
            {/* CARD 1: PINK SUPERHOST CARD */}
            <div
              onClick={() => setIsConnectOpen(true)}
              className="bg-[#FF91AA] hover:bg-[#F8829C] text-[#4A1625] rounded-[24px] px-4 py-3.5 flex items-center justify-between shadow-xs transition-all duration-200 cursor-pointer active:scale-95 group"
            >
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#4A1625]">
                Superhost
              </span>
              <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-lg flex-shrink-0 group-hover:rotate-12 transition-transform">
                🏆
              </div>
            </div>

            {/* CARD 2 & 3: HEART & MESSAGE SQUIRCLE ROW */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Soft Pink Heart Squircle */}
              <button
                onClick={handleHeartClick}
                className={`w-full aspect-square rounded-[24px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-90 group select-none ${
                  isLiked ? "bg-[#F5B5C1] ring-2 ring-[#E85D75]" : "bg-[#F8D7D8] hover:bg-[#F4C9CD]"
                }`}
                title="Like this profile"
              >
                <Heart
                  className={`w-9 h-9 transition-transform duration-200 group-hover:scale-110 ${
                    isLiked ? "fill-[#933D4F] text-[#933D4F]" : "fill-[#933D4F] text-[#933D4F]"
                  }`}
                />
              </button>

              {/* Soft Purple Message Squircle */}
              <button
                onClick={() => setIsConnectOpen(true)}
                className="w-full aspect-square rounded-[24px] bg-[#A3A0E3] hover:bg-[#9693DC] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-90 group select-none"
                title="Message / Connect"
              >
                <MessageCircle className="w-9 h-9 fill-[#464F96] text-[#464F96] transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>

            {/* CARD 4: SKY BLUE LOCATION & SCRAWL CARD */}
            <div
              onClick={() => setActiveProject(scrawlProject)}
              className="bg-[#56D0FF] hover:bg-[#43C6F7] text-[#0C3E57] rounded-[28px] p-4.5 pt-4 relative overflow-hidden shadow-xs flex flex-col justify-between h-[230px] transition-all duration-200 cursor-pointer active:scale-98 group"
            >
              <div>
                <span className="text-xs font-semibold text-[#134B68]/90 block">
                  Location
                </span>
                <div className="text-2xl font-black tracking-tight text-[#0C3E57] leading-tight mt-0.5">
                  India,
                  <br />
                  Global
                </div>
              </div>

              {/* Authentic 3D Blue Crater Sphere resting at the bottom */}
              <div className="relative -mx-4.5 -mb-4.5 mt-auto flex items-end justify-center">
                <img
                  src="/assets/ref_blue_sphere.png"
                  alt="3D Blue Sculpture"
                  className="w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />

                {/* Country Flag Badge */}
                <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm border border-white/60">
                  {PROFILE.countryFlag}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-3">
            
            {/* CARD 5: TALL YELLOW RATING & FLASHCUT PRO CARD */}
            <div
              onClick={() => setActiveProject(flashcutProject)}
              className="bg-[#FFD83F] hover:bg-[#F7CE2E] text-[#6B4E00] rounded-[28px] p-4.5 pt-4 relative overflow-hidden shadow-xs flex flex-col justify-between h-[275px] transition-all duration-200 cursor-pointer active:scale-98 group"
            >
              {/* Top: Rating & 4.9 */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#6B4E00]/90">
                  Rating
                </span>
                <span className="text-4xl font-black tracking-tight text-[#6B4E00] -mt-1">
                  {flashcutProject.rating}
                </span>
              </div>

              {/* Center: Authentic 3D Yellow Plush Flower */}
              <div className="relative -mx-2 my-auto flex items-center justify-center">
                <img
                  src="/assets/ref_yellow_flower.png"
                  alt="3D Yellow Flower"
                  className="w-full max-h-32 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Bottom: 22 Reviews Pill with Overlapping Avatars */}
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-xs flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#6B4E00]">
                  {flashcutProject.reviewsCount} reviews
                </span>
                <div className="flex -space-x-1.5 ml-1">
                  <div className="w-4 h-4 rounded-full bg-[#E14778] border border-white" />
                  <div className="w-4 h-4 rounded-full bg-[#B29272] border border-white" />
                  <div className="w-4 h-4 rounded-full bg-[#8E9B66] border border-white" />
                </div>
              </div>
            </div>

            {/* CARD 6: GREEN BIO & ETHOS CARD */}
            <div
              onClick={() => setIsConnectOpen(true)}
              className="bg-[#A4E685] hover:bg-[#96DB75] text-[#214E0C] rounded-[28px] p-4.5 pt-4 relative overflow-hidden shadow-xs flex flex-col justify-between h-[185px] transition-all duration-200 cursor-pointer active:scale-98 group"
            >
              {/* Top: Bio label & Authentic 3D Green Knot */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#214E0C]/90">
                  Bio
                </span>
                {/* 3D Green Knot in top-right */}
                <div className="w-16 h-16 -mt-2 -mr-2 flex-shrink-0">
                  <img
                    src="/assets/ref_green_knot.png"
                    alt="3D Green Knot"
                    className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>
              </div>

              {/* Bottom: Bio Copy matching reference screenshot typography */}
              <p className="text-xs font-bold leading-snug text-[#214E0C] mt-auto">
                Product builder, crafting tangible tools with AI, sound sync & canvas engines
              </p>
            </div>

          </div>

        </div>

        {/* BOTTOM SUBTLE FOOTER */}
        <div className="pt-5 pb-1 text-center text-[11px] text-zinc-400 font-medium">
          <span>Tap any card to view apps or get in touch</span>
        </div>

      </div>

      {/* MODALS */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />

      <ProjectModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

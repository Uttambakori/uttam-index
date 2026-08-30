import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Layers,
  Smartphone,
  Monitor,
  Trophy,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import CloverAvatar from "./components/CloverAvatar";
import HeartButton from "./components/HeartButton";
import ConnectModal from "./components/ConnectModal";
import ProjectModal from "./components/ProjectModal";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [viewMode, setViewMode] = useState("auto"); // 'auto' | 'mobile-frame'

  const flashcutProject = PROJECTS.find((p) => p.id === "flashcut") || PROJECTS[0];
  const scrawlProject = PROJECTS.find((p) => p.id === "scrawl") || PROJECTS[1];

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#1E1E1E] flex flex-col items-center justify-start p-4 sm:p-8 font-sans selection:bg-[#FCE082]">
      {/* Top Floating Utility Bar */}
      <header className="w-full max-w-4xl flex items-center justify-between py-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-zinc-500 font-mono tracking-tight">
            uttam.index • v1.0
          </span>
        </div>

        {/* View Switcher (Responsive / Mobile Frame) */}
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm p-1 rounded-full border border-[#E5E2D9] shadow-xs text-xs">
          <button
            onClick={() => setViewMode("auto")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
              viewMode === "auto"
                ? "bg-[#1E1E1E] text-white shadow-xs font-semibold"
                : "text-zinc-500 hover:text-[#1E1E1E]"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Responsive</span>
          </button>
          <button
            onClick={() => setViewMode("mobile-frame")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
              viewMode === "mobile-frame"
                ? "bg-[#1E1E1E] text-white shadow-xs font-semibold"
                : "text-zinc-500 hover:text-[#1E1E1E]"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Frame</span>
          </button>
        </div>
      </header>

      {/* WORKSPACE CONTAINER */}
      <main
        className={`w-full transition-all duration-300 ${
          viewMode === "mobile-frame"
            ? "max-w-[420px] bg-white rounded-[44px] shadow-2xl p-6 border-8 border-[#1E1E1E]/5 my-4"
            : "max-w-4xl"
        }`}
      >
        {/* TOP PROFILE PASSPORT SECTION (1:1 with Reference Image) */}
        <div className="flex flex-col items-center text-center pt-2 pb-6 space-y-3">
          {/* Clover Squircle Avatar */}
          <CloverAvatar src="/assets/avatar.jpg" alt={PROFILE.name} size={170} />

          {/* Name & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight font-display">
              {PROFILE.name}
            </h1>
            <p className="text-sm font-medium text-zinc-500 mt-1">
              {PROFILE.subtitle} • {PROFILE.experience}
            </p>
          </div>
        </div>

        {/* BENTO PASSPORT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 select-none">
          {/* 1. PINK SUPERHOST / BUILDER BADGE CARD */}
          <div
            onClick={() => setIsConnectOpen(true)}
            className="sm:col-span-7 bg-[#F9A3B5] hover:bg-[#F88CA2] text-[#4A1625] rounded-[28px] p-4.5 px-6 flex items-center justify-between shadow-xs transition-all duration-200 cursor-pointer active:scale-98"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                {PROFILE.status}
              </div>
              <div className="text-[11px] font-semibold text-[#6C2237] mt-0.5">
                Click to connect or view bio
              </div>
            </div>
            <div className="w-11 h-11 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-xl flex-shrink-0">
              🏆
            </div>
          </div>

          {/* 2. QUICK CONNECT / SOCIAL ROW */}
          <div className="sm:col-span-5 grid grid-cols-2 gap-3">
            {/* Pink Heart Button */}
            <HeartButton />

            {/* Purple Message Bubble Pill */}
            <button
              onClick={() => setIsConnectOpen(true)}
              className="group w-full h-full rounded-[28px] p-4 bg-[#AAB0E8] hover:bg-[#9FA6E4] text-[#2C3266] flex flex-col items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              title="Get in touch / LinkedIn"
            >
              <MessageCircle className="w-9 h-9 fill-current transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[11px] font-bold mt-1 font-mono tracking-tight opacity-80">
                Connect
              </span>
            </button>
          </div>

          {/* 3. BLUE LOCATION & SCRAWL CARD (sm:col-span-5) */}
          <div
            onClick={() => setActiveProject(scrawlProject)}
            className="sm:col-span-5 bg-[#38B2F8] hover:bg-[#25A7F0] text-[#0C4A6E] rounded-[32px] p-5 relative overflow-hidden shadow-xs flex flex-col justify-between min-h-[220px] transition-all duration-200 cursor-pointer group active:scale-98"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#075985]/80">
                  Featured App • 02
                </span>
                <span className="text-xs font-mono font-bold bg-white/80 px-2 py-0.5 rounded-full text-[#0C4A6E]">
                  {scrawlProject.title}
                </span>
              </div>
              <div className="text-2xl font-black tracking-tight mt-1">
                {PROFILE.location}
              </div>
              <div className="text-xs text-[#075985] font-medium mt-0.5">
                {scrawlProject.tagline}
              </div>
            </div>

            {/* 3D Tactile Blue Sponge Sphere */}
            <div className="relative flex items-center justify-center pt-2">
              <img
                src="/assets/blue_sphere.jpg"
                alt="3D Blue Sculpture"
                className="w-32 h-32 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              {/* Flag Badge Pill */}
              <div className="absolute bottom-1 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-base border border-white/40">
                {PROFILE.countryFlag}
              </div>
            </div>
          </div>

          {/* 4. TALL YELLOW FLASHCUT PRO CARD (sm:col-span-7) */}
          <div
            onClick={() => setActiveProject(flashcutProject)}
            className="sm:col-span-7 bg-[#F9CA3F] hover:bg-[#F7C22E] text-[#573F00] rounded-[32px] p-5.5 relative overflow-hidden shadow-xs flex flex-col justify-between min-h-[220px] transition-all duration-200 cursor-pointer group active:scale-98"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#785700]/80">
                  Featured App • 01
                </span>
                <div className="text-2xl sm:text-3xl font-black tracking-tight mt-0.5">
                  {flashcutProject.title}
                </div>
                <div className="text-xs font-medium text-[#785700] mt-0.5">
                  {flashcutProject.tagline}
                </div>
              </div>

              {/* Big Rating Pill */}
              <div className="text-right">
                <span className="text-xs font-semibold text-[#785700] block">Rating</span>
                <span className="text-3xl sm:text-4xl font-black tracking-tight">
                  {flashcutProject.rating}
                </span>
              </div>
            </div>

            {/* 3D Tactile Yellow Plush Flower in the center */}
            <div className="relative flex items-center justify-center py-2">
              <img
                src="/assets/yellow_flower.jpg"
                alt="3D Yellow Flower"
                className="w-36 h-36 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              />
            </div>

            {/* Bottom Reviews & Launch Pill */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-xs text-xs font-bold text-[#573F00]">
                <span>{flashcutProject.reviewsCount} reviews</span>
                <div className="flex -space-x-1.5 ml-1">
                  <div className="w-4.5 h-4.5 rounded-full bg-rose-400 border border-white" />
                  <div className="w-4.5 h-4.5 rounded-full bg-sky-400 border border-white" />
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-400 border border-white" />
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-[#573F00] group-hover:underline">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* 5. GREEN BIO CARD */}
          <div className="sm:col-span-12 bg-[#99DE5F] hover:bg-[#91D855] text-[#244A0D] rounded-[32px] p-6 relative overflow-hidden shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-200 cursor-pointer group active:scale-98">
            <div className="space-y-1.5 max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2F6111]/80">
                Philosophy & Bio
              </span>
              <p className="text-sm sm:text-base font-bold leading-snug">
                "{PROFILE.bio}"
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="pill-tag text-[10px] bg-white/70 px-2 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  Web Audio
                </span>
                <span className="pill-tag text-[10px] bg-white/70 px-2 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  Generative UI
                </span>
                <span className="pill-tag text-[10px] bg-white/70 px-2 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  AI Workflows
                </span>
              </div>
            </div>

            {/* 3D Tactile Green Torus Sculpture */}
            <div className="flex-shrink-0">
              <img
                src="/assets/green_knot.jpg"
                alt="3D Green Knot"
                className="w-28 h-28 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
          </div>
        </div>

        {/* FOOTER LINKS */}
        <footer className="pt-8 pb-4 text-center text-xs text-zinc-500 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-zinc-700 hover:text-[#0A66C2] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-zinc-700 hover:text-black transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <button
            onClick={() => setIsConnectOpen(true)}
            className="font-semibold text-zinc-700 hover:text-emerald-600 transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </footer>
      </main>

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

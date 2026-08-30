import React, { useState } from "react";
import {
  MessageCircle,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Volume2,
  PenTool,
  Check,
} from "lucide-react";
import HeartButton from "./components/HeartButton";
import ConnectModal from "./components/ConnectModal";
import ProjectModal from "./components/ProjectModal";
import InteractiveCard from "./components/InteractiveCard";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isHoveringAudio, setIsHoveringAudio] = useState(false);

  const flashcutProject = PROJECTS.find((p) => p.id === "flashcut") || PROJECTS[0];
  const scrawlProject = PROJECTS.find((p) => p.id === "scrawl") || PROJECTS[1];

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#1E1E1E] flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-sans selection:bg-[#FCE082]">
      {/* MINIMAL TOP UTILITY BAR */}
      <header className="w-full max-w-4xl flex items-center justify-between py-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-zinc-400 font-mono tracking-wider uppercase">
            Personal Index • 2026
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 font-semibold border border-[#E5E2D9] shadow-xs transition-all cursor-pointer"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 font-semibold border border-[#E5E2D9] shadow-xs transition-all cursor-pointer"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </header>

      {/* WORKSPACE CONTAINER */}
      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* MINIMAL EDITORIAL TYPOGRAPHIC HEADER (Name only, no photo) */}
        <div className="w-full text-center py-6 sm:py-10 space-y-3">
          {/* Subtle status tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E5E2D9] text-xs font-semibold text-zinc-600 shadow-xs mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>AI-Native Prototyper & Creative Technologist</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1E1E1E] tracking-tight font-display">
            {PROFILE.name}
          </h1>

          {/* Subtitle / Focus areas */}
          <p className="text-sm sm:text-base text-zinc-500 font-medium max-w-md mx-auto leading-relaxed">
            Crafting tactile digital instruments, sound-synchronized media tools, and generative canvas interfaces with AI agents.
          </p>
        </div>

        {/* BENTO PASSPORT GRID (Fluidly responsive on Mobile & Desktop) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 select-none pt-2">
          {/* 1. PINK SUPERHOST / BUILDER BADGE CARD (Full width mobile, 7 cols desktop) */}
          <InteractiveCard
            onClick={() => setIsConnectOpen(true)}
            className="sm:col-span-7 bg-[#F9A3B5] hover:bg-[#F88CA2] text-[#4A1625] rounded-[32px] p-5 sm:p-6 flex items-center justify-between shadow-xs transition-colors"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6C2237]/80">
                Core Discipline
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {PROFILE.status}
              </div>
              <div className="text-xs font-semibold text-[#6C2237] mt-1">
                {PROFILE.experience} • Click to connect
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
              🏆
            </div>
          </InteractiveCard>

          {/* 2. INTERACTIVE SOCIAL ROW (Full width mobile, 5 cols desktop) */}
          <div className="sm:col-span-5 grid grid-cols-2 gap-3 min-h-[100px]">
            {/* Heart button with like counter + confetti */}
            <HeartButton />

            {/* Purple Message Bubble Button */}
            <button
              onClick={() => setIsConnectOpen(true)}
              className="group w-full h-full rounded-[28px] p-4 bg-[#AAB0E8] hover:bg-[#9FA6E4] text-[#2C3266] flex flex-col items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              title="Get in touch"
            >
              <MessageCircle className="w-8 h-8 fill-current transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[11px] font-bold mt-1 font-mono tracking-tight opacity-80">
                Connect
              </span>
            </button>
          </div>

          {/* 3. BLUE SCRAWL CARD (sm:col-span-5) */}
          <InteractiveCard
            onClick={() => setActiveProject(scrawlProject)}
            className="sm:col-span-5 bg-[#38B2F8] hover:bg-[#25A7F0] text-[#0C4A6E] rounded-[36px] p-6 relative overflow-hidden shadow-xs flex flex-col justify-between min-h-[250px] transition-colors group"
          >
            <div className="z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#075985]/80 flex items-center gap-1">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Creative Canvas</span>
                </span>
                <span className="text-[11px] font-mono font-bold bg-white/80 px-2.5 py-0.5 rounded-full text-[#0C4A6E]">
                  {scrawlProject.title}
                </span>
              </div>
              <div className="text-2xl font-black tracking-tight mt-1.5">
                {PROFILE.location}
              </div>
              <div className="text-xs text-[#075985] font-medium mt-0.5">
                {scrawlProject.tagline}
              </div>
            </div>

            {/* Transparent Stylus Pen drawing ribbon */}
            <div className="relative flex items-center justify-center py-2 z-10">
              <img
                src={scrawlProject.asset}
                alt={scrawlProject.title}
                className="w-32 h-32 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              {/* Country flag badge */}
              <div className="absolute bottom-0 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm border border-white/50">
                {PROFILE.countryFlag}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 z-10">
              <span className="text-[11px] font-semibold text-[#075985]">
                Vector Sketch Engine
              </span>
              <span className="text-xs font-bold text-[#0C4A6E] flex items-center gap-1 group-hover:underline">
                Launch App <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </InteractiveCard>

          {/* 4. TALL YELLOW FLASHCUT PRO CARD (sm:col-span-7) */}
          <InteractiveCard
            onClick={() => setActiveProject(flashcutProject)}
            className="sm:col-span-7 bg-[#F9CA3F] hover:bg-[#F7C22E] text-[#573F00] rounded-[36px] p-6 relative overflow-hidden shadow-xs flex flex-col justify-between min-h-[250px] transition-colors group"
          >
            <div className="z-10 flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#785700]/80 flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Beat-Sync Studio</span>
                </span>
                <div className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  {flashcutProject.title}
                </div>
                <div className="text-xs font-medium text-[#785700] mt-0.5">
                  {flashcutProject.tagline}
                </div>
              </div>

              {/* Rating & reviews */}
              <div className="text-right">
                <span className="text-xs font-semibold text-[#785700] block">Score</span>
                <span className="text-3xl sm:text-4xl font-black tracking-tight">
                  {flashcutProject.rating}
                </span>
              </div>
            </div>

            {/* Transparent Cinema Film Reel with Audio Waveform */}
            <div
              onMouseEnter={() => setIsHoveringAudio(true)}
              onMouseLeave={() => setIsHoveringAudio(false)}
              className="relative flex items-center justify-center py-2 z-10"
            >
              <img
                src={flashcutProject.asset}
                alt={flashcutProject.title}
                className="w-36 h-36 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2"
              />

              {/* Micro-interaction: Dancing Equalizer Bars on Hover */}
              <div className="absolute top-1 left-4 flex items-end gap-1 h-6 px-2 py-1 rounded-full bg-white/70 backdrop-blur-xs">
                {[0.4, 0.9, 0.6, 1.0, 0.7].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      height: `${h * 16}px`,
                      animation: "pulseGlow 1.2s infinite ease-in-out",
                      animationDelay: `${i * 0.15}s`,
                    }}
                    className="w-1 bg-[#573F00] rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Bottom info pill & launch */}
            <div className="flex items-center justify-between pt-1 z-10">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-xs text-xs font-bold text-[#573F00]">
                <span>{flashcutProject.reviewsCount} tests</span>
                <span className="text-emerald-600 font-mono">● Active</span>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-[#573F00] group-hover:underline">
                <span>Explore Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </InteractiveCard>

          {/* 5. GREEN BIO CARD (sm:col-span-12) */}
          <InteractiveCard
            onClick={() => setIsConnectOpen(true)}
            className="sm:col-span-12 bg-[#99DE5F] hover:bg-[#91D855] text-[#244A0D] rounded-[36px] p-6 sm:p-7 relative overflow-hidden shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors"
          >
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2F6111]/80">
                Design & Prototyping Philosophy
              </span>
              <p className="text-base sm:text-lg font-bold leading-snug">
                "{PROFILE.bio}"
              </p>
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <span className="text-[11px] bg-white/80 px-2.5 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  Web Audio API
                </span>
                <span className="text-[11px] bg-white/80 px-2.5 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  WebCodecs 4K
                </span>
                <span className="text-[11px] bg-white/80 px-2.5 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  Canvas Engines
                </span>
                <span className="text-[11px] bg-white/80 px-2.5 py-0.5 rounded-full font-semibold text-[#244A0D]">
                  AI Agents
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center p-3 bg-white/80 rounded-2xl shadow-xs text-xs font-bold text-[#244A0D] gap-1.5 cursor-pointer hover:bg-white transition-colors">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </InteractiveCard>
        </div>

        {/* MINIMAL FOOTER */}
        <footer className="pt-10 pb-6 text-center text-xs text-zinc-500 flex flex-wrap items-center justify-center gap-4">
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
            itsuttampatel@gmail.com
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

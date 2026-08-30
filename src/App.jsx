import React, { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Copy,
  Check,
  Smartphone,
  PenTool,
  Sparkles,
} from "lucide-react";
import ConnectModal from "./components/ConnectModal";
import ProjectModal from "./components/ProjectModal";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import {
  PointingHandMark,
  LightningSticker,
  HeartSticker,
  SparkleSticker,
  BearSticker,
  HandDrawnArrow,
} from "./components/SuperrElements";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf9] text-[#171717] flex flex-col font-sans selection:bg-[#ff6f1e] selection:text-[#fdfbf9]">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <header className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
        {/* Top-left Brand Mark: Hand icon in Charcoal */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform hover:-rotate-6"
          title="uttam bakori"
        >
          <PointingHandMark className="w-8 h-8 text-[#171717]" />
        </a>

        {/* Top-right Persistent Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex superr-pill-btn text-xs py-2 px-4"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>linkedin</span>
          </a>

          <button
            onClick={() => setIsConnectOpen(true)}
            className="superr-pill-btn text-xs py-2 px-5"
          >
            <span>say hello →</span>
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION (Warm Schoolyard Canvas) */}
      <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-8 pb-20 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Lowercase Display Headline & Story */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Handwritten Script Annotation in Marker Orange */}
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl sm:text-3xl text-[#ff6f1e] font-bold rotate-[-2deg]">
                dear visitor,
              </span>
              <HandDrawnArrow className="w-8 h-6 text-[#171717] rotate-[10deg]" direction="down-right" />
            </div>

            {/* Chunky Lowercase Display Type (Fraunces / Gelica 600 in Cocoa Ink) */}
            <h1 className="display-title text-[56px] sm:text-[84px] md:text-[96px] text-[#2b1a07] leading-[1.08] tracking-tight">
              meet uttam bakori.
            </h1>

            {/* Story Paragraph with Hand-Drawn Marker Highlight */}
            <p className="text-lg sm:text-xl text-[#171717] leading-[1.6] max-w-xl font-normal">
              i'm a visual and ui/ux designer who thinks about{" "}
              <span className="marker-underline font-medium">how things should feel</span>{" "}
              before i think about how they look. i spend my days designing product interfaces and brand visual systems at digieagle, and my weekends building small web tools for my phone when i run into creative friction.
            </p>

            {/* Pill Action Buttons & Pre-order Info Block */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#work" className="superr-pill-btn">
                  <span>flip through my work ↓</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="superr-pill-btn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>read on linkedin →</span>
                </a>
              </div>

              <div className="text-xs text-[#2b1a07]/70 font-normal pt-1 flex items-center gap-2">
                <span>based in india</span>
                <span>•</span>
                <span>38.2m+ organic visual impressions</span>
                <span>•</span>
                <span>open to collaborations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tactile Schoolyard Name Label Sticker */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0 select-none">
            
            {/* Laminated Name Tag Card (Parchi) */}
            <div className="w-full max-w-[340px] name-label-sticker p-6 sm:p-7 space-y-4 relative rotate-[3deg] transition-transform duration-300 hover:rotate-0">
              
              {/* Header stripe inside the sticker */}
              <div className="border-b-2 border-[#171717] pb-2 flex items-center justify-between">
                <span className="font-gelica text-xs font-semibold uppercase tracking-wider text-[#2b1a07]">
                  notebook index
                </span>
                <span className="font-mono text-[11px] font-bold text-[#ff6f1e]">
                  vol. 01
                </span>
              </div>

              {/* Laminated Label Fields */}
              <div className="space-y-3 font-gelica text-sm">
                <div className="flex items-baseline justify-between border-b border-[#171717]/15 pb-1">
                  <span className="text-xs text-[#171717]/60 font-medium">name:</span>
                  <span className="font-semibold text-base text-[#2b1a07]">uttam bakori</span>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#171717]/15 pb-1">
                  <span className="text-xs text-[#171717]/60 font-medium">role:</span>
                  <span className="font-semibold text-[#2b1a07]">visual & ui/ux designer</span>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#171717]/15 pb-1">
                  <span className="text-xs text-[#171717]/60 font-medium">studio:</span>
                  <span className="font-semibold text-[#2b1a07]">digieagle inc</span>
                </div>

                <div className="flex items-baseline justify-between pt-0.5">
                  <span className="text-xs text-[#171717]/60 font-medium">roll no:</span>
                  <span className="font-mono font-bold text-sm text-[#ff6f1e]">38.2m impressions</span>
                </div>
              </div>

              {/* Bottom handwriting seal */}
              <div className="pt-2 flex items-center justify-between text-xs font-hand text-[#ff6f1e] text-lg font-bold">
                <span>peeled & pinned</span>
                <span>2026</span>
              </div>

              {/* Decorative Stickers overlapping the name card */}
              <div className="absolute -top-5 -right-4 rotate-[14deg]">
                <LightningSticker className="w-9 h-9 drop-shadow-xs" />
              </div>

              <div className="absolute -bottom-4 -left-4 rotate-[-12deg]">
                <HeartSticker className="w-10 h-10 drop-shadow-xs" />
              </div>
            </div>

            {/* Marker Caption with Arrow pointing at the parchi */}
            <div className="absolute -bottom-8 right-6 hidden sm:flex items-center gap-1.5 pointer-events-none">
              <HandDrawnArrow className="w-10 h-8 text-[#171717] rotate-[-20deg]" direction="down-left" />
              <span className="font-hand text-xl text-[#ff6f1e] font-bold">
                a real name label!
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. NOTES & NUMBERS (Secondary Surface Tint #f7efe9 Dew Drop) */}
      <section id="metrics" className="w-full bg-[#f7efe9] py-20 px-6 sm:px-10 border-y border-[#171717]/10">
        <div className="max-w-[1200px] mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-hand text-2xl text-[#ff6f1e] font-bold rotate-[-1deg]">
                  real numbers, organic reach
                </span>
                <HandDrawnArrow className="w-7 h-5 text-[#171717]" direction="down-right" />
              </div>
              <h2 className="display-title text-[40px] sm:text-[64px] text-[#2b1a07]">
                notes & numbers.
              </h2>
            </div>

            <p className="text-sm text-[#171717]/80 max-w-sm leading-relaxed">
              built organically through visual consistency, minimalist illustration, and disciplined layout architecture.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Note 1: 38.2M+ Impressions */}
            <div className="superr-card p-7 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]/60">
                  pinterest • pixel & hue
                </span>
                <SparkleSticker className="w-6 h-6 rotate-12" />
              </div>

              <div className="font-gelica text-4xl sm:text-5xl font-semibold text-[#2b1a07] leading-none pt-1">
                38.2m+
              </div>

              <div className="text-sm font-semibold text-[#ff6f1e]">
                total impressions
              </div>

              <p className="text-xs text-[#171717]/80 leading-relaxed pt-1">
                minimalist illustration work discovered organically by the creative director at northwestern mutual, prompting direct enterprise outreach.
              </p>
            </div>

            {/* Note 2: Monthly Reach */}
            <div className="superr-card p-7 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]/60">
                  monthly visual audience
                </span>
                <BearSticker className="w-7 h-7 -rotate-6" />
              </div>

              <div className="font-gelica text-4xl sm:text-5xl font-semibold text-[#2b1a07] leading-none pt-1">
                691k+
              </div>

              <div className="text-sm font-semibold text-[#ff6f1e]">
                monthly views
              </div>

              <p className="text-xs text-[#171717]/80 leading-relaxed pt-1">
                consistent visual production exploring high-contrast layouts, typography hierarchies, and editorial design frameworks.
              </p>
            </div>

            {/* Note 3: DigiEagle Studio Work */}
            <div className="superr-card p-7 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]/60">
                  primary practice
                </span>
                <span className="w-5 h-5 rounded-full border border-[#171717] bg-[#ff6f1e] flex items-center justify-center text-[10px] text-white font-bold">
                  ✓
                </span>
              </div>

              <div className="font-gelica text-3xl sm:text-4xl font-semibold text-[#2b1a07] leading-none pt-1">
                digieagle inc
              </div>

              <div className="text-sm font-semibold text-[#ff6f1e]">
                ui/ux & product systems
              </div>

              <p className="text-xs text-[#171717]/80 leading-relaxed pt-1">
                leading end-to-end design across saas dashboards, crm platforms, e-commerce, and responsive component libraries.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THINGS I MADE (Personal Side Tools) */}
      <section id="work" className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-20 sm:py-28 space-y-12">
        
        {/* Section Title & Handwritten Caption */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#ff6f1e] font-bold rotate-[-1deg]">
                built just for fun & everyday friction
              </span>
              <HandDrawnArrow className="w-7 h-5 text-[#171717]" direction="down-right" />
            </div>
            <h2 className="display-title text-[40px] sm:text-[64px] text-[#2b1a07]">
              things i made for my phone.
            </h2>
          </div>

          <p className="text-sm text-[#171717]/70 max-w-sm leading-relaxed">
            i'm not a software company — just a designer coding small, tactile utilities when desktop tools feel too slow.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TOOL 1: FLASHCUT PRO */}
          <div className="superr-card p-8 flex flex-col justify-between min-h-[380px] bg-[#fdfbf9] relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  side experiment • 01
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#171717]/60">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>phone utility</span>
                </span>
              </div>

              <h3 className="display-title text-3xl sm:text-4xl text-[#2b1a07]">
                flashcut pro.
              </h3>

              <p className="text-sm text-[#171717] leading-[1.6] font-normal">
                {PROJECTS[0].story}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[0].tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-[20px] bg-[#f7efe9] border border-[#171717]/20 text-xs font-medium text-[#2b1a07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex items-center gap-3">
              <a
                href={PROJECTS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-4"
              >
                <span>launch flashcut →</span>
              </a>

              <a
                href={PROJECTS[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-3 text-[#171717]/70"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>source</span>
              </a>
            </div>
          </div>

          {/* TOOL 2: SCRAWL */}
          <div className="superr-card p-8 flex flex-col justify-between min-h-[380px] bg-[#fdfbf9] relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  side experiment • 02
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#171717]/60">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>sketch canvas</span>
                </span>
              </div>

              <h3 className="display-title text-3xl sm:text-4xl text-[#2b1a07]">
                scrawl.
              </h3>

              <p className="text-sm text-[#171717] leading-[1.6] font-normal">
                {PROJECTS[1].story}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[1].tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-[20px] bg-[#f7efe9] border border-[#171717]/20 text-xs font-medium text-[#2b1a07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex items-center gap-3">
              <a
                href={PROJECTS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-4"
              >
                <span>open sketchpad →</span>
              </a>

              <a
                href={PROJECTS[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-3 text-[#171717]/70"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>source</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. HOW I THINK & CRAFT PHILOSOPHY */}
      <section className="w-full bg-[#fdfbf9] py-16 px-6 sm:px-10 border-t border-[#171717]/10">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <span className="font-hand text-2xl text-[#ff6f1e] font-bold">
            a small note on design
          </span>

          <h2 className="display-title text-3xl sm:text-5xl text-[#2b1a07] leading-snug">
            "typography is a voice, not just letters. and motion is physics, not decoration."
          </h2>

          <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed max-w-xl mx-auto">
            i use agentic tools like claude code to skip the wait between design concepts and real code. it lets me test how an interaction genuinely feels in the hands before finalizing any pixels.
          </p>
        </div>
      </section>

      {/* 6. FOOTER BRAND BAND (Marker Orange #ff6f1e with 56px top rounded edge) */}
      <footer className="w-full bg-[#ff6f1e] rounded-t-[56px] text-[#fdfbf9] pt-14 pb-12 px-6 sm:px-12 mt-12">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Brand Closer Text */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-gelica text-2xl sm:text-3xl font-semibold text-[#fdfbf9] tracking-tight">
              we're done, and we had fun.
            </div>
            <p className="text-xs text-[#fdfbf9]/80 font-normal">
              designed & written by uttam bakori • 2026
            </p>
          </div>

          {/* Footer Navigation & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold font-gelica">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[20px] bg-[#fdfbf9] text-[#171717] hover:bg-[#f7efe9] transition-colors shadow-xs"
            >
              linkedin
            </a>

            <a
              href={PROFILE.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[20px] bg-[#fdfbf9] text-[#171717] hover:bg-[#f7efe9] transition-colors shadow-xs"
            >
              behance
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[20px] bg-[#fdfbf9] text-[#171717] hover:bg-[#f7efe9] transition-colors shadow-xs"
            >
              github
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-[20px] border border-[#fdfbf9] text-[#fdfbf9] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copiedEmail ? "copied email!" : "copy email"}
            </button>
          </div>

        </div>
      </footer>

      {/* CONNECT & PROJECT MODALS */}
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

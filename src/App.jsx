import React, { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Rocket,
  CheckCircle,
  Copy,
  Check,
  Sparkles,
  Smartphone,
  PenTool,
} from "lucide-react";
import ConnectModal from "./components/ConnectModal";
import ProjectModal from "./components/ProjectModal";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col font-sans selection:bg-[#ffd731] selection:text-[#000000]">
      
      {/* 1. MARQUEE STRIP (Full-Bleed Black Band) */}
      <div className="w-full bg-[#000000] text-[#ffffff] border-b border-[#000000] py-2 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap text-xs font-bold tracking-[0.032em] uppercase">
          {[1, 2].map((k) => (
            <span key={k} className="flex items-center gap-6 pr-6">
              <span>UTTAM BAKORI</span>
              <span>•</span>
              <span className="text-[#ffd731]">UI/UX & VISUAL DESIGNER</span>
              <span>•</span>
              <span className="text-[#55db9c]">38.2M+ PINTEREST IMPRESSIONS</span>
              <span>•</span>
              <span>DIGIEAGLE INC</span>
              <span>•</span>
              <span className="text-[#4da2ff]">PERSONAL EXPERIMENTS: FLASHCUT & SCRAWL</span>
              <span>•</span>
              <span>AVAILABLE FOR CREATIVE WORK</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. FLOATING PILL NAVIGATION */}
      <nav className="sticky top-4 z-40 w-full max-w-5xl mx-auto px-4 sm:px-6 pointer-events-none">
        <div className="w-full flex items-center justify-between pointer-events-auto">
          {/* Circular black-outlined 'U' logo badge */}
          <a
            href="#"
            className="w-11 h-11 rounded-[1600px] border border-[#000000] bg-[#ffffff] flex items-center justify-center font-black text-base tracking-tight hover:scale-105 transition-transform shadow-xs"
            title="Uttam Bakori"
          >
            U
          </a>

          {/* Pill Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#ffffff] border border-[#000000] rounded-[1600px] p-1 shadow-xs">
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              About
            </a>
            <a
              href="#metrics"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              40M+ Reach
            </a>
            <a
              href="#experiments"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              Side Tools
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Connect Action Button */}
          <button
            onClick={() => setIsConnectOpen(true)}
            className="rounded-[40px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4.5 py-2 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#222222] transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            Connect
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION (Sky Wash #dceeff Full-Bleed Pastel Canvas) */}
      <section className="w-full bg-[#dceeff] pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-8 border-b border-[#000000] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#000000] rounded-[1600px] px-4 py-1.5 text-xs font-bold tracking-[0.032em] uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-[#000000]" />
            <span>UI/UX & Visual Designer • AI Creative Technologist</span>
          </div>

          {/* CRUSHED DISPLAY HEADLINE (Lateral/Antonio 800 at 0.78 line-height) */}
          <div className="relative py-2 select-none">
            <h1 className="font-display-crushed text-[76px] sm:text-[140px] md:text-[190px] lg:text-[220px] leading-[0.78] tracking-[-0.03em] text-[#000000]">
              UTTAM
            </h1>

            {/* Inflatable 3D Electric Blue 'Uttam' Ribbon sculpture */}
            <div className="w-full max-w-xl mx-auto -mt-6 sm:-mt-14 md:-mt-20 px-4 animate-inflatable pointer-events-none">
              <img
                src="/assets/uttam_inflatable.png"
                alt="Uttam 3D Inflatable Sculpture"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* SCATTERED HAND-CUT STICKERS */}
          <div className="w-full max-w-2xl relative min-h-[46px] hidden sm:block pointer-events-none">
            {/* Sticker 1: 38.2M+ Impressions */}
            <div className="absolute -top-12 left-0 rotate-[-5deg] bg-[#fb4903] text-[#ffffff] border border-[#000000] rounded-[20px] px-3.5 py-1.5 text-xs font-bold uppercase shadow-xs flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5" />
              <span>38.2M+ PINTEREST REACH</span>
            </div>

            {/* Sticker 2: Visual Designer */}
            <div className="absolute -top-14 right-2 rotate-[7deg] bg-[#ffd731] text-[#000000] border border-[#000000] rounded-[20px] px-3.5 py-1.5 text-xs font-bold uppercase shadow-xs flex items-center gap-1.5">
              <span>⭐</span>
              <span>DIGIEAGLE INC</span>
            </div>

            {/* Sticker 3: Personal Side Tools */}
            <div className="absolute top-2 left-1/4 rotate-[-3deg] bg-[#55db9c] text-[#000000] border border-[#000000] rounded-[20px] px-3 py-1 text-[11px] font-bold uppercase shadow-xs flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span>BUILDING FOR FUN</span>
            </div>

            {/* Sticker 4: Rapid AI Prototype */}
            <div className="absolute top-2 right-1/4 rotate-[4deg] bg-[#5c4ade] text-[#ffffff] border border-[#000000] rounded-[20px] px-3 py-1 text-[11px] font-bold uppercase shadow-xs flex items-center gap-1">
              <span>⚡</span>
              <span>AGENTIC PROTOTYPING</span>
            </div>
          </div>

          {/* Minimal, Honest Subhead (Aeonik Pro 500 at 20px, -0.010em letter-spacing) */}
          <p className="max-w-2xl text-base sm:text-lg font-medium tracking-[-0.010em] text-[#000000] leading-relaxed pt-2">
            I'm a visual designer thinking about how things should feel before I think about how they should look. Designing product interfaces, brand systems, and building small web tools for my phone when I run into creative friction.
          </p>

          {/* Ghost Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-5 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>View LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#experiments"
              className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-5 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <span>Explore Side Tools</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. REAL REACH & METRICS (Concrete Gray #cccccc Full-Bleed Background) */}
      <section id="metrics" className="w-full bg-[#cccccc] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Asymmetric Crushed Display Typography */}
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
              Organic Reach & Distribution
            </div>
            
            <h2 className="font-display-crushed text-[76px] sm:text-[130px] md:text-[160px] leading-[0.76] tracking-[-0.03em] text-[#000000]">
              38.2M+
            </h2>

            <div className="text-xl font-bold tracking-tight text-[#000000] uppercase">
              Total Pinterest Impressions
            </div>

            <p className="text-xs sm:text-sm text-[#000000] font-medium max-w-md leading-relaxed">
              Minimalist illustration and visual design work from <strong>Pixel & Hue Studio</strong> reached 38.24M impressions and 691K monthly views organically — leading to direct inbound creative outreach from enterprise directors at Northwestern Mutual.
            </p>
          </div>

          {/* Right: Authentic Profile Highlights in Slush Sticker Palette */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Sunburst #ffd731 */}
            <div className="bg-[#ffd731] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="text-2xl font-extrabold font-mono">691K+</div>
              <div className="text-xs font-bold uppercase tracking-tight">Monthly Visual Views</div>
              <p className="text-xs font-medium leading-relaxed">
                Built entirely through consistent, high-taste visual direction and AI-assisted production.
              </p>
            </div>

            {/* Card 2: Lavender #e9ccff */}
            <div className="bg-[#e9ccff] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[1.5deg] hover:rotate-0 transition-transform">
              <div className="text-2xl font-extrabold font-mono">DigiEagle</div>
              <div className="text-xs font-bold uppercase tracking-tight">Product UI/UX</div>
              <p className="text-xs font-medium leading-relaxed">
                Leading end-to-end UX across SaaS dashboards, CRM portals, e-commerce, and design systems.
              </p>
            </div>

            {/* Card 3: Mint Pop #55db9c */}
            <div className="bg-[#55db9c] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[0.5deg] hover:rotate-0 transition-transform sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.032em]">Creative Philosophy</span>
                <span className="w-5 h-5 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">✓</span>
              </div>
              <div className="text-base sm:text-lg font-bold uppercase tracking-tight">
                "No Still Point"
              </div>
              <p className="text-xs font-medium leading-relaxed">
                My work lives in the space where typography becomes a voice and kinetic motion meets minimalist grids. Using AI agents not to replace craft, but to eliminate engineering barriers for fast creative experiments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PERSONAL SIDE EXPERIMENTS (Paper White #ffffff Full-Bleed Background) */}
      <section id="experiments" className="w-full bg-[#ffffff] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Header with Honest Grounded Framing */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase mb-2">
                Built For My Own Daily Workflow
              </div>
              <h2 className="font-display-crushed text-[50px] sm:text-[80px] md:text-[100px] leading-[0.8] text-[#000000]">
                SIDE TOOLS
              </h2>
            </div>

            <p className="text-xs text-zinc-600 max-w-xs font-medium">
              Not commercial software products — just small web apps I designed and coded for fun using AI to solve issues I faced on my phone.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* TOOL 1: FLASHCUT PRO (Sunburst #ffd731 / 7 cols) */}
            <div className="md:col-span-7 bg-[#ffd731] border border-[#000000] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between min-h-[360px] shadow-xs group">
              <div>
                <div className="flex items-center justify-between pb-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#000000] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                    <Smartphone className="w-3 h-3" />
                    <span>Built For My Phone</span>
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-[#000000]" />
                </div>

                <h3 className="font-display-crushed text-[40px] sm:text-[60px] leading-[0.8] text-[#000000] mt-2">
                  FLASHCUT PRO
                </h3>
                <p className="text-xs font-bold text-[#000000] uppercase tracking-tight mt-1">
                  Quick Beat-Synced Reel Editor for Mobile & Desktop
                </p>

                <p className="text-xs font-medium text-[#000000] mt-3 leading-relaxed">
                  I had dozens of wide 4:1 Midjourney stills and needed a fast way to trim them to 9:16 reels and snap cuts to song beats on my phone without firing up heavy software. Built this client-side tool in a weekend to solve that friction.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {["Weekend Side Tool", "Web Audio Snapping", "3-Stack Framing", "Runs in Browser"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-[10px] font-bold tracking-[0.032em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-6">
                <a
                  href="https://flashcut-reel-studio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#333333] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Open Tool</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Uttambakori/flashcut-reel-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* TOOL 2: SCRAWL (Mint Pop #55db9c / 5 cols) */}
            <div className="md:col-span-5 bg-[#55db9c] border border-[#000000] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between min-h-[360px] shadow-xs group">
              <div>
                <div className="flex items-center justify-between pb-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#000000] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                    <PenTool className="w-3 h-3" />
                    <span>Visual Sketchpad</span>
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd731] border border-[#000000]" />
                </div>

                <h3 className="font-display-crushed text-[40px] sm:text-[60px] leading-[0.8] text-[#000000] mt-2">
                  SCRAWL
                </h3>
                <p className="text-xs font-bold text-[#000000] uppercase tracking-tight mt-1">
                  Lightweight In-Browser Canvas
                </p>

                <p className="text-xs font-medium text-[#000000] mt-3 leading-relaxed">
                  A minimal vector sketchpad made just for fun and rapid visual thinking. When I want to doodle a quick layout or wireframe idea directly in the browser without opening Figma.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {["Creative Canvas", "Freeform Drawing", "Made for Fun"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-[10px] font-bold tracking-[0.032em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-6">
                <a
                  href="https://scrawl-livid.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#333333] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Open Canvas</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Uttambakori/scrawl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* DIRECT LINKEDIN PROFILE CARD (Voltage Violet #5c4ade / 12 cols) */}
            <div className="md:col-span-12 bg-[#5c4ade] border border-[#000000] rounded-[24px] p-6 sm:p-8 text-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2">
                <span className="inline-block bg-[#ffffff] text-[#000000] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                  Let's Talk Design & UI/UX
                </span>
                <div className="font-display-crushed text-[32px] sm:text-[50px] leading-[0.85] text-[#ffffff]">
                  CONNECT ON LINKEDIN
                </div>
                <p className="text-xs font-medium opacity-90 max-w-lg">
                  Open for visual design systems, brand identity discussions, and product UI/UX collaborations.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-5 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#ffd731] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="rounded-[1600px] border border-[#ffffff] bg-transparent text-[#ffffff] px-4 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#55db9c]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. ABOUT & BACKGROUND (Lavender #e9ccff Full-Bleed Background) */}
      <section id="about" className="w-full bg-[#e9ccff] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
            Background & Skills
          </div>

          <h2 className="font-display-crushed text-[44px] sm:text-[76px] leading-[0.8] text-[#000000]">
            DESIGN DISCIPLINE
          </h2>

          <div className="text-sm sm:text-base font-medium text-[#000000] leading-relaxed space-y-4 max-w-xl mx-auto text-left sm:text-center">
            <p>
              I work across the full design cycle at <strong>DigiEagle Inc</strong> — from user research, wireframes, and journey mapping in Figma to typography, layout precision, and motion direction.
            </p>
            <p className="text-xs opacity-80">
              Diploma in UI/UX Design from IIAD (AND Academy), New Delhi. Exploring agentic AI tools like Claude Code to build quick web prototypes without waiting on engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              "UI/UX Design",
              "Visual Identity",
              "Design Systems",
              "Figma & Motion",
              "Typography",
              "Agentic AI Prototyping",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-xs font-bold tracking-[0.032em] uppercase shadow-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="w-full bg-[#000000] text-[#ffffff] py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-[1600px] border border-[#ffffff] bg-[#000000] flex items-center justify-center font-bold text-xs">
              U
            </span>
            <span className="font-bold tracking-[0.032em] uppercase text-xs">
              UTTAM BAKORI • 2026
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold tracking-[0.032em] uppercase">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffd731] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={PROFILE.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffd731] transition-colors"
            >
              Behance
            </a>
            <span>•</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffd731] transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <button
              onClick={() => setIsConnectOpen(true)}
              className="hover:text-[#ffd731] transition-colors cursor-pointer"
            >
              itsuttampatel@gmail.com
            </button>
          </div>
        </div>
      </footer>

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

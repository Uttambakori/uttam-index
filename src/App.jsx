import React, { useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Rocket,
  CheckCircle,
  Copy,
  Check,
  Zap,
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
      
      {/* 1. MARQUEE ANNOUNCEMENT STRIP (Full-bleed black band) */}
      <div className="w-full bg-[#000000] text-[#ffffff] border-b border-[#000000] py-2 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap text-xs font-bold tracking-[0.032em] uppercase">
          {[1, 2].map((k) => (
            <span key={k} className="flex items-center gap-6 pr-6">
              <span>UTTAM PATEL</span>
              <span>•</span>
              <span className="text-[#ffd731]">40,000,000+ IMPRESSIONS</span>
              <span>•</span>
              <span>PRODUCT DESIGNER & CREATIVE TECHNOLOGIST</span>
              <span>•</span>
              <span className="text-[#55db9c]">FLASHCUT PRO LIVE</span>
              <span>•</span>
              <span className="text-[#4da2ff]">SCRAWL LIVE</span>
              <span>•</span>
              <span>AVAILABLE FOR Q4 COLLABORATIONS</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. FLOATING PILL NAVIGATION */}
      <nav className="sticky top-4 z-40 w-full max-w-6xl mx-auto px-4 sm:px-6 pointer-events-none">
        <div className="w-full flex items-center justify-between pointer-events-auto">
          {/* Logo Mark: Circular black-outlined 'U' badge */}
          <a
            href="#"
            className="w-11 h-11 rounded-[1600px] border border-[#000000] bg-[#ffffff] flex items-center justify-center font-black text-base tracking-tight hover:scale-105 transition-transform shadow-xs"
            title="Uttam Patel"
          >
            U
          </a>

          {/* Center Pill Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#ffffff] border border-[#000000] rounded-[1600px] p-1 shadow-xs">
            <a
              href="#work"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              Work
            </a>
            <a
              href="#metrics"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              40M+ Reach
            </a>
            <a
              href="#philosophy"
              className="px-3.5 py-1.5 rounded-[1600px] text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-colors"
            >
              Ethos
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

          {/* Right Filled CTA Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsConnectOpen(true)}
              className="rounded-[40px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4 py-2 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#333333] transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION (Sky Wash #dceeff Full-Bleed Background) */}
      <section className="w-full bg-[#dceeff] pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-8 border-b border-[#000000] relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 space-y-6">
          
          {/* Top Status Pill Sticker */}
          <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#000000] rounded-[1600px] px-3.5 py-1 text-xs font-bold tracking-[0.032em] uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-[#000000]" />
            <span>AI-Native Prototyper & Creative Technologist</span>
          </div>

          {/* CRUSHED DISPLAY HEADLINE (Lateral/Antonio 800 at 0.78 line-height) */}
          <div className="relative py-2 select-none">
            <h1 className="font-display-crushed text-[76px] sm:text-[140px] md:text-[190px] lg:text-[230px] leading-[0.78] tracking-[-0.03em] text-[#000000]">
              UTTAM
            </h1>

            {/* Inflatable 3D Electric Blue 'Uttam' Ribbon wrapping across the text */}
            <div className="w-full max-w-xl mx-auto -mt-6 sm:-mt-14 md:-mt-20 px-4 animate-inflatable pointer-events-none">
              <img
                src="/assets/uttam_inflatable.png"
                alt="Uttam 3D Inflatable Sculpture"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* SCATTERED STICKER ACCENTS (1px Black Borders, Hand-Cut Feel) */}
          <div className="w-full max-w-3xl relative min-h-[50px] hidden sm:block pointer-events-none">
            {/* Sticker 1: 40M+ Impressions (Ember #fb4903) */}
            <div className="absolute -top-12 left-2 rotate-[-6deg] bg-[#fb4903] text-[#ffffff] border border-[#000000] rounded-[20px] px-3.5 py-1.5 text-xs font-bold tracking-tight uppercase shadow-xs flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5" />
              <span>40M+ IMPRESSIONS</span>
            </div>

            {/* Sticker 2: Sunburst #ffd731 */}
            <div className="absolute -top-16 right-4 rotate-[8deg] bg-[#ffd731] text-[#000000] border border-[#000000] rounded-[20px] px-3.5 py-1.5 text-xs font-bold tracking-tight uppercase shadow-xs flex items-center gap-1.5">
              <span>⭐</span>
              <span>RAPID PROTOTYPER</span>
            </div>

            {/* Sticker 3: Mint Pop #55db9c */}
            <div className="absolute top-4 left-1/4 rotate-[-3deg] bg-[#55db9c] text-[#000000] border border-[#000000] rounded-[20px] px-3 py-1 text-[11px] font-bold tracking-tight uppercase shadow-xs flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span>SHIPPED & VERIFIED</span>
            </div>

            {/* Sticker 4: Voltage Violet #5c4ade */}
            <div className="absolute top-3 right-1/4 rotate-[5deg] bg-[#5c4ade] text-[#ffffff] border border-[#000000] rounded-[20px] px-3 py-1 text-[11px] font-bold tracking-tight uppercase shadow-xs flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>KINETIC UI</span>
            </div>
          </div>

          {/* Tagline Subhead (Aeonik Pro 500 at 24px, -0.010em letter spacing) */}
          <p className="max-w-2xl text-base sm:text-xl font-medium tracking-[-0.010em] text-[#000000] leading-relaxed pt-2">
            Product designer crafting AI-native instruments, sound-synchronized media engines, and generative canvas systems with 40M+ public audience reach.
          </p>

          {/* Outlined Ghost Buttons (1600px Radius, 1px #000000 Border, #ffffff Fill) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://flashcut-reel-studio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-5 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <span>Launch FlashCut Pro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-5 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#000000] hover:text-[#ffffff] transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. METRICS & SCALE SECTION (Concrete Gray #cccccc Full-Bleed Background) */}
      <section id="metrics" className="w-full bg-[#cccccc] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Asymmetric Crushed Display Typography */}
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase mb-1">
              Social Proof & Distribution
            </div>
            
            <h2 className="font-display-crushed text-[80px] sm:text-[140px] md:text-[170px] leading-[0.76] tracking-[-0.03em] text-[#000000]">
              40M+
            </h2>

            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#000000] uppercase pt-1">
              Public Reach & Impressions
            </div>

            <p className="text-sm text-[#000000] font-medium max-w-md leading-relaxed pt-1">
              Viral distribution across AI engineering tutorials, generative design instruments, and product prototypes built in public.
            </p>
          </div>

          {/* Right: Sticker Cards in Shared 6-Color Palette */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card A: Sunburst #ffd731 */}
            <div className="bg-[#ffd731] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[-1deg] hover:rotate-0 transition-transform">
              <div className="text-2xl font-extrabold font-mono">0.0001s</div>
              <div className="text-sm font-bold uppercase tracking-tight">Audio Transient Snapping</div>
              <p className="text-xs font-medium leading-relaxed">
                Sub-millisecond rhythm sync built using Web Audio spectral flux analysis.
              </p>
            </div>

            {/* Card B: Lavender #e9ccff */}
            <div className="bg-[#e9ccff] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[1.5deg] hover:rotate-0 transition-transform">
              <div className="text-2xl font-extrabold font-mono">100%</div>
              <div className="text-sm font-bold uppercase tracking-tight">Client-Side Private</div>
              <p className="text-xs font-medium leading-relaxed">
                Zero cloud upload required. Private hardware-accelerated 4K MP4 export via WebCodecs.
              </p>
            </div>

            {/* Card C: Mint Pop #55db9c */}
            <div className="bg-[#55db9c] border border-[#000000] rounded-[24px] p-6 space-y-2 shadow-xs rotate-[1deg] hover:rotate-0 transition-transform sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.032em]">Verified Impact</span>
                <span className="w-6 h-6 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center text-xs font-bold">✓</span>
              </div>
              <div className="text-xl font-bold uppercase tracking-tight">High-Craft Design Engineering</div>
              <p className="text-xs font-medium leading-relaxed">
                Combining prompt-native agent workflows with custom canvas rendering engines to launch viral, utility-first micro-apps in days.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SHIPPED PROJECTS SECTION (Paper White #ffffff Full-Bleed Background) */}
      <section id="work" className="w-full bg-[#ffffff] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.032em] uppercase text-zinc-500 block mb-1">
                Selected Work • 2026
              </span>
              <h2 className="font-display-crushed text-[50px] sm:text-[90px] md:text-[120px] leading-[0.8] text-[#000000]">
                SHIPPED APPS
              </h2>
            </div>

            <div className="text-xs font-bold tracking-[0.032em] uppercase text-zinc-500 pb-2">
              Live on Vercel • Open Source on GitHub
            </div>
          </div>

          {/* Projects Grid (20-40px Border Radii, 1px Black Outlines, Saturated Palettes) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* PROJECT 1: FLASHCUT PRO (Sunburst #ffd731 / 7 cols) */}
            <div className="md:col-span-7 bg-[#ffd731] border border-[#000000] rounded-[36px] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-xs group">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                    Featured Micro-App • 01
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-[#000000]" />
                </div>

                <h3 className="font-display-crushed text-[44px] sm:text-[68px] leading-[0.8] text-[#000000] mt-1">
                  FLASHCUT PRO
                </h3>
                <p className="text-sm font-bold text-[#000000] uppercase tracking-tight mt-1">
                  Beat-Synced Vertical Reel Montage Studio
                </p>

                <p className="text-xs font-medium text-[#000000] mt-3 leading-relaxed max-w-lg">
                  Sub-millisecond musical beat-detection engine, multi-track rhythm timeline, 3-Stack split framing for wide 4:1 Midjourney stills, and hardware-accelerated 4K MP4 export.
                </p>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {["WEB AUDIO API", "SPECTRAL FLUX", "WEBCODECS 4K", "REACT"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-[10px] font-bold tracking-[0.032em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6">
                <a
                  href="https://flashcut-reel-studio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#333333] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Uttambakori/flashcut-reel-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* PROJECT 2: SCRAWL (Mint Pop #55db9c / 5 cols) */}
            <div className="md:col-span-5 bg-[#55db9c] border border-[#000000] rounded-[36px] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-xs group">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                    Featured Micro-App • 02
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd731] border border-[#000000]" />
                </div>

                <h3 className="font-display-crushed text-[44px] sm:text-[68px] leading-[0.8] text-[#000000] mt-1">
                  SCRAWL
                </h3>
                <p className="text-sm font-bold text-[#000000] uppercase tracking-tight mt-1">
                  Creative Canvas & Design Tool
                </p>

                <p className="text-xs font-medium text-[#000000] mt-3 leading-relaxed">
                  Fluid, expressive vector canvas for rapid sketching, visual brainstorming, and dynamic graphic composition.
                </p>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {["HTML5 CANVAS", "VECTOR ENGINE", "DESIGN TOOL"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-[10px] font-bold tracking-[0.032em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6">
                <a
                  href="https://scrawl-livid.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#333333] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>Launch App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Uttambakori/scrawl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-4 py-2.5 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#e9e9e9] transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* QR / DIRECT LINKEDIN CARD (Voltage Violet #5c4ade / Full Width or 12 cols) */}
            <div className="md:col-span-12 bg-[#5c4ade] border border-[#000000] rounded-[24px] p-6 sm:p-8 text-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2">
                <span className="inline-block bg-[#ffffff] text-[#000000] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
                  Direct Profile
                </span>
                <div className="font-display-crushed text-[36px] sm:text-[54px] leading-[0.85] text-[#ffffff]">
                  CONNECT ON LINKEDIN
                </div>
                <p className="text-xs font-medium opacity-90 max-w-lg">
                  Follow my AI prototype build logs, creative tutorials, and product design explorations reaching over 40 million professionals worldwide.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] px-6 py-3 text-xs font-bold tracking-[0.032em] uppercase hover:bg-[#ffd731] transition-all flex items-center gap-2 shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Open LinkedIn</span>
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

      {/* 6. PHILOSOPHY & ETHOS (Lavender #e9ccff Full-Bleed Background) */}
      <section id="philosophy" className="w-full bg-[#e9ccff] py-16 sm:py-24 px-4 sm:px-8 border-b border-[#000000]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block bg-[#000000] text-[#ffffff] px-3 py-1 rounded-[1600px] text-[11px] font-bold tracking-[0.032em] uppercase">
            Design Philosophy
          </div>

          <h2 className="font-display-crushed text-[44px] sm:text-[80px] md:text-[100px] leading-[0.8] text-[#000000]">
            TANGIBLE AI CRAFT
          </h2>

          <p className="text-base sm:text-xl font-medium tracking-tight text-[#000000] leading-relaxed max-w-2xl mx-auto">
            "AI agents don't replace craft — they accelerate taste. I build high-agency, tactile micro-tools that feel like physical objects pinned to a pale wall."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              "INFLATABLE 3D RIBBONS",
              "STICKER-BOOK PALETTES",
              "HAND-CUT 1PX OUTLINES",
              "ZERO GRADIENTS",
              "CRUSHED DISPLAY TYPE",
            ].map((rule) => (
              <span
                key={rule}
                className="px-3 py-1.5 rounded-[1600px] bg-[#ffffff] border border-[#000000] text-xs font-bold tracking-[0.032em] uppercase"
              >
                {rule}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="w-full bg-[#000000] text-[#ffffff] py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-[1600px] border border-[#ffffff] bg-[#000000] flex items-center justify-center font-bold text-xs">
              U
            </span>
            <span className="font-bold tracking-[0.032em] uppercase text-xs">
              UTTAM PATEL • 2026
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
              Connect
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

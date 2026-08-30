import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Copy, Check } from "lucide-react";
import ConnectModal from "./components/ConnectModal";
import { LinkedinIcon } from "./components/Icons";
import { PointingHandMark } from "./components/SuperrElements";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
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
      <header className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 py-8 flex items-center justify-between">
        {/* Brand Mark: Hand icon in Charcoal */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform hover:-rotate-6"
          title="uttam bakori"
        >
          <PointingHandMark className="w-8 h-8 text-[#171717]" />
        </a>

        {/* Action Buttons */}
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

      {/* 2. HERO: PURE MINIMAL DESCRIPTION */}
      <section className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 pt-12 pb-24 sm:pt-20 sm:pb-28">
        <div className="max-w-[720px] space-y-8">
          
          {/* Main Description */}
          <p className="font-gelica text-2xl sm:text-3xl md:text-4xl text-[#2b1a07] leading-[1.4] font-medium">
            visual and ui/ux designer thinking about{" "}
            <span className="marker-underline font-semibold">how things should feel</span>{" "}
            before how they look. designing product interfaces and brand systems at digieagle, and exploring small side tools for everyday creative workflows.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setIsConnectOpen(true)}
              className="superr-pill-btn text-sm"
            >
              <span>say hello →</span>
            </button>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="superr-pill-btn text-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin profile →</span>
            </a>
          </div>

          <div className="text-xs text-[#2b1a07]/60 font-normal pt-1 flex items-center gap-2">
            <span>based in india</span>
            <span>•</span>
            <span>digieagle inc</span>
            <span>•</span>
            <span>open to collaborations</span>
          </div>

        </div>
      </section>

      {/* 3. SIDE PROJECTS */}
      <section id="work" className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 pb-28 space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-[#171717]/10 pb-4">
          <h2 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
            side projects.
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* PROJECT 1: FLASHCUT PRO */}
          <div className="superr-card p-7 flex flex-col justify-between min-h-[290px] bg-[#fdfbf9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  {PROJECTS[0].badge}
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
                {PROJECTS[0].name}.
              </h3>

              <p className="text-sm text-[#171717]/85 leading-[1.6] font-normal">
                {PROJECTS[0].story}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[0].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-[20px] bg-[#f7efe9] border border-[#171717]/15 text-[11px] font-medium text-[#2b1a07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href={PROJECTS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-4"
              >
                <span>launch flashcut →</span>
              </a>
            </div>
          </div>

          {/* PROJECT 2: SCRAWL */}
          <div className="superr-card p-7 flex flex-col justify-between min-h-[290px] bg-[#fdfbf9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  {PROJECTS[1].badge}
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
                {PROJECTS[1].name}.
              </h3>

              <p className="text-sm text-[#171717]/85 leading-[1.6] font-normal">
                {PROJECTS[1].story}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PROJECTS[1].tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-[20px] bg-[#f7efe9] border border-[#171717]/15 text-[11px] font-medium text-[#2b1a07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href={PROJECTS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-4"
              >
                <span>open sketchpad →</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER BRAND BAND */}
      <footer className="w-full bg-[#ff6f1e] rounded-t-[56px] text-[#fdfbf9] pt-14 pb-12 px-6 sm:px-12 mt-auto">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-gelica text-2xl font-semibold text-[#fdfbf9] tracking-tight">
              we're done, and we had fun.
            </div>
            <p className="text-xs text-[#fdfbf9]/80 font-normal">
              uttam bakori • 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold font-gelica">
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

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-[20px] border border-[#fdfbf9] text-[#fdfbf9] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {copiedEmail ? "copied email!" : "copy email"}
            </button>
          </div>

        </div>
      </footer>

      {/* CONNECT MODAL */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </div>
  );
}

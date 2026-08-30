import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Copy, Check, Monitor } from "lucide-react";
import ConnectModal from "./components/ConnectModal";
import DesktopWarningModal from "./components/DesktopWarningModal";
import { LinkedinIcon } from "./components/Icons";
import { PointingHandMark } from "./components/SuperrElements";
import { PROFILE, PROJECTS } from "./data/projects";

export default function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [desktopWarningProject, setDesktopWarningProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return (
      window.innerWidth < 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  };

  const handleLaunch = (project) => {
    if (isMobile()) {
      setDesktopWarningProject(project);
    } else {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf9] text-[#171717] flex flex-col font-sans selection:bg-[#ff6f1e] selection:text-[#fdfbf9]">
      
      {/* 1. TOP MINIMAL NAVIGATION (Responsive) */}
      <header className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Mark: Hand icon in Charcoal */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform hover:-rotate-6"
          title="uttam bakori"
        >
          <PointingHandMark className="w-8 h-8 text-[#171717]" />
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
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
            className="superr-pill-btn text-xs py-2 px-4 sm:px-5"
          >
            <span>say hello →</span>
          </button>
        </div>
      </header>

      {/* 2. HERO: PURE MINIMAL DESCRIPTION (Responsive fluid typography) */}
      <section className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 pt-8 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-[740px] space-y-6 sm:space-y-8">
          
          {/* Main Description */}
          <p className="font-gelica text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#2b1a07] leading-[1.4] font-medium">
            visual and ui/ux designer thinking about{" "}
            <span className="marker-underline font-semibold">how things should feel</span>{" "}
            before how they look. designing product interfaces, brand visual systems, and exploring small side tools for everyday creative workflows.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
            <button
              onClick={() => setIsConnectOpen(true)}
              className="superr-pill-btn text-xs sm:text-sm py-2.5 px-5"
            >
              <span>say hello →</span>
            </button>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="superr-pill-btn text-xs sm:text-sm py-2.5 px-5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin profile →</span>
            </a>
          </div>

          <div className="text-xs text-[#2b1a07]/60 font-normal pt-1 flex flex-wrap items-center gap-2">
            <span>based in india</span>
            <span>•</span>
            <span>open to collaborations</span>
          </div>

        </div>
      </section>

      {/* 3. SIDE PROJECTS (Responsive Grid) */}
      <section id="work" className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 pb-20 sm:pb-28 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-[#171717]/10 pb-3 sm:pb-4 flex items-center justify-between">
          <h2 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
            side projects.
          </h2>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#171717]/50 font-medium">
            <Monitor className="w-3.5 h-3.5" />
            <span>desktop recommended</span>
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* PROJECT 1: FLASHCUT PRO */}
          <div className="superr-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] bg-[#fdfbf9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  {PROJECTS[0].badge}
                </span>
                <span className="text-[11px] font-mono text-[#171717]/50">
                  web app
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
                {PROJECTS[0].name}.
              </h3>

              <p className="text-xs sm:text-sm text-[#171717]/85 leading-[1.6] font-normal">
                {PROJECTS[0].story}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
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
              <button
                onClick={() => handleLaunch(PROJECTS[0])}
                className="superr-pill-btn text-xs py-2 px-4 cursor-pointer"
              >
                <span>launch flashcut →</span>
              </button>
            </div>
          </div>

          {/* PROJECT 2: SCRAWL */}
          <div className="superr-card p-6 sm:p-7 flex flex-col justify-between min-h-[290px] bg-[#fdfbf9]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6f1e] font-mono">
                  {PROJECTS[1].badge}
                </span>
                <span className="text-[11px] font-mono text-[#171717]/50">
                  web app
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
                {PROJECTS[1].name}.
              </h3>

              <p className="text-xs sm:text-sm text-[#171717]/85 leading-[1.6] font-normal">
                {PROJECTS[1].story}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
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
              <button
                onClick={() => handleLaunch(PROJECTS[1])}
                className="superr-pill-btn text-xs py-2 px-4 cursor-pointer"
              >
                <span>open sketchpad →</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER BRAND BAND (Responsive) */}
      <footer className="w-full bg-[#ff6f1e] rounded-t-[40px] sm:rounded-t-[56px] text-[#fdfbf9] pt-12 pb-10 sm:pt-14 sm:pb-12 px-5 sm:px-12 mt-auto">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-gelica text-2xl font-semibold text-[#fdfbf9] tracking-tight">
              we're done, and we had fun.
            </div>
            <p className="text-xs text-[#fdfbf9]/80 font-normal">
              uttam bakori • 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold font-gelica">
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

      {/* MODALS */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />

      <DesktopWarningModal
        project={desktopWarningProject}
        isOpen={Boolean(desktopWarningProject)}
        onClose={() => setDesktopWarningProject(null)}
      />
    </div>
  );
}

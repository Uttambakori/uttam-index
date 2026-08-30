import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowUpRight, Copy, Check, Monitor, BookOpen } from "lucide-react";
import ConnectModal from "./components/ConnectModal";
import DesktopWarningModal from "./components/DesktopWarningModal";
import ArticlePage from "./components/ArticlePage";
import { LinkedinIcon } from "./components/Icons";
import { PointingHandMark } from "./components/SuperrElements";
import { PROFILE, PROJECTS, ARTICLES } from "./data/projects";

export default function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [desktopWarningProject, setDesktopWarningProject] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // URL route sync: Support /writing/... or ?article=...
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      const search = new URLSearchParams(window.location.search);
      const articleSlug = search.get("article") || path.replace("/writing/", "").replace("/", "");

      if (articleSlug && articleSlug !== "") {
        const found = ARTICLES.find((a) => a.slug === articleSlug || a.id === articleSlug);
        if (found) {
          setActiveArticle(found);
          return;
        }
      }
      setActiveArticle(null);
    };

    handleLocation();
    window.addEventListener("popstate", handleLocation);
    return () => window.removeEventListener("popstate", handleLocation);
  }, []);

  const handleOpenArticle = (article) => {
    setActiveArticle(article);
    window.history.pushState({}, "", `/writing/${article.slug}`);
  };

  const handleBackToIndex = () => {
    setActiveArticle(null);
    window.history.pushState({}, "", "/");
  };

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

  // If viewing dedicated article page, render ArticlePage
  if (activeArticle) {
    return (
      <ArticlePage
        article={activeArticle}
        onBack={handleBackToIndex}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf9] text-[#171717] flex flex-col font-sans selection:bg-[#ff6f1e] selection:text-[#fdfbf9]">
      
      {/* 1. TOP MINIMAL NAVIGATION */}
      <header className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between">
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

      {/* 2. HERO: PURE MINIMAL DESCRIPTION */}
      <section className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 pt-8 sm:pt-16 pb-14 sm:pb-20">
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

      {/* 3. SIDE PROJECTS */}
      <section id="work" className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 space-y-6 sm:space-y-8">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="superr-card overflow-hidden flex flex-col justify-between bg-[#fdfbf9] group hover:shadow-md transition-shadow"
            >
              <div>
                {/* 16:9 Cinematic Thumbnail */}
                <div className="w-full aspect-[16/9] overflow-hidden border-b-[1.5px] border-[#171717] bg-[#f7efe9]">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
                    {project.name}.
                  </h3>

                  <p className="text-xs sm:text-sm text-[#171717]/80 leading-[1.6] font-normal">
                    {project.story}
                  </p>
                </div>
              </div>

              {/* Launch Action */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1">
                <button
                  onClick={() => handleLaunch(project)}
                  className="superr-pill-btn text-xs py-2 px-4 cursor-pointer"
                >
                  <span>launch {project.name} →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WRITING / ARTICLES SECTION */}
      <section id="writing" className="w-full max-w-[1000px] mx-auto px-5 sm:px-8 pb-20 sm:pb-28 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-[#171717]/10 pb-3 sm:pb-4 flex items-center justify-between">
          <h2 className="display-title text-2xl sm:text-3xl text-[#2b1a07]">
            writing.
          </h2>
          <span className="text-xs text-[#171717]/50 font-normal">
            thoughts & essays
          </span>
        </div>

        {/* Article Cards */}
        <div className="space-y-4">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => handleOpenArticle(art)}
              className="superr-card p-6 sm:p-8 bg-[#fdfbf9] hover:bg-[#f7efe9]/40 transition-all cursor-pointer group space-y-3"
            >
              <div className="text-xs text-[#2b1a07]/50 font-normal">
                {art.date}
              </div>

              <h3 className="display-title text-xl sm:text-2xl md:text-[26px] text-[#2b1a07] group-hover:text-[#ff6f1e] transition-colors">
                {art.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#171717]/80 leading-[1.65] font-normal">
                {art.excerpt}
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-[#ff6f1e] group-hover:underline flex items-center gap-1 font-gelica">
                  <span>read article</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER BRAND BAND (Behance Removed as Requested) */}
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

          {/* Social / Email (Behance removed) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold font-gelica">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[20px] bg-[#fdfbf9] text-[#171717] hover:bg-[#f7efe9] transition-colors shadow-xs"
            >
              linkedin
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-[20px] bg-[#fdfbf9] text-[#171717] hover:bg-[#f7efe9] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>copy email</span>
                </>
              )}
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
        onClose={() => setDesktopWarningProject(null)}
      />

    </div>
  );
}

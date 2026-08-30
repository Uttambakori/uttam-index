import React, { useEffect, useState } from "react";
import { ArrowLeft, Share2, Check, Clock, Calendar, Sparkles } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { PointingHandMark } from "./SuperrElements";
import { PROFILE } from "../data/projects";

export default function ArticlePage({ article, onBack }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  if (!article) return null;

  return (
    <div className="min-h-screen bg-[#fdfbf9] text-[#171717] flex flex-col font-sans selection:bg-[#ff6f1e] selection:text-[#fdfbf9]">
      
      {/* Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
        <div
          className="h-full bg-[#ff6f1e] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 1. TOP EDITORIAL NAVBAR */}
      <header className="w-full max-w-[900px] mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="superr-pill-btn text-xs py-2 px-4 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>back to index</span>
        </button>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="flex items-center gap-2 group transition-transform hover:-rotate-6"
          title="uttam bakori"
        >
          <PointingHandMark className="w-8 h-8 text-[#171717]" />
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyShareLink}
            className="superr-pill-btn text-xs py-2 px-3.5 cursor-pointer"
            title="Share article link"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span className="hidden sm:inline">copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">share</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* 2. ARTICLE HEADER HERO */}
      <main className="flex-1 w-full max-w-[760px] mx-auto px-5 sm:px-8 pt-6 sm:pt-12 pb-16 sm:pb-24 space-y-8">
        
        {/* Meta Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#2b1a07]/65">
            <span className="px-2.5 py-0.5 rounded-full bg-[#f7efe9] border border-[#171717]/15 text-[#ff6f1e] font-semibold">
              {article.category || "essay"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readingTime}</span>
            </span>
          </div>

          <h1 className="font-gelica text-3xl sm:text-4xl md:text-5xl text-[#2b1a07] font-semibold leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#2b1a07]/80 leading-relaxed font-normal italic border-l-3 border-[#ff6f1e] pl-4 sm:pl-5 pt-1">
            {article.excerpt}
          </p>
        </div>

        {/* Divider */}
        <hr className="border-[#171717]/10" />

        {/* 3. ARTICLE CONTENT SECTIONS */}
        <article className="space-y-8 text-base sm:text-[17px] leading-[1.8] text-[#2b1a07]/90 select-text">
          {article.sections?.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              {sec.heading && (
                <h2 className="font-gelica text-2xl sm:text-3xl font-semibold text-[#2b1a07] pt-3 tracking-tight">
                  {sec.heading}.
                </h2>
              )}

              {sec.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Scenarios Comparison Card */}
              {sec.table && (
                <div className="my-6 superr-card overflow-hidden bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-2xl shadow-xs">
                  <div className="p-4 sm:p-5 bg-[#f7efe9] border-b border-[#171717]/15">
                    <span className="font-gelica font-semibold text-sm text-[#2b1a07]">
                      improbable vs. predictable thinking:
                    </span>
                  </div>
                  <div className="divide-y divide-[#171717]/10 text-xs sm:text-sm">
                    {sec.table.map((row, rIdx) => (
                      <div key={rIdx} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                        <div className="sm:col-span-4 font-mono font-semibold text-[#2b1a07]">
                          {row.scenario}
                        </div>
                        <div className="sm:col-span-4 text-[#171717]/60">
                          <span className="text-[10px] font-mono uppercase text-[#171717]/40 block sm:hidden">likely:</span>
                          "{row.likely}"
                        </div>
                        <div className="sm:col-span-4 font-semibold text-[#ff6f1e]">
                          <span className="text-[10px] font-mono uppercase text-[#ff6f1e]/60 block sm:hidden">outlier:</span>
                          "{row.outlier}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet list */}
              {sec.bullets && (
                <ul className="space-y-2.5 list-disc list-inside text-[#2b1a07]/85 pl-1.5 leading-relaxed">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Highlighted Pull Quote Card */}
              {sec.quote && (
                <div className="my-8 sm:my-10 p-7 sm:p-10 rounded-[24px] bg-[#f7efe9] border-[1.5px] border-[#171717] shadow-xs">
                  <blockquote className="font-gelica text-lg sm:text-xl md:text-[22px] text-[#2b1a07] italic leading-[1.55] tracking-tight">
                    "{sec.quote}"
                  </blockquote>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* 4. AUTHOR FOOTER CARD (Perfect Alignment & No Awkward Wrapping) */}
        <div className="pt-8 sm:pt-10 border-t border-[#171717]/10">
          <div className="superr-card p-6 sm:p-8 bg-[#fdfbf9] rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-2 flex-1 min-w-0">
              <h3 className="font-gelica text-xl sm:text-2xl font-semibold text-[#2b1a07] tracking-tight whitespace-nowrap">
                written by uttam bakori
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/75 leading-relaxed max-w-lg font-normal">
                visual & ui/ux designer thinking about how things should feel before how they look. exploring creative tooling and digital interactions.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 flex-shrink-0 pt-2 md:pt-0">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="superr-pill-btn text-xs py-2 px-3.5 cursor-pointer whitespace-nowrap"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>connect on linkedin</span>
              </a>

              <button
                onClick={onBack}
                className="superr-pill-btn text-xs py-2 px-3.5 cursor-pointer whitespace-nowrap"
              >
                <span>more projects →</span>
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* 5. FOOTER BRAND BAND */}
      <footer className="w-full bg-[#ff6f1e] rounded-t-[40px] sm:rounded-t-[56px] text-[#fdfbf9] pt-10 pb-8 px-5 sm:px-12 mt-auto">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-gelica text-xl font-semibold text-[#fdfbf9] tracking-tight">
            we're done, and we had fun.
          </div>
          <div className="text-xs text-[#fdfbf9]/80 font-normal">
            uttam bakori • 2026
          </div>
        </div>
      </footer>

    </div>
  );
}

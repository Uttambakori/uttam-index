import React, { useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function ArticleModal({ article, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn select-none font-sans">
      <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#171717]/10 flex items-center justify-between bg-[#f7efe9]/40">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2b1a07]/60">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#171717]/70 hover:text-[#171717] hover:bg-[#f7efe9] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article Body (Scrollable) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#171717] select-text">
          <h2 className="font-gelica text-2xl sm:text-3xl md:text-4xl text-[#2b1a07] font-semibold leading-[1.2]">
            {article.title}
          </h2>

          <p className="text-sm sm:text-base text-[#2b1a07]/80 leading-relaxed font-normal italic border-l-2 border-[#ff6f1e] pl-4">
            {article.excerpt}
          </p>

          <div className="space-y-6 pt-2 text-sm sm:text-[15px] leading-relaxed text-[#2b1a07]/90">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                {sec.heading && (
                  <h3 className="font-gelica text-lg sm:text-xl font-semibold text-[#2b1a07] pt-2">
                    {sec.heading}
                  </h3>
                )}

                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.bullets && (
                  <ul className="space-y-2 list-disc list-inside text-[#2b1a07]/85 pl-1">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {sec.quote && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f7efe9] border border-[#171717]/10 my-4">
                    <p className="font-gelica text-base sm:text-lg text-[#2b1a07] italic leading-snug">
                      "{sec.quote}"
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#171717]/10 flex items-center justify-between">
            <button
              onClick={onClose}
              className="superr-pill-btn text-xs py-2 px-4 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>close article</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

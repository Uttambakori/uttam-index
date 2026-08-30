import React, { useState } from "react";
import { X, Monitor, Copy, Check, ExternalLink } from "lucide-react";

export default function DesktopWarningModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/45 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[18px] max-w-sm w-full p-6 sm:p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.14)] space-y-5 select-none animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#171717] bg-[#f7efe9] flex items-center justify-center text-[#ff6f1e]">
              <Monitor className="w-4 h-4" />
            </div>
            <h3 className="font-gelica text-lg sm:text-xl font-semibold text-[#2b1a07]">
              desktop recommended.
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#171717]/60 hover:text-[#171717] hover:bg-[#f7efe9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Explanatory Note */}
        <div className="space-y-2">
          <div className="font-gelica font-semibold text-sm text-[#2b1a07]">
            {project.name}
          </div>
          <p className="text-xs text-[#171717]/80 leading-relaxed font-normal">
            this side project is built for precision editing, multi-track audio timelines, and wide canvas tools that require a computer screen and mouse.
          </p>
          <p className="text-xs text-[#ff6f1e] font-medium pt-1">
            please open this on your desktop or laptop for the full experience.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="superr-pill-btn w-full justify-center text-xs py-2.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>link copied! paste on desktop</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>copy link for desktop</span>
              </>
            )}
          </button>

          {/* Dismiss Button */}
          <button
            onClick={onClose}
            className="w-full text-center text-xs text-[#171717]/60 hover:text-[#171717] py-1 transition-colors cursor-pointer font-medium"
          >
            got it, thanks
          </button>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import { X, Monitor, Copy, Check, ExternalLink, ArrowRight } from "lucide-react";

export default function DesktopWarningModal({ project, isOpen = Boolean(project), onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const warningData = project.mobileWarning || {
    title: `${project.name} works best on desktop.`,
    reason: "this project is built with rich desktop interactions that work best with a mouse and large display.",
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenAnyway = () => {
    onClose();
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/45 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[18px] max-w-sm w-full p-6 sm:p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.14)] space-y-4 select-none animate-scaleUp">
        
        {/* Header with Project Thumbnail Mini */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-3">
          <div className="flex items-center gap-2.5">
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-8 h-8 rounded-lg object-cover border border-[#171717]/20 shadow-xs"
              />
            )}
            <h3 className="font-gelica text-lg font-semibold text-[#2b1a07] lowercase">
              {warningData.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#171717]/60 hover:text-[#171717] hover:bg-[#f7efe9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Specific Note */}
        <div className="space-y-2 text-xs">
          <p className="text-[#171717]/85 leading-relaxed font-normal">
            {warningData.reason}
          </p>
          <p className="text-[#ff6f1e] font-medium">
            please open this on your desktop or laptop for the intended experience.
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
                <span>link copied! paste on computer</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>copy link for desktop</span>
              </>
            )}
          </button>

          {/* Open Anyway Button */}
          <button
            onClick={handleOpenAnyway}
            className="w-full py-2 text-center text-xs text-[#171717]/70 hover:text-[#ff6f1e] transition-colors cursor-pointer flex items-center justify-center gap-1 font-medium"
          >
            <span>open anyway on mobile</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}

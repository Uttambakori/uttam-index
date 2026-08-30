import React, { useState } from "react";
import { X, Mail, Check, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { PROFILE } from "../data/projects";

export default function ConnectModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/40 backdrop-blur-xs animate-fadeIn font-sans">
      <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] max-w-sm w-full p-7 shadow-[0px_4px_24px_rgba(0,0,0,0.12)] space-y-5 select-none animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6f1e]" />
            <h3 className="font-gelica text-xl font-semibold text-[#2b1a07]">
              say hello.
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#171717]/60 hover:text-[#171717] hover:bg-[#f7efe9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#171717]/80 leading-relaxed font-normal">
          open for product design collaborations, visual systems, or informal chats about typography and creative workflows.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          {/* LinkedIn Button */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-3.5 rounded-[20px] bg-[#fdfbf9] text-[#171717] border-[1.5px] border-[#171717] hover:bg-[#f7efe9] font-gelica text-xs font-semibold transition-all shadow-[0px_1px_2px_rgba(0,0,0,0.25)] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="w-4 h-4 text-[#ff6f1e]" />
              <span>connect on linkedin</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-between w-full p-3.5 rounded-[20px] bg-[#fdfbf9] text-[#171717] border-[1.5px] border-[#171717] hover:bg-[#f7efe9] font-gelica text-xs font-semibold transition-all shadow-[0px_1px_2px_rgba(0,0,0,0.25)] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#ff6f1e]" />
              <span className="font-mono text-xs">{PROFILE.email}</span>
            </div>
            {copied ? (
              <span className="flex items-center gap-1 text-[#ff6f1e] text-[11px] font-bold">
                <Check className="w-3.5 h-3.5" /> copied!
              </span>
            ) : (
              <span className="text-[11px] text-[#171717]/50 font-semibold">copy</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

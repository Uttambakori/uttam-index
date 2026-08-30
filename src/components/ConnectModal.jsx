import React, { useState } from "react";
import { X, Mail, Check, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-5 select-none animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base font-bold text-[#1E1E1E]">Let's Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-zinc-600 leading-relaxed">
          Open for product design collaborations, AI prototype development, or creative engineering discussions.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          {/* LinkedIn Button */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-3 rounded-2xl bg-[#0A66C2] text-white hover:bg-[#004182] font-semibold text-xs transition-all shadow-sm cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <LinkedinIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-between w-full p-3 rounded-2xl bg-[#F6F5F0] hover:bg-[#ECEAE3] text-[#1E1E1E] border border-[#E5E2D9] font-medium text-xs transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-zinc-500" />
              <span className="font-mono">{PROFILE.email}</span>
            </div>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-bold">
                <Check className="w-3.5 h-3.5" /> Copied
              </span>
            ) : (
              <span className="text-[11px] text-zinc-400 font-semibold">Copy</span>
            )}
          </button>

          {/* GitHub Button */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-3 rounded-2xl bg-[#1E1E1E] text-white hover:bg-zinc-800 font-semibold text-xs transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repositories</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { X, ExternalLink, Sparkles, CheckCircle } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-[#FFFFFF] border border-[#E5E2D9] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl space-y-4 select-none">
        {/* Banner with 3D Asset */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden p-4"
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.asset}
            alt={project.title}
            className="w-36 h-36 object-contain rounded-2xl drop-shadow-xl animate-soft-float"
          />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1E1E1E] text-[11px] font-bold shadow-sm">
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#1E1E1E]">{project.title}</h3>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">{project.tagline}</p>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-[#F6F5F0] border border-[#E5E2D9] text-[#1E1E1E] text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-3 rounded-2xl bg-[#1E1E1E] text-white hover:bg-zinc-800 font-semibold text-xs transition-all shadow-sm cursor-pointer"
            >
              <span>Launch App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-3 rounded-2xl bg-[#F6F5F0] hover:bg-[#ECEAE3] text-[#1E1E1E] border border-[#E5E2D9] font-semibold text-xs transition-all cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { BookOpen, Sparkles, FileText, Info } from 'lucide-react';

interface HeaderProps {
  onOpenGuide: () => void;
  hasGenerated: boolean;
  onScrollToDocument: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide, hasGenerated, onScrollToDocument }) => {
  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                Generator Modul Ajar Deep Learning
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Kemendikdasmen
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Berkesadaran (Mindful) • Bermakna (Meaningful) • Menggembirakan (Joyful)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenGuide}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Panduan Konsep Deep Learning"
          >
            <Info className="w-4 h-4 text-blue-600" />
            <span className="hidden md:inline">Panduan Deep Learning</span>
          </button>

          {hasGenerated && (
            <button
              onClick={onScrollToDocument}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Lihat Dokumen</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

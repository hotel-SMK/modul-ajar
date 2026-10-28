import React from 'react';
import { X, Heart, Compass, Sparkles, Brain, CheckCircle2, FileDown, Printer } from 'lucide-react';

interface DeepLearningGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeepLearningGuideModal: React.FC<DeepLearningGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Kerangka Kerja Pembelajaran Mendalam (Deep Learning)
              </h2>
              <p className="text-xs text-slate-500">Standar Kurikulum Nasional & Pedagogi Bermakna</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-sm text-slate-700">
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Tiga Prinsip Utama Pembelajaran Mendalam
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 bg-sky-50 border border-sky-100 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-sky-800 font-semibold text-xs">
                  <Compass className="w-4 h-4 text-sky-600" />
                  Berkesadaran (Mindful)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Murid hadir secara mental dan emosional, menyadari tujuan belajarnya, serta mampu mengelola fokus dan regulasi diri.
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-emerald-800 font-semibold text-xs">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  Bermakna (Meaningful)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Materi relevan dengan kehidupan nyata peserta didik, bukan sekadar hafalan rumus atau teks, tetapi bernilai aplikatif.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-100 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-amber-800 font-semibold text-xs">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Menggembirakan (Joyful)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proses belajar penuh antusiasme, interaksi positif, apresiasi terhadap eksplorasi rasa ingin tahu, dan tidak menegangkan.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Tiga Siklus Pengalaman Belajar
            </h3>
            <div className="space-y-2.5">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">Memahami (Understanding)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Membangun pemahaman konseptual esensial melalui inkuiri, pemecahan masalah kontekstual, dan pembentukan pola pikir kritis.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">Mengaplikasi (Applying)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Menerapkan konsep yang telah dipahami dalam proyek nyata, studi kasus kehidupan sehari-hari, atau penciptaan produk inovatif.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">Merefleksi (Reflecting)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Menilai proses dan hasil belajarnya sendiri (metakognisi), mengenali kekuatan dan area pengembangan, serta menyusun komitmen tindak lanjut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-2">
            <h4 className="font-bold text-xs text-blue-900 flex items-center gap-1.5">
              <FileDown className="w-4 h-4 text-blue-700" />
              Tips Ekspor Word & PDF
            </h4>
            <ul className="text-xs text-blue-950/80 space-y-1 list-disc list-inside">
              <li>
                <strong>Unduh Word (.docx):</strong> Dokumen terformat otomatis dengan tabel kedinasan, font standar, dan kolom tanda tangan siap diedit lanjutan di MS Word atau Google Docs.
              </li>
              <li>
                <strong>Cetak / Simpan PDF:</strong> Klik tombol <em>"Cetak / PDF"</em>. Pada dialog cetak peramban (browser), pilih tujuan <em>"Save as PDF"</em> atau printer Anda. Format otomatis berorientasi A4 rapi tanpa elemen navigasi website.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

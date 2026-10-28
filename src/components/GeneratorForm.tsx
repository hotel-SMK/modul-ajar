import React, { useState } from 'react';
import {
  Sparkles,
  School,
  User,
  BookOpen,
  Clock,
  Layers,
  Compass,
  FileCheck,
  RotateCcw,
  Lightbulb,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PRESET_OPTIONS } from '../data/templates';
import { ModulAjarData } from '../types/modul';

export interface FormInputs {
  namaSekolah: string;
  namaGuru: string;
  nipGuru: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  mataPelajaran: string;
  fase: string;
  kelas: string;
  semester: string;
  tahunPelajaran: string;
  alokasiWaktu: string;
  topikMateri: string;
  fokusPendekatan: string;
  catatanTambahan: string;
}

interface GeneratorFormProps {
  onGenerateAI: (inputs: FormInputs) => Promise<void>;
  onLoadPreset: (data: ModulAjarData) => void;
  isLoading: boolean;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  onGenerateAI,
  onLoadPreset,
  isLoading,
}) => {
  const [inputs, setInputs] = useState<FormInputs>({
    namaSekolah: 'SMA Negeri 1 Edukasi Unggul',
    namaGuru: 'Siti Rahmawati, S.Pd., M.Pd.',
    nipGuru: '19850412 201001 2 015',
    namaKepalaSekolah: 'Drs. Bambang Sudarmono, M.M.',
    nipKepalaSekolah: '19720315 199802 1 003',
    mataPelajaran: 'Informatika',
    fase: 'Fase E',
    kelas: 'Kelas X (Sepuluh)',
    semester: 'Semester Ganjil',
    tahunPelajaran: '2024/2025',
    alokasiWaktu: '2 JP (2 x 45 menit)',
    topikMateri: 'Penerapan Berpikir Komputasional & Etika Kecerdasan Artifisial (AI) dalam Kehidupan Sehari-hari',
    fokusPendekatan: 'Problem-Based Learning & Pembelajaran Berdiferensiasi',
    catatanTambahan: 'Sertakan kegiatan mindful breathing di awal dan studi kasus kontekstual yang relevan dengan media sosial murid.',
  });

  const [selectedPresetId, setSelectedPresetId] = useState<string>('informatika-sma');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormInputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    const preset = PRESET_OPTIONS.find((p) => p.id === presetId);
    if (preset) {
      setInputs((prev) => ({
        ...prev,
        mataPelajaran: preset.mataPelajaran,
        fase: preset.fase,
        kelas: preset.kelas,
        topikMateri: preset.topikMateri,
        alokasiWaktu: preset.alokasiWaktu,
        fokusPendekatan: preset.fokus,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerateAI(inputs);
  };

  const handleApplyPresetDirectly = () => {
    const preset = PRESET_OPTIONS.find((p) => p.id === selectedPresetId);
    if (preset) {
      onLoadPreset({
        ...preset.data,
        identitas: {
          ...preset.data.identitas,
          namaSekolah: inputs.namaSekolah || preset.data.identitas.namaSekolah,
          namaGuru: inputs.namaGuru || preset.data.identitas.namaGuru,
          nipGuru: inputs.nipGuru || preset.data.identitas.nipGuru,
          namaKepalaSekolah: inputs.namaKepalaSekolah || preset.data.identitas.namaKepalaSekolah,
          nipKepalaSekolah: inputs.nipKepalaSekolah || preset.data.identitas.nipKepalaSekolah,
          mataPelajaran: inputs.mataPelajaran,
          fase: inputs.fase,
          kelas: inputs.kelas,
          semester: inputs.semester,
          tahunPelajaran: inputs.tahunPelajaran,
          alokasiWaktu: inputs.alokasiWaktu,
          topikMateri: inputs.topikMateri,
        },
      });
    }
  };

  return (
    <div className="no-print bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
      {/* Preset Pill Selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Contoh Siap Pakai (Preset Rekomendasi):
          </label>
          <span className="text-xs text-slate-400">Pilih untuk isi cepat</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_OPTIONS.map((opt) => {
            const isSelected = selectedPresetId === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectPreset(opt.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-xs ring-1 ring-blue-500/30'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section A: Identitas Modul Form */}
        <div>
          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-100">
            <School className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              A. Identitas Modul Pembelajaran
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Sekolah / Satuan Pendidikan <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.namaSekolah}
                onChange={(e) => handleInputChange('namaSekolah', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Contoh: SMA Negeri 1 Edukasi"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Guru / Penyusun <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.namaGuru}
                onChange={(e) => handleInputChange('namaGuru', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Nama lengkap & gelar"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NIP Guru (Opsional)
              </label>
              <input
                type="text"
                value={inputs.nipGuru}
                onChange={(e) => handleInputChange('nipGuru', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="19850412 201001 2 015 atau -"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mata Pelajaran <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.mataPelajaran}
                onChange={(e) => handleInputChange('mataPelajaran', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Contoh: Informatika, IPA, Matematika..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fase Kurikulum Merdeka <span className="text-rose-500">*</span>
              </label>
              <select
                value={inputs.fase}
                onChange={(e) => handleInputChange('fase', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
              >
                <option value="Fase Fondasi">Fase Fondasi (PAUD / TK)</option>
                <option value="Fase A">Fase A (Kelas 1 - 2 SD)</option>
                <option value="Fase B">Fase B (Kelas 3 - 4 SD)</option>
                <option value="Fase C">Fase C (Kelas 5 - 6 SD)</option>
                <option value="Fase D">Fase D (Kelas 7 - 9 SMP)</option>
                <option value="Fase E">Fase E (Kelas 10 SMA/SMK)</option>
                <option value="Fase F">Fase F (Kelas 11 - 12 SMA/SMK)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kelas & Rombel
              </label>
              <input
                type="text"
                value={inputs.kelas}
                onChange={(e) => handleInputChange('kelas', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Contoh: Kelas X (Sepuluh) - A"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Semester & Tahun Pelajaran
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={inputs.semester}
                  onChange={(e) => handleInputChange('semester', e.target.value)}
                  className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                >
                  <option value="Semester Ganjil">Ganjil</option>
                  <option value="Semester Genap">Genap</option>
                </select>
                <input
                  type="text"
                  value={inputs.tahunPelajaran}
                  onChange={(e) => handleInputChange('tahunPelajaran', e.target.value)}
                  className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                  placeholder="2024/2025"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alokasi Waktu
              </label>
              <input
                type="text"
                value={inputs.alokasiWaktu}
                onChange={(e) => handleInputChange('alokasiWaktu', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Contoh: 2 JP (2 x 45 menit)"
              />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Topik / Materi Pembelajaran <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.topikMateri}
                onChange={(e) => handleInputChange('topikMateri', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white font-medium"
                placeholder="Materi inti atau konsep yang dibahas"
              />
            </div>
          </div>
        </div>

        {/* Section B & C Customization */}
        <div>
          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-100">
            <Compass className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              B & C. Penyesuaian Desain Deep Learning & Pedagogi
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Praktik Pedagogis / Model Pembelajaran
              </label>
              <select
                value={inputs.fokusPendekatan}
                onChange={(e) => handleInputChange('fokusPendekatan', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
              >
                <option value="Problem-Based Learning & Pembelajaran Berdiferensiasi">
                  Problem-Based Learning (PBL) & Diferensiasi
                </option>
                <option value="Project-Based Learning (PjBL) Kolaboratif">
                  Project-Based Learning (PjBL) Kolaboratif
                </option>
                <option value="Inquiry-Based Learning & Diskusi Sokratik">
                  Inquiry-Based Learning & Eksplorasi Konsep
                </option>
                <option value="Discovery Learning Berbasis Studi Kasus Nyata">
                  Discovery Learning Berbasis Studi Kasus Nyata
                </option>
                <option value="Experiential Learning (Belajar Berbasis Pengalaman Langsung)">
                  Experiential Learning (Pengalaman Lapangan/Praktik)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Catatan Khusus / Kebutuhan Murid & Konteks Sekolah
              </label>
              <input
                type="text"
                value={inputs.catatanTambahan}
                onChange={(e) => handleInputChange('catatanTambahan', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 bg-white"
                placeholder="Contoh: Murid aktif kinestetik, kaitkan dengan isu sampah / medsos sekitar"
              />
            </div>
          </div>
        </div>

        {/* Advanced Accordion for Signatures */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-slate-500" />
              <span>Data Penandatanganan Resmi (Kepala Sekolah & Legitimasi)</span>
            </div>
            {showAdvanced ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showAdvanced && (
            <div className="p-4 bg-white border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Nama Kepala Satuan Pendidikan
                </label>
                <input
                  type="text"
                  value={inputs.namaKepalaSekolah}
                  onChange={(e) => handleInputChange('namaKepalaSekolah', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg text-slate-800"
                  placeholder="Drs. Bambang Sudarmono, M.M."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  NIP Kepala Satuan Pendidikan
                </label>
                <input
                  type="text"
                  value={inputs.nipKepalaSekolah}
                  onChange={(e) => handleInputChange('nipKepalaSekolah', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg text-slate-800"
                  placeholder="19720315 199802 1 003"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handleApplyPresetDirectly}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer border border-slate-200 disabled:opacity-50"
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>Terapkan Contoh Langsung (Tanpa AI)</span>
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Menyusun Modul Ajar Deep Learning...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Modul Ajar dengan AI (Lengkap A - D)</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

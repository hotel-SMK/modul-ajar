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
  CheckSquare,
  HelpCircle,
  Cpu,
  Search,
} from 'lucide-react';

export interface FormInputs {
  // A. Identitas Modul
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

  // B. Identifikasi dan Perencanaan Pembelajaran
  karakteristikPesertaDidik: string;
  materiEsensialRelevansi: string;
  dimensiProfilLulusan: string[];
  capaianPembelajaran: string;
  fokusTujuanPembelajaran: string;
  kriteriaKetercapaianFokus: string;

  // C. Desain Pembelajaran Mendalam
  praktikPedagogis: string;
  kemitraanPembelajaran: string;
  lingkunganPembelajaran: string;
  pemanfaatanTeknologiDigital: string;
  prinsipFokus: string;

  // D. Langkah-Langkah Pembelajaran
  pertanyaanPemantikKhusus: string;
  kegiatanKontekstualSpesifik: string;
  mediaDanSumber: string;
}

interface GeneratorFormProps {
  onGenerateAI: (inputs: FormInputs) => Promise<void>;
  isLoading: boolean;
}

const PROFIL_OPTIONS = [
  'Bernalar Kritis',
  'Kreatif',
  'Bergotong Royong',
  'Mandiri',
  'Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia',
  'Berkebinekaan Global',
];

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  onGenerateAI,
  isLoading,
}) => {
  const [inputs, setInputs] = useState<FormInputs>({
    // A. Identitas Modul
    namaSekolah: 'SMK Negeri 1 Bebandem',
    namaGuru: '',
    nipGuru: '',
    namaKepalaSekolah: 'I Wayan Darmayasa, ST.,M.Si.',
    nipKepalaSekolah: '19730522 200501 1 009',
    mataPelajaran: '',
    fase: 'Fase E',
    kelas: 'Kelas X SMK',
    semester: 'Semester Ganjil',
    tahunPelajaran: '2024/2025',
    alokasiWaktu: '4 JP (4 x 45 menit)',
    topikMateri: '',

    // B. Identifikasi & Perencanaan
    karakteristikPesertaDidik: '',
    materiEsensialRelevansi: '',
    dimensiProfilLulusan: ['Bernalar Kritis', 'Kreatif', 'Bergotong Royong', 'Mandiri'],
    capaianPembelajaran: '',
    fokusTujuanPembelajaran: '',
    kriteriaKetercapaianFokus: '',

    // C. Desain Deep Learning
    praktikPedagogis: 'Problem-Based Learning & Teaching Factory (TEFA)',
    kemitraanPembelajaran: 'Kolaborasi antarsiswa, Guru fasilitator, dan Praktisi/Dunia Industri (DUDI)',
    lingkunganPembelajaran: 'Laboratorium/Bengkel praktik dengan budaya 5R dan iklim psikologis aman & suportif',
    pemanfaatanTeknologiDigital: 'Platform kolaborasi digital, AI edukatif, dan simulasi software kejuruan',
    prinsipFokus: 'Hadir utuh berkesadaran (Mindful), materi relevan dengan dunia kerja (Meaningful), serta interaktif & apresiatif (Joyful)',

    // D. Langkah Pembelajaran
    pertanyaanPemantikKhusus: '',
    kegiatanKontekstualSpesifik: '',
    mediaDanSumber: 'Laptop/Komputer, Proyektor LCD, Modul Ajar Resmi, SOP Industri',
  });

  const handleInputChange = (field: keyof FormInputs, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleProfil = (item: string) => {
    setInputs((prev) => {
      const exists = prev.dimensiProfilLulusan.includes(item);
      if (exists) {
        return {
          ...prev,
          dimensiProfilLulusan: prev.dimensiProfilLulusan.filter((d) => d !== item),
        };
      } else {
        return {
          ...prev,
          dimensiProfilLulusan: [...prev.dimensiProfilLulusan, item],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerateAI(inputs);
  };

  return (
    <div className="no-print bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 mb-8">
      <div className="mb-6 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            Parameter Penyusunan Modul Ajar Deep Learning
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Isi data dari Bagian A sampai D di bawah. AI akan secara otomatis menganalisis dan mencari Capaian Pembelajaran (CP) resmi serta menyusun langkah pembelajaran mendalam yang presisi.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto shrink-0">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Pencarian Data Kurikulum Otomatis</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ============================================================== */}
        {/* BAGIAN A: IDENTITAS MODUL */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 rounded-md bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
              A
            </span>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Identitas Modul
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Satuan Pendidikan (Sekolah) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.namaSekolah}
                onChange={(e) => handleInputChange('namaSekolah', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-medium"
                placeholder="SMK Negeri 1 Bebandem"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Kepala Sekolah <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.namaKepalaSekolah}
                onChange={(e) => handleInputChange('namaKepalaSekolah', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-medium"
                placeholder="I Wayan Darmayasa, ST.,M.Si."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NIP Kepala Sekolah <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.nipKepalaSekolah}
                onChange={(e) => handleInputChange('nipKepalaSekolah', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-medium"
                placeholder="19730522 200501 1 009"
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
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-medium"
                placeholder="Nama lengkap & gelar guru pengampu"
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
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: 19820101 200801 1 005 atau -"
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
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-semibold text-blue-900"
                placeholder="Contoh: Informatika, Dasar Otomotif, Teknik Komputer, IPAS..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fase Kurikulum <span className="text-rose-500">*</span>
              </label>
              <select
                value={inputs.fase}
                onChange={(e) => handleInputChange('fase', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-medium"
              >
                <option value="Fase E">Fase E (Kelas X SMK / SMA)</option>
                <option value="Fase F">Fase F (Kelas XI - XII SMK / SMA)</option>
                <option value="Fase D">Fase D (Kelas VII - IX SMP)</option>
                <option value="Fase C">Fase C (Kelas V - VI SD)</option>
                <option value="Fase B">Fase B (Kelas III - IV SD)</option>
                <option value="Fase A">Fase A (Kelas I - II SD)</option>
                <option value="Fase Fondasi">Fase Fondasi (PAUD / TK)</option>
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
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Kelas X SMK"
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
                  className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                >
                  <option value="Semester Ganjil">Ganjil</option>
                  <option value="Semester Genap">Genap</option>
                </select>
                <input
                  type="text"
                  value={inputs.tahunPelajaran}
                  onChange={(e) => handleInputChange('tahunPelajaran', e.target.value)}
                  className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
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
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: 4 JP (4 x 45 menit)"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Materi / Topik Pembelajaran <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={inputs.topikMateri}
                onChange={(e) => handleInputChange('topikMateri', e.target.value)}
                required
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white font-bold"
                placeholder="Contoh: Perawatan Sistem Rem Sepeda Motor, Pemrograman Web Dinamis, Berpikir Komputasional..."
              />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN B: IDENTIFIKASI & PERENCANAAN */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 rounded-md bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
              B
            </span>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Identifikasi dan Perencanaan Pembelajaran
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Karakteristik & Kebutuhan Peserta Didik (Opsional)
              </label>
              <textarea
                value={inputs.karakteristikPesertaDidik}
                onChange={(e) => handleInputChange('karakteristikPesertaDidik', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Kosongkan jika ingin AI mencari dan merumuskan otomatis sesuai jenjang dan karakteristik murid..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Materi Esensial & Relevansi Kehidupan Nyata / Dunia Industri (Opsional)
              </label>
              <textarea
                value={inputs.materiEsensialRelevansi}
                onChange={(e) => handleInputChange('materiEsensialRelevansi', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Kosongkan jika ingin AI menghubungkan materi esensial secara otomatis dengan kasus industri nyata..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Capaian Pembelajaran (CP) Khusus (Opsional)
              </label>
              <textarea
                value={inputs.capaianPembelajaran}
                onChange={(e) => handleInputChange('capaianPembelajaran', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Biarkan kosong agar AI mencari otomatis CP resmi Kemendikdasmen sesuai Mata Pelajaran & Fase..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Arahan Tujuan Pembelajaran (TP) & Kriteria KKTP (Opsional)
              </label>
              <textarea
                value={inputs.fokusTujuanPembelajaran}
                onChange={(e) => handleInputChange('fokusTujuanPembelajaran', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Murid dapat melakukan tune-up dan diagnosa kerusakan, atau biarkan AI merumuskannya secara operasional..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Dimensi Profil Lulusan yang Dikembangkan:
              </label>
              <div className="flex flex-wrap gap-2">
                {PROFIL_OPTIONS.map((profil) => {
                  const isChecked = inputs.dimensiProfilLulusan.includes(profil);
                  return (
                    <button
                      type="button"
                      key={profil}
                      onClick={() => handleToggleProfil(profil)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                        isChecked
                          ? 'bg-blue-50 border-blue-500 text-blue-900 ring-1 ring-blue-500/20'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[10px] ${isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300'}`}>
                        {isChecked && '✓'}
                      </span>
                      <span>{profil}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN C: DESAIN PEMBELAJARAN MENDALAM */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 rounded-md bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
              C
            </span>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Desain Pembelajaran Mendalam (Deep Learning)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Praktik Pedagogis / Strategi Pembelajaran
              </label>
              <select
                value={inputs.praktikPedagogis}
                onChange={(e) => handleInputChange('praktikPedagogis', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
              >
                <option value="Problem-Based Learning & Teaching Factory (TEFA)">
                  Problem-Based Learning (PBL) & Teaching Factory (TEFA SMK)
                </option>
                <option value="Project-Based Learning (PjBL) Berbasis Produk Nyata">
                  Project-Based Learning (PjBL) Berbasis Produk Nyata
                </option>
                <option value="Inquiry-Based Learning & Eksplorasi Konseptual">
                  Inquiry-Based Learning & Eksplorasi Konseptual
                </option>
                <option value="Discovery Learning & Analisis Masalah Otentik">
                  Discovery Learning & Analisis Masalah Otentik
                </option>
                <option value="Experiential Learning (Belajar Praktik Langsung di Bengkel/Lab)">
                  Experiential Learning (Praktik Langsung di Bengkel/Lab)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kemitraan Pembelajaran
              </label>
              <input
                type="text"
                value={inputs.kemitraanPembelajaran}
                onChange={(e) => handleInputChange('kemitraanPembelajaran', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Kolaborasi antar-siswa, Dunia Industri (DUDI), Guru sebagai fasilitator"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Lingkungan Pembelajaran
              </label>
              <input
                type="text"
                value={inputs.lingkunganPembelajaran}
                onChange={(e) => handleInputChange('lingkunganPembelajaran', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Bengkel praktik 5R / Lab komputer dengan iklim psikologis aman & suportif"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pemanfaatan Teknologi Digital
              </label>
              <input
                type="text"
                value={inputs.pemanfaatanTeknologiDigital}
                onChange={(e) => handleInputChange('pemanfaatanTeknologiDigital', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: AI edukasi, Google Classroom/LMS, Software simulasi teknis"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fokus Prinsip: Berkesadaran (Mindful), Bermakna (Meaningful), Menggembirakan (Joyful)
              </label>
              <input
                type="text"
                value={inputs.prinsipFokus}
                onChange={(e) => handleInputChange('prinsipFokus', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Sertakan penekanan khusus untuk mindful breathing, relevansi industri, atau ice breaking ceria..."
              />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN D: LANGKAH-LANGKAH PEMBELAJARAN */}
        {/* ============================================================== */}
        <div className="p-4 sm:p-5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 rounded-md bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
              D
            </span>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Langkah-Langkah Pembelajaran
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pertanyaan Pemantik Khusus (Opsional)
              </label>
              <textarea
                value={inputs.pertanyaanPemantikKhusus}
                onChange={(e) => handleInputChange('pertanyaanPemantikKhusus', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Kosongkan jika ingin AI menyusun pertanyaan pemantik yang merangsang nalar kritis secara otomatis..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kegiatan Kontekstual / Studi Kasus Spesifik (Opsional)
              </label>
              <textarea
                value={inputs.kegiatanKontekstualSpesifik}
                onChange={(e) => handleInputChange('kegiatanKontekstualSpesifik', e.target.value)}
                rows={2}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Analisis kasus kerusakan komponen pada motor pelanggan, atau biarkan AI membuat skenario industri..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Media, Alat Praktik, dan Sumber Belajar yang Tersedia di Sekolah
              </label>
              <input
                type="text"
                value={inputs.mediaDanSumber}
                onChange={(e) => handleInputChange('mediaDanSumber', e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 bg-white"
                placeholder="Contoh: Komputer Lab, Alat Ukur Multitester, Buku Teks Kemendikdasmen, Trainer Kit..."
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 hover:from-blue-800 hover:to-sky-700 rounded-xl shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>AI Sedang Menganalisis & Menyusun Modul Ajar (A - D)...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Modul Ajar dengan AI (Sesuai Data A - D)</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

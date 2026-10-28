import React, { useState } from 'react';
import {
  Download,
  Printer,
  Edit3,
  Check,
  Copy,
  Plus,
  Trash2,
  FileText,
  Share2,
  Heart,
  Compass,
  Sparkles,
  Info,
  CheckCircle,
} from 'lucide-react';
import { ModulAjarData } from '../types/modul';
import { exportModulToDocx, downloadBlobAsFile } from '../utils/docxExport';

interface ModulViewerProps {
  data: ModulAjarData;
  onUpdateData: (newData: ModulAjarData) => void;
}

export const ModulViewer: React.FC<ModulViewerProps> = ({ data, onUpdateData }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isExportingDocx, setIsExportingDocx] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Download DOCX
  const handleDownloadDocx = async () => {
    try {
      setIsExportingDocx(true);
      const blob = await exportModulToDocx(data);
      const cleanSubject = (data.identitas.mataPelajaran || 'Modul_Ajar').replace(/[^a-zA-Z0-9]/g, '_');
      const cleanFase = (data.identitas.fase || 'Fase').replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `Modul_Ajar_DeepLearning_${cleanSubject}_${cleanFase}.docx`;
      downloadBlobAsFile(blob, filename);
    } catch (err) {
      console.error('Error exporting DOCX:', err);
      alert('Terjadi kendala saat mengekspor dokumen Word. Silakan coba kembali.');
    } finally {
      setIsExportingDocx(false);
    }
  };

  // Print or Save as PDF
  const handlePrintPdf = () => {
    window.print();
  };

  // Copy full document text
  const handleCopyText = () => {
    const text = `
MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)
Prinsip: Berkesadaran (Mindful), Bermakna (Meaningful), Menggembirakan (Joyful)

A. IDENTITAS MODUL
- Nama Sekolah: ${data.identitas.namaSekolah}
- Nama Guru: ${data.identitas.namaGuru} (NIP: ${data.identitas.nipGuru || '-'})
- Mata Pelajaran: ${data.identitas.mataPelajaran}
- Fase/Kelas: ${data.identitas.fase} / ${data.identitas.kelas}
- Semester/Tahun: ${data.identitas.semester} / ${data.identitas.tahunPelajaran}
- Alokasi Waktu: ${data.identitas.alokasiWaktu}
- Topik/Materi: ${data.identitas.topikMateri}

B. IDENTIFIKASI DAN PERENCANAAN PEMBELAJARAN
1. Karakteristik & Kebutuhan Peserta Didik:
${data.identifikasi.karakteristikPesertaDidik}

2. Materi Esensial & Relevansi Kehidupan Nyata:
${data.identifikasi.materiEsensialRelevansi}

3. Dimensi Profil Lulusan:
${data.identifikasi.dimensiProfilLulusan.map((d) => `- ${d}`).join('\n')}

4. Capaian Pembelajaran (CP):
${data.identifikasi.capaianPembelajaran}

5. Tujuan Pembelajaran (TP):
${data.identifikasi.tujuanPembelajaran.map((tp, i) => `${i + 1}. ${tp}`).join('\n')}

6. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP):
${data.identifikasi.kriteriaKetercapaian.map((kktp, i) => `- ${kktp}`).join('\n')}

C. DESAIN PEMBELAJARAN MENDALAM
1. Praktik Pedagogis: ${data.desainDeepLearning.praktikPedagogis}
2. Kemitraan: ${data.desainDeepLearning.kemitraanPembelajaran}
3. Lingkungan: ${data.desainDeepLearning.lingkunganPembelajaran}
4. Teknologi Digital: ${data.desainDeepLearning.pemanfaatanTeknologiDigital}
5. Prinsip Pembelajaran Mendalam:
- Berkesadaran (Mindful): ${data.desainDeepLearning.prinsipPrinsip.berkesadaran}
- Bermakna (Meaningful): ${data.desainDeepLearning.prinsipPrinsip.bermakna}
- Menggembirakan (Joyful): ${data.desainDeepLearning.prinsipPrinsip.menggembirakan}
6. Pengalaman Belajar:
- Memahami: ${data.desainDeepLearning.pengalamanBelajar.memahami}
- Mengaplikasi: ${data.desainDeepLearning.pengalamanBelajar.mengaplikasi}
- Merefleksi: ${data.desainDeepLearning.pengalamanBelajar.merefleksi}

D. LANGKAH-LANGKAH PEMBELAJARAN
Pertanyaan Pemantik:
${data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik.map((p) => `- ${p}`).join('\n')}

Kegiatan Pendahuluan (${data.langkahPembelajaran.kegiatanPendahuluan.durasi}):
* Guru: ${data.langkahPembelajaran.kegiatanPendahuluan.aktivitasGuru.join('; ')}
* Siswa: ${data.langkahPembelajaran.kegiatanPendahuluan.aktivitasSiswa.join('; ')}

Kegiatan Inti (${data.langkahPembelajaran.kegiatanInti.durasi}):
1. Memahami: Guru [${data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasGuru.join('; ')}] | Siswa [${data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasSiswa.join('; ')}]
2. Mengaplikasi: Guru [${data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasGuru.join('; ')}] | Siswa [${data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasSiswa.join('; ')}]
3. Merefleksi: Guru [${data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasGuru.join('; ')}] | Siswa [${data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasSiswa.join('; ')}]

Kegiatan Penutup (${data.langkahPembelajaran.kegiatanPenutup.durasi}):
* Guru: ${data.langkahPembelajaran.kegiatanPenutup.aktivitasGuru.join('; ')}
* Siswa: ${data.langkahPembelajaran.kegiatanPenutup.aktivitasSiswa.join('; ')}

Media & Sumber Belajar:
- Media/Alat: ${data.langkahPembelajaran.mediaSumberBelajar.mediaAlat.join(', ')}
- Sumber: ${data.langkahPembelajaran.mediaSumberBelajar.sumberBelajar.join(', ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  // Field edit helpers
  const updateIdentitas = (field: keyof typeof data.identitas, val: string) => {
    onUpdateData({
      ...data,
      identitas: { ...data.identitas, [field]: val },
    });
  };

  const updateIdentifikasi = (field: keyof typeof data.identifikasi, val: any) => {
    onUpdateData({
      ...data,
      identifikasi: { ...data.identifikasi, [field]: val },
    });
  };

  const updateArrayItem = (path: 'tp' | 'kktp' | 'profil' | 'pemantik', index: number, val: string) => {
    if (path === 'tp') {
      const arr = [...data.identifikasi.tujuanPembelajaran];
      arr[index] = val;
      updateIdentifikasi('tujuanPembelajaran', arr);
    } else if (path === 'kktp') {
      const arr = [...data.identifikasi.kriteriaKetercapaian];
      arr[index] = val;
      updateIdentifikasi('kriteriaKetercapaian', arr);
    } else if (path === 'profil') {
      const arr = [...data.identifikasi.dimensiProfilLulusan];
      arr[index] = val;
      updateIdentifikasi('dimensiProfilLulusan', arr);
    } else if (path === 'pemantik') {
      const arr = [...data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik];
      arr[index] = val;
      onUpdateData({
        ...data,
        langkahPembelajaran: {
          ...data.langkahPembelajaran,
          kegiatanPendahuluan: {
            ...data.langkahPembelajaran.kegiatanPendahuluan,
            pertanyaanPemantik: arr,
          },
        },
      });
    }
  };

  const addArrayItem = (path: 'tp' | 'kktp' | 'pemantik') => {
    if (path === 'tp') {
      updateIdentifikasi('tujuanPembelajaran', [...data.identifikasi.tujuanPembelajaran, 'Tujuan pembelajaran baru']);
    } else if (path === 'kktp') {
      updateIdentifikasi('kriteriaKetercapaian', [...data.identifikasi.kriteriaKetercapaian, 'Indikator kriteria baru']);
    } else if (path === 'pemantik') {
      onUpdateData({
        ...data,
        langkahPembelajaran: {
          ...data.langkahPembelajaran,
          kegiatanPendahuluan: {
            ...data.langkahPembelajaran.kegiatanPendahuluan,
            pertanyaanPemantik: [
              ...data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik,
              'Pertanyaan pemantik baru kontekstual',
            ],
          },
        },
      });
    }
  };

  const removeArrayItem = (path: 'tp' | 'kktp' | 'pemantik', index: number) => {
    if (path === 'tp') {
      const arr = data.identifikasi.tujuanPembelajaran.filter((_, i) => i !== index);
      updateIdentifikasi('tujuanPembelajaran', arr);
    } else if (path === 'kktp') {
      const arr = data.identifikasi.kriteriaKetercapaian.filter((_, i) => i !== index);
      updateIdentifikasi('kriteriaKetercapaian', arr);
    } else if (path === 'pemantik') {
      const arr = data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik.filter((_, i) => i !== index);
      onUpdateData({
        ...data,
        langkahPembelajaran: {
          ...data.langkahPembelajaran,
          kegiatanPendahuluan: {
            ...data.langkahPembelajaran.kegiatanPendahuluan,
            pertanyaanPemantik: arr,
          },
        },
      });
    }
  };

  return (
    <div className="w-full">
      {/* Sticky Action Bar */}
      <div className="no-print bg-slate-900 text-white rounded-2xl p-4 mb-6 shadow-xl flex flex-wrap items-center justify-between gap-4 sticky top-18 z-20 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Modul Ajar Deep Learning Siap Unduh</div>
            <div className="text-sm font-bold text-white tracking-wide">
              {data.identitas.mataPelajaran} ({data.identitas.fase})
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              isEditing
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-bold'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>{isEditing ? 'Selesai Edit' : 'Edit Dokumen'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 cursor-pointer"
            title="Salin Teks Lengkap"
          >
            {copiedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedSuccess ? 'Tersalin!' : 'Salin Teks'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrintPdf}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-600 cursor-pointer shadow-xs"
            title="Cetak langsung atau simpan sebagai PDF melalui dialog cetak"
          >
            <Printer className="w-4 h-4 text-sky-400" />
            <span>Cetak / PDF</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadDocx}
            disabled={isExportingDocx}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExportingDocx ? 'Menyiapkan Word...' : 'Unduh Word (.docx)'}</span>
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="no-print mb-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Mode Edit Aktif:</strong> Anda dapat mengubah teks, menambah butir tujuan pembelajaran, atau menyesuaikan alur langsung di bawah ini. Setelah selesai, klik &quot;Selesai Edit&quot; atau langsung unduh ke Word / PDF.
            </span>
          </div>
          <button
            onClick={() => setIsEditing(false)}
            className="px-2.5 py-1 bg-amber-600 text-white rounded-md font-semibold hover:bg-amber-700 cursor-pointer"
          >
            Selesai
          </button>
        </div>
      )}

      {/* DOCUMENT PAPER CONTAINER */}
      <div className="print-container bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 text-slate-800 transition-all font-sans">
        {/* DOCUMENT HEADER / KOP */}
        <div className="text-center pb-6 mb-8 border-b-2 border-slate-900">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>KURIKULUM MERDEKA • PEMBELAJARAN MENDALAM</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
            MODUL AJAR PEMBELAJARAN MENDALAM
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mt-1">
            (DEEP LEARNING: MINDFUL, MEANINGFUL, JOYFUL)
          </p>
          <p className="text-xs text-slate-500 mt-1 italic">
            Satuan Pendidikan: {data.identitas.namaSekolah} • Tahun Pelajaran {data.identitas.tahunPelajaran}
          </p>
        </div>

        {/* 3 PILLARS HIGHLIGHT BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 no-print">
          <div className="p-3 bg-sky-50/80 border border-sky-200 rounded-xl">
            <div className="flex items-center gap-1.5 text-sky-800 font-bold text-xs uppercase mb-1">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              Berkesadaran (Mindful)
            </div>
            <p className="text-xs text-sky-950/80 leading-relaxed">
              {data.desainDeepLearning.prinsipPrinsip.berkesadaran}
            </p>
          </div>
          <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase mb-1">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              Bermakna (Meaningful)
            </div>
            <p className="text-xs text-emerald-950/80 leading-relaxed">
              {data.desainDeepLearning.prinsipPrinsip.bermakna}
            </p>
          </div>
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Menggembirakan (Joyful)
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              {data.desainDeepLearning.prinsipPrinsip.menggembirakan}
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN A: IDENTITAS MODUL */}
        {/* ============================================================== */}
        <section className="mb-8">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-blue-900">
            <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              A
            </span>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
              Identitas Modul
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-xs text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="w-1/3 p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Nama Satuan Pendidikan (Sekolah)
                  </td>
                  <td className="p-2.5 text-slate-900">
                    {isEditing ? (
                      <input
                        type="text"
                        value={data.identitas.namaSekolah}
                        onChange={(e) => updateIdentitas('namaSekolah', e.target.value)}
                        className="w-full p-1 border border-blue-400 rounded-sm"
                      />
                    ) : (
                      data.identitas.namaSekolah
                    )}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Nama Guru / Penyusun
                  </td>
                  <td className="p-2.5 text-slate-900">
                    {isEditing ? (
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={data.identitas.namaGuru}
                          onChange={(e) => updateIdentitas('namaGuru', e.target.value)}
                          placeholder="Nama Guru"
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                        <input
                          type="text"
                          value={data.identitas.nipGuru || ''}
                          onChange={(e) => updateIdentitas('nipGuru', e.target.value)}
                          placeholder="NIP Guru"
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                      </div>
                    ) : (
                      `${data.identitas.namaGuru}${data.identitas.nipGuru ? ` (NIP: ${data.identitas.nipGuru})` : ''}`
                    )}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Mata Pelajaran
                  </td>
                  <td className="p-2.5 text-slate-900 font-semibold">
                    {isEditing ? (
                      <input
                        type="text"
                        value={data.identitas.mataPelajaran}
                        onChange={(e) => updateIdentitas('mataPelajaran', e.target.value)}
                        className="w-full p-1 border border-blue-400 rounded-sm"
                      />
                    ) : (
                      data.identitas.mataPelajaran
                    )}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Fase dan Kelas
                  </td>
                  <td className="p-2.5 text-slate-900">
                    {isEditing ? (
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={data.identitas.fase}
                          onChange={(e) => updateIdentitas('fase', e.target.value)}
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                        <input
                          type="text"
                          value={data.identitas.kelas}
                          onChange={(e) => updateIdentitas('kelas', e.target.value)}
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                      </div>
                    ) : (
                      `${data.identitas.fase} / ${data.identitas.kelas}`
                    )}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Semester dan Tahun Pelajaran
                  </td>
                  <td className="p-2.5 text-slate-900">
                    {isEditing ? (
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={data.identitas.semester}
                          onChange={(e) => updateIdentitas('semester', e.target.value)}
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                        <input
                          type="text"
                          value={data.identitas.tahunPelajaran}
                          onChange={(e) => updateIdentitas('tahunPelajaran', e.target.value)}
                          className="w-full p-1 border border-blue-400 rounded-sm"
                        />
                      </div>
                    ) : (
                      `${data.identitas.semester} / ${data.identitas.tahunPelajaran}`
                    )}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Alokasi Waktu
                  </td>
                  <td className="p-2.5 text-slate-900">
                    {isEditing ? (
                      <input
                        type="text"
                        value={data.identitas.alokasiWaktu}
                        onChange={(e) => updateIdentitas('alokasiWaktu', e.target.value)}
                        className="w-full p-1 border border-blue-400 rounded-sm"
                      />
                    ) : (
                      data.identitas.alokasiWaktu
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-2.5 bg-slate-50 font-bold text-slate-700 border-r border-slate-200">
                    Materi atau Topik Pembelajaran
                  </td>
                  <td className="p-2.5 text-slate-900 font-bold text-blue-900">
                    {isEditing ? (
                      <input
                        type="text"
                        value={data.identitas.topikMateri}
                        onChange={(e) => updateIdentitas('topikMateri', e.target.value)}
                        className="w-full p-1 border border-blue-400 rounded-sm font-bold"
                      />
                    ) : (
                      data.identitas.topikMateri
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================== */}
        {/* BAGIAN B: IDENTIFIKASI DAN PERENCANAAN PEMBELAJARAN */}
        {/* ============================================================== */}
        <section className="mb-8">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-blue-900">
            <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              B
            </span>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
              Identifikasi dan Perencanaan Pembelajaran
            </h2>
          </div>

          <div className="space-y-4 text-xs text-slate-800">
            {/* 1. Karakteristik */}
            <div className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">1</span>
                Karakteristik dan Kebutuhan Peserta Didik
              </h3>
              {isEditing ? (
                <textarea
                  value={data.identifikasi.karakteristikPesertaDidik}
                  onChange={(e) => updateIdentifikasi('karakteristikPesertaDidik', e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-blue-400 rounded-sm bg-white"
                />
              ) : (
                <p className="leading-relaxed text-slate-700">{data.identifikasi.karakteristikPesertaDidik}</p>
              )}
            </div>

            {/* 2. Materi Esensial */}
            <div className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">2</span>
                Materi Esensial dan Relevansinya dengan Kehidupan Nyata
              </h3>
              {isEditing ? (
                <textarea
                  value={data.identifikasi.materiEsensialRelevansi}
                  onChange={(e) => updateIdentifikasi('materiEsensialRelevansi', e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-blue-400 rounded-sm bg-white"
                />
              ) : (
                <p className="leading-relaxed text-slate-700">{data.identifikasi.materiEsensialRelevansi}</p>
              )}
            </div>

            {/* 3. Dimensi Profil Lulusan */}
            <div className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">3</span>
                Dimensi Profil Lulusan yang Dikembangkan
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                {data.identifikasi.dimensiProfilLulusan.map((dimensi, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {isEditing ? (
                      <input
                        type="text"
                        value={dimensi}
                        onChange={(e) => updateArrayItem('profil', idx, e.target.value)}
                        className="w-4/5 p-1 border border-blue-300 rounded-sm ml-1"
                      />
                    ) : (
                      <span>{dimensi}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Capaian Pembelajaran */}
            <div className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">4</span>
                Capaian Pembelajaran (CP)
              </h3>
              {isEditing ? (
                <textarea
                  value={data.identifikasi.capaianPembelajaran}
                  onChange={(e) => updateIdentifikasi('capaianPembelajaran', e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-blue-400 rounded-sm bg-white"
                />
              ) : (
                <p className="leading-relaxed text-slate-700 italic bg-white p-2.5 rounded border border-slate-200">
                  &ldquo;{data.identifikasi.capaianPembelajaran}&rdquo;
                </p>
              )}
            </div>

            {/* 5. Tujuan Pembelajaran (TP) */}
            <div className="p-3.5 bg-blue-50/40 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-[10px] font-bold">5</span>
                  Tujuan Pembelajaran (TP)
                </h3>
                {isEditing && (
                  <button
                    onClick={() => addArrayItem('tp')}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-blue-700 text-white rounded font-medium hover:bg-blue-800"
                  >
                    <Plus className="w-3 h-3" /> Tambah TP
                  </button>
                )}
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-800 pl-1">
                {data.identifikasi.tujuanPembelajaran.map((tp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {isEditing ? (
                      <div className="inline-flex items-center gap-2 w-11/12 ml-1">
                        <input
                          type="text"
                          value={tp}
                          onChange={(e) => updateArrayItem('tp', idx, e.target.value)}
                          className="w-full p-1 border border-blue-400 rounded-sm bg-white"
                        />
                        <button
                          onClick={() => removeArrayItem('tp', idx)}
                          className="p-1 text-rose-600 hover:text-rose-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span>{tp}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* 6. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) */}
            <div className="p-3.5 bg-emerald-50/40 border border-emerald-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold">6</span>
                  Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)
                </h3>
                {isEditing && (
                  <button
                    onClick={() => addArrayItem('kktp')}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-emerald-700 text-white rounded font-medium hover:bg-emerald-800"
                  >
                    <Plus className="w-3 h-3" /> Tambah KKTP
                  </button>
                )}
              </div>
              <ul className="space-y-1.5 text-slate-800 pl-1">
                {data.identifikasi.kriteriaKetercapaian.map((kktp, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    {isEditing ? (
                      <div className="inline-flex items-center gap-2 w-full">
                        <input
                          type="text"
                          value={kktp}
                          onChange={(e) => updateArrayItem('kktp', idx, e.target.value)}
                          className="w-full p-1 border border-emerald-400 rounded-sm bg-white"
                        />
                        <button
                          onClick={() => removeArrayItem('kktp', idx)}
                          className="p-1 text-rose-600 hover:text-rose-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span>{kktp}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* BAGIAN C: DESAIN PEMBELAJARAN MENDALAM */}
        {/* ============================================================== */}
        <section className="mb-8">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-blue-900">
            <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              C
            </span>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
              Desain Pembelajaran Mendalam (Deep Learning Pedagogy)
            </h2>
          </div>

          <div className="space-y-4 text-xs text-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">1. Praktik Pedagogis / Strategi Pembelajaran</h4>
                <p className="text-slate-700 leading-relaxed">{data.desainDeepLearning.praktikPedagogis}</p>
              </div>

              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">2. Kemitraan Pembelajaran</h4>
                <p className="text-slate-700 leading-relaxed">{data.desainDeepLearning.kemitraanPembelajaran}</p>
              </div>

              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">3. Lingkungan Pembelajaran</h4>
                <p className="text-slate-700 leading-relaxed">{data.desainDeepLearning.lingkunganPembelajaran}</p>
              </div>

              <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">4. Pemanfaatan Teknologi Digital</h4>
                <p className="text-slate-700 leading-relaxed">{data.desainDeepLearning.pemanfaatanTeknologiDigital}</p>
              </div>
            </div>

            {/* 5. Prinsip Berkesadaran, Bermakna, Menggembirakan */}
            <div className="p-4 border border-slate-200 rounded-lg bg-gradient-to-r from-sky-50/50 via-emerald-50/50 to-amber-50/50">
              <h4 className="font-bold text-slate-900 mb-2">5. Prinsip Berkesadaran, Bermakna, dan Menggembirakan</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-2.5 rounded border border-sky-100 shadow-2xs">
                  <div className="font-bold text-sky-800 text-[11px] mb-1">Berkesadaran (Mindful):</div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.prinsipPrinsip.berkesadaran}</p>
                </div>
                <div className="bg-white p-2.5 rounded border border-emerald-100 shadow-2xs">
                  <div className="font-bold text-emerald-800 text-[11px] mb-1">Bermakna (Meaningful):</div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.prinsipPrinsip.bermakna}</p>
                </div>
                <div className="bg-white p-2.5 rounded border border-amber-100 shadow-2xs">
                  <div className="font-bold text-amber-800 text-[11px] mb-1">Menggembirakan (Joyful):</div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.prinsipPrinsip.menggembirakan}</p>
                </div>
              </div>
            </div>

            {/* 6. Tiga Pengalaman Belajar Inti */}
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">6. Tiga Siklus Pengalaman Belajar</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-blue-900 text-xs mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] flex items-center justify-center font-bold">1</span>
                    Memahami (Understanding)
                  </div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.pengalamanBelajar.memahami}</p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-indigo-900 text-xs mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-800 text-[10px] flex items-center justify-center font-bold">2</span>
                    Mengaplikasi (Applying)
                  </div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.pengalamanBelajar.mengaplikasi}</p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-emerald-900 text-xs mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">3</span>
                    Merefleksi (Reflecting)
                  </div>
                  <p className="text-slate-600 leading-relaxed">{data.desainDeepLearning.pengalamanBelajar.merefleksi}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* BAGIAN D: LANGKAH-LANGKAH PEMBELAJARAN */}
        {/* ============================================================== */}
        <section className="mb-8">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-blue-900">
            <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
              D
            </span>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
              Langkah-Langkah Pembelajaran
            </h2>
          </div>

          {/* Pertanyaan Pemantik Box */}
          <div className="mb-4 p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-bold text-amber-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Pertanyaan Pemantik & Pemicu Rasa Ingin Tahu:
              </h3>
              {isEditing && (
                <button
                  onClick={() => addArrayItem('pemantik')}
                  className="px-2 py-0.5 text-[10px] bg-amber-700 text-white rounded font-medium hover:bg-amber-800"
                >
                  + Tambah Pertanyaan
                </button>
              )}
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-800 pl-1 font-medium">
              {data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik.map((q, idx) => (
                <li key={idx} className="leading-relaxed">
                  {isEditing ? (
                    <div className="inline-flex items-center gap-2 w-11/12 ml-1">
                      <input
                        type="text"
                        value={q}
                        onChange={(e) => updateArrayItem('pemantik', idx, e.target.value)}
                        className="w-full p-1 border border-amber-400 rounded-sm bg-white"
                      />
                      <button
                        onClick={() => removeArrayItem('pemantik', idx)}
                        className="text-rose-600 hover:text-rose-800"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <span>&ldquo;{q}&rdquo;</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Skenario Langkah Pembelajaran (Tabel) */}
          <div className="overflow-x-auto border border-slate-300 rounded-lg mb-4">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white font-bold">
                  <th className="p-3 w-1/4 text-left border-r border-blue-800">Tahap & Alokasi</th>
                  <th className="p-3 w-[37.5%] text-left border-r border-blue-800">Aktivitas Guru</th>
                  <th className="p-3 w-[37.5%] text-left">Aktivitas Peserta Didik</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* 1. Pendahuluan */}
                <tr className="bg-slate-50/40">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200 align-top">
                    <div className="text-blue-900 font-bold">Kegiatan Pendahuluan</div>
                    <div className="text-slate-500 font-normal mt-0.5 text-[11px]">
                      Alokasi: {data.langkahPembelajaran.kegiatanPendahuluan.durasi}
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanPendahuluan.aktivitasGuru.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanPendahuluan.aktivitasSiswa.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* 2. Inti - Memahami */}
                <tr>
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200 align-top bg-sky-50/30">
                    <div className="text-blue-800 font-bold">Kegiatan Inti 1:</div>
                    <div className="text-slate-700 font-medium text-[11px]">Memahami (Understanding)</div>
                    <div className="text-slate-500 font-normal mt-0.5 text-[10px]">20 Menit</div>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasGuru.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasSiswa.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* 3. Inti - Mengaplikasi */}
                <tr>
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200 align-top bg-indigo-50/30">
                    <div className="text-indigo-800 font-bold">Kegiatan Inti 2:</div>
                    <div className="text-slate-700 font-medium text-[11px]">Mengaplikasi (Applying)</div>
                    <div className="text-slate-500 font-normal mt-0.5 text-[10px]">25 Menit</div>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasGuru.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasSiswa.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* 4. Inti - Merefleksi */}
                <tr>
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200 align-top bg-emerald-50/30">
                    <div className="text-emerald-800 font-bold">Kegiatan Inti 3:</div>
                    <div className="text-slate-700 font-medium text-[11px]">Merefleksi (Reflecting)</div>
                    <div className="text-slate-500 font-normal mt-0.5 text-[10px]">15 Menit</div>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasGuru.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasSiswa.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* 5. Penutup */}
                <tr className="bg-slate-50/40">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200 align-top">
                    <div className="text-slate-900 font-bold">Kegiatan Penutup</div>
                    <div className="text-slate-500 font-normal mt-0.5 text-[11px]">
                      Alokasi: {data.langkahPembelajaran.kegiatanPenutup.durasi}
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanPenutup.aktivitasGuru.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 align-top">
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {data.langkahPembelajaran.kegiatanPenutup.aktivitasSiswa.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kegiatan Kontekstual & Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-1">Kegiatan Kontekstual Aplikatif:</h4>
              <p className="text-slate-700 leading-relaxed">
                {data.langkahPembelajaran.kegiatanInti.kegiatanKontekstual}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-1">Media, Sumber Belajar & Alokasi:</h4>
              <ul className="space-y-1 text-slate-700">
                <li>
                  <strong>Media & Alat:</strong>{' '}
                  {data.langkahPembelajaran.mediaSumberBelajar.mediaAlat.join(', ')}
                </li>
                <li>
                  <strong>Sumber Belajar:</strong>{' '}
                  {data.langkahPembelajaran.mediaSumberBelajar.sumberBelajar.join(', ')}
                </li>
                <li>
                  <strong>Alokasi Waktu:</strong>{' '}
                  {data.langkahPembelajaran.mediaSumberBelajar.alokasiWaktuDetail}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* BAGIAN E: ASESMEN DAN LAMPIRAN (OPSIONAL) */}
        {/* ============================================================== */}
        {data.asesmenDanLampiran && (
          <section className="mb-8">
            <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-blue-900">
              <span className="w-6 h-6 rounded-md bg-blue-900 text-white font-bold text-xs flex items-center justify-center">
                E
              </span>
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
                Asesmen dan Lampiran Pembelajaran
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="font-bold text-blue-900 mb-1">1. Asesmen Diagnostik (Awal)</div>
                <p className="text-slate-600 leading-relaxed">{data.asesmenDanLampiran.asesmenAwal}</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="font-bold text-blue-900 mb-1">2. Asesmen Formatif (Proses)</div>
                <p className="text-slate-600 leading-relaxed">{data.asesmenDanLampiran.asesmenFormatif}</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="font-bold text-blue-900 mb-1">3. Asesmen Sumatif (Akhir)</div>
                <p className="text-slate-600 leading-relaxed">{data.asesmenDanLampiran.asesmenSumatif}</p>
              </div>
            </div>

            {data.asesmenDanLampiran.lembarKerjaRingkas && (
              <div className="p-3.5 bg-blue-50/30 border border-blue-200 rounded-lg text-xs mb-3">
                <div className="font-bold text-blue-900 mb-1">
                  Lembar Kerja Peserta Didik (LKPD) Ringkas:
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {data.asesmenDanLampiran.lembarKerjaRingkas}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ============================================================== */}
        {/* TANDA TANGAN RESMI KEDINASAN */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-slate-300 text-xs">
          <div className="grid grid-cols-2 gap-8 text-center">
            {/* Kepala Sekolah */}
            <div>
              <p className="text-slate-700">Mengetahui,</p>
              <p className="font-bold text-slate-900">Kepala Satuan Pendidikan</p>
              <div className="h-20 sm:h-24 flex items-end justify-center">
                <div className="w-48 sm:w-56 border-b border-slate-800 pb-0.5">
                  <span className="font-bold text-slate-900 block">
                    {data.identitas.namaKepalaSekolah || '( ............................................... )'}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mt-1">
                NIP. {data.identitas.nipKepalaSekolah || '...........................................'}
              </p>
            </div>

            {/* Guru Mata Pelajaran */}
            <div>
              <p className="text-slate-700">
                {data.meta?.kotaPenyusunan || 'Tempat'},{' '}
                {data.meta?.tanggalPenyusunan || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="font-bold text-slate-900">Guru Mata Pelajaran</p>
              <div className="h-20 sm:h-24 flex items-end justify-center">
                <div className="w-48 sm:w-56 border-b border-slate-800 pb-0.5">
                  <span className="font-bold text-slate-900 block">
                    {data.identitas.namaGuru}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mt-1">
                NIP. {data.identitas.nipGuru || '...........................................'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

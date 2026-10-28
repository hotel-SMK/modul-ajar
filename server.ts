import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '15mb' }));

  // Helper Gemini client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API endpoint for generating Deep Learning module
  app.post('/api/generate-module', async (req, res) => {
    try {
      const {
        namaSekolah,
        namaGuru,
        nipGuru,
        namaKepalaSekolah,
        nipKepalaSekolah,
        mataPelajaran,
        fase,
        kelas,
        semester,
        tahunPelajaran,
        alokasiWaktu,
        topikMateri,
        fokusPendekatan,
        catatanTambahan,
      } = req.body;

      if (!mataPelajaran || !topikMateri) {
        return res.status(400).json({ error: 'Mata pelajaran dan topik pembelajaran wajib diisi.' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: 'GEMINI_API_KEY belum dikonfigurasi pada server.',
          needsFallback: true,
        });
      }

      const prompt = `Anda adalah konsultan ahli kurikulum dan pedagogi "Pembelajaran Mendalam" (Deep Learning) standar Kurikulum Nasional Indonesia (Kemendikdasmen).
Tolong buatkan dokumen Modul Ajar Deep Learning yang komprehensif, operasional, berbobot tinggi, dan terstruktur sesuai 4 bagian utama berikut:

INPUT GURU:
- Nama Sekolah: ${namaSekolah || 'SMA / SMP / SD Percontohan'}
- Nama Guru/Penyusun: ${namaGuru || 'Guru Pengampu'}
- NIP Guru: ${nipGuru || '-'}
- Kepala Sekolah: ${namaKepalaSekolah || 'Kepala Sekolah'}
- NIP Kepala Sekolah: ${nipKepalaSekolah || '-'}
- Mata Pelajaran: ${mataPelajaran}
- Fase dan Kelas: ${fase || 'Fase E'} / ${kelas || 'Kelas X'}
- Semester & Tahun Pelajaran: ${semester || 'Ganjil'} / ${tahunPelajaran || '2024/2025'}
- Alokasi Waktu: ${alokasiWaktu || '2 x 45 Menit (1 Pertemuan)'}
- Materi/Topik Pembelajaran: ${topikMateri}
- Pendekatan/Strategi Khusus yang Diharapkan: ${fokusPendekatan || 'Problem-Based Learning / Kolaboratif Berdiferensiasi'}
- Catatan/Instruksi Tambahan: ${catatanTambahan || '-'}

KERANGKA MODUL AJAR DEEP LEARNING:
A. Identitas Modul
B. Identifikasi dan Perencanaan Pembelajaran:
   - Karakteristik dan kebutuhan peserta didik (kesiapan, minat, profil belajar)
   - Materi esensial dan relevansinya dengan kehidupan nyata (faktual, kontekstual masa kini)
   - Dimensi Profil Lulusan / Profil Pelajar Pancasila yang dikembangkan
   - Capaian Pembelajaran (CP) resmi sesuai fase
   - Tujuan Pembelajaran (TP) yang terukur dengan kata kerja operasional (ABCD: Audience, Behavior, Condition, Degree)
   - Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) dengan indikator pencapaian bertingkat
C. Desain Pembelajaran Mendalam (Deep Learning Pedagogy):
   - Praktik pedagogis atau strategi pembelajaran inovatif
   - Kemitraan pembelajaran (siswa-guru, antar-siswa, keterlibatan orang tua / komunitas / praktisi)
   - Lingkungan pembelajaran (iklim psikologis aman, ruang fisik/kolaboratif)
   - Pemanfaatan teknologi digital (aplikasi, AI, media interaktif, simulasi)
   - Prinsip Berkesadaran (Mindful - hadir utuh, fokus), Bermakna (Meaningful - relevan dg hidup siswa), Menggembirakan (Joyful - antusias & interaktif)
   - Tiga Pengalaman Belajar Inti:
     * Memahami (Understanding / Inquiry, Eksplorasi konsep)
     * Mengaplikasi (Applying / Menerapkan dalam pemecahan masalah / kreasi produk nyata)
     * Merefleksi (Reflecting / Metakognisi, evaluasi diri dan rekan)
D. Langkah-Langkah Pembelajaran:
   - Kegiatan Pendahuluan (Apersepsi, mindful moment / breathing / ice breaking pembuka, asesmen diagnostik singkat, motivasi kontekstual, pertanyaan pemantik)
   - Kegiatan Inti (Siklus Memahami -> Mengaplikasi -> Merefleksi dengan diferensiasi proses/konten, aktivitas guru & siswa yang spesifik dan interaktif)
   - Kegiatan Penutup (Apresiasi, simpulan berkesadaran, refleksi 3-2-1 / exit ticket, tindak lanjut)
   - Pertanyaan pemantik dan kegiatan kontekstual aplikatif
   - Media, sumber belajar, dan alokasi waktu terinci
E. Asesmen dan Lampiran:
   - Asesmen awal (diagnostik), formatif (proses & rubrik performa), sumatif
   - Lembar Kerja Peserta Didik (LKPD) ringkas
   - Glosarium istilah penting

Hasilkan JSON yang valid dan lengkap sesuai struktur.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Anda adalah pakar penyusun modul ajar Deep Learning (Mindful, Meaningful, Joyful) berstandar nasional Indonesia. Berikan output selalu dalam format JSON murni yang sesuai dengan skema yang diminta.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              identitas: {
                type: Type.OBJECT,
                properties: {
                  namaSekolah: { type: Type.STRING },
                  namaGuru: { type: Type.STRING },
                  nipGuru: { type: Type.STRING },
                  namaKepalaSekolah: { type: Type.STRING },
                  nipKepalaSekolah: { type: Type.STRING },
                  mataPelajaran: { type: Type.STRING },
                  fase: { type: Type.STRING },
                  kelas: { type: Type.STRING },
                  semester: { type: Type.STRING },
                  tahunPelajaran: { type: Type.STRING },
                  alokasiWaktu: { type: Type.STRING },
                  topikMateri: { type: Type.STRING },
                },
                required: ['namaSekolah', 'namaGuru', 'mataPelajaran', 'fase', 'kelas', 'semester', 'tahunPelajaran', 'alokasiWaktu', 'topikMateri'],
              },
              identifikasi: {
                type: Type.OBJECT,
                properties: {
                  karakteristikPesertaDidik: { type: Type.STRING },
                  materiEsensialRelevansi: { type: Type.STRING },
                  dimensiProfilLulusan: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  capaianPembelajaran: { type: Type.STRING },
                  tujuanPembelajaran: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  kriteriaKetercapaian: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: ['karakteristikPesertaDidik', 'materiEsensialRelevansi', 'dimensiProfilLulusan', 'capaianPembelajaran', 'tujuanPembelajaran', 'kriteriaKetercapaian'],
              },
              desainDeepLearning: {
                type: Type.OBJECT,
                properties: {
                  praktikPedagogis: { type: Type.STRING },
                  kemitraanPembelajaran: { type: Type.STRING },
                  lingkunganPembelajaran: { type: Type.STRING },
                  pemanfaatanTeknologiDigital: { type: Type.STRING },
                  prinsipPrinsip: {
                    type: Type.OBJECT,
                    properties: {
                      berkesadaran: { type: Type.STRING },
                      bermakna: { type: Type.STRING },
                      menggembirakan: { type: Type.STRING },
                    },
                    required: ['berkesadaran', 'bermakna', 'menggembirakan'],
                  },
                  pengalamanBelajar: {
                    type: Type.OBJECT,
                    properties: {
                      memahami: { type: Type.STRING },
                      mengaplikasi: { type: Type.STRING },
                      merefleksi: { type: Type.STRING },
                    },
                    required: ['memahami', 'mengaplikasi', 'merefleksi'],
                  },
                },
                required: ['praktikPedagogis', 'kemitraanPembelajaran', 'lingkunganPembelajaran', 'pemanfaatanTeknologiDigital', 'prinsipPrinsip', 'pengalamanBelajar'],
              },
              langkahPembelajaran: {
                type: Type.OBJECT,
                properties: {
                  kegiatanPendahuluan: {
                    type: Type.OBJECT,
                    properties: {
                      durasi: { type: Type.STRING },
                      aktivitasGuru: { type: Type.ARRAY, items: { type: Type.STRING } },
                      aktivitasSiswa: { type: Type.ARRAY, items: { type: Type.STRING } },
                      pertanyaanPemantik: { type: Type.ARRAY, items: { type: Type.STRING } },
                    },
                    required: ['durasi', 'aktivitasGuru', 'aktivitasSiswa', 'pertanyaanPemantik'],
                  },
                  kegiatanInti: {
                    type: Type.OBJECT,
                    properties: {
                      durasi: { type: Type.STRING },
                      tahapMemahami: {
                        type: Type.OBJECT,
                        properties: {
                          aktivitasGuru: { type: Type.ARRAY, items: { type: Type.STRING } },
                          aktivitasSiswa: { type: Type.ARRAY, items: { type: Type.STRING } },
                        },
                        required: ['aktivitasGuru', 'aktivitasSiswa'],
                      },
                      tahapMengaplikasi: {
                        type: Type.OBJECT,
                        properties: {
                          aktivitasGuru: { type: Type.ARRAY, items: { type: Type.STRING } },
                          aktivitasSiswa: { type: Type.ARRAY, items: { type: Type.STRING } },
                        },
                        required: ['aktivitasGuru', 'aktivitasSiswa'],
                      },
                      tahapMerefleksi: {
                        type: Type.OBJECT,
                        properties: {
                          aktivitasGuru: { type: Type.ARRAY, items: { type: Type.STRING } },
                          aktivitasSiswa: { type: Type.ARRAY, items: { type: Type.STRING } },
                        },
                        required: ['aktivitasGuru', 'aktivitasSiswa'],
                      },
                      kegiatanKontekstual: { type: Type.STRING },
                    },
                    required: ['durasi', 'tahapMemahami', 'tahapMengaplikasi', 'tahapMerefleksi', 'kegiatanKontekstual'],
                  },
                  kegiatanPenutup: {
                    type: Type.OBJECT,
                    properties: {
                      durasi: { type: Type.STRING },
                      aktivitasGuru: { type: Type.ARRAY, items: { type: Type.STRING } },
                      aktivitasSiswa: { type: Type.ARRAY, items: { type: Type.STRING } },
                      refleksiTindakLanjut: { type: Type.STRING },
                    },
                    required: ['durasi', 'aktivitasGuru', 'aktivitasSiswa', 'refleksiTindakLanjut'],
                  },
                  mediaSumberBelajar: {
                    type: Type.OBJECT,
                    properties: {
                      mediaAlat: { type: Type.ARRAY, items: { type: Type.STRING } },
                      sumberBelajar: { type: Type.ARRAY, items: { type: Type.STRING } },
                      alokasiWaktuDetail: { type: Type.STRING },
                    },
                    required: ['mediaAlat', 'sumberBelajar', 'alokasiWaktuDetail'],
                  },
                },
                required: ['kegiatanPendahuluan', 'kegiatanInti', 'kegiatanPenutup', 'mediaSumberBelajar'],
              },
              asesmenDanLampiran: {
                type: Type.OBJECT,
                properties: {
                  asesmenAwal: { type: Type.STRING },
                  asesmenFormatif: { type: Type.STRING },
                  asesmenSumatif: { type: Type.STRING },
                  lembarKerjaRingkas: { type: Type.STRING },
                  bahanBacaanGuruSiswa: { type: Type.STRING },
                  glosarium: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        istilah: { type: Type.STRING },
                        definisi: { type: Type.STRING },
                      },
                      required: ['istilah', 'definisi'],
                    },
                  },
                },
              },
              meta: {
                type: Type.OBJECT,
                properties: {
                  kotaPenyusunan: { type: Type.STRING },
                  tanggalPenyusunan: { type: Type.STRING },
                },
              },
            },
            required: ['identitas', 'identifikasi', 'desainDeepLearning', 'langkahPembelajaran'],
          },
        },
      });

      const responseText = response.text || '{}';
      const parsedData = JSON.parse(responseText);

      // Preserve input values if any are blank
      if (!parsedData.identitas.namaSekolah && namaSekolah) parsedData.identitas.namaSekolah = namaSekolah;
      if (!parsedData.identitas.namaGuru && namaGuru) parsedData.identitas.namaGuru = namaGuru;
      if (!parsedData.identitas.nipGuru && nipGuru) parsedData.identitas.nipGuru = nipGuru;
      if (!parsedData.identitas.namaKepalaSekolah && namaKepalaSekolah) parsedData.identitas.namaKepalaSekolah = namaKepalaSekolah;
      if (!parsedData.identitas.nipKepalaSekolah && nipKepalaSekolah) parsedData.identitas.nipKepalaSekolah = nipKepalaSekolah;

      return res.json({ success: true, data: parsedData });
    } catch (err: any) {
      console.error('Error generating module with Gemini:', err);
      return res.status(500).json({
        error: err.message || 'Gagal menghasilkan modul ajar.',
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
  });

  // Static files & Vite middleware
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server ready on http://0.0.0.0:${PORT}`);
  });
}

startServer();

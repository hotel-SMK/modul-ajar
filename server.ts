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

function cleanNip(nip?: string): string {
  if (!nip) return '';
  return nip.replace(/^(NIP\.?\s*)+/gi, '').trim();
}

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

  // API endpoint for generating Deep Learning module based on A-D inputs
  app.post('/api/generate-module', async (req, res) => {
    try {
      const {
        namaSekolah = 'SMK Negeri 1 Bebandem',
        namaGuru = 'Guru Pengampu',
        nipGuru = '-',
        namaKepalaSekolah = 'I Wayan Darmayasa, ST.,M.Si.',
        nipKepalaSekolah = '19730522 200501 1 009',
        mataPelajaran,
        fase = 'Fase E',
        kelas = 'Kelas X SMK',
        semester = 'Semester Ganjil',
        tahunPelajaran = '2024/2025',
        alokasiWaktu = '4 JP (4 x 45 menit)',
        topikMateri,

        // B
        karakteristikPesertaDidik,
        materiEsensialRelevansi,
        dimensiProfilLulusan = [],
        capaianPembelajaran,
        fokusTujuanPembelajaran,
        kriteriaKetercapaianFokus,

        // C
        praktikPedagogis,
        kemitraanPembelajaran,
        lingkunganPembelajaran,
        pemanfaatanTeknologiDigital,
        prinsipFokus,

        // D
        pertanyaanPemantikKhusus,
        kegiatanKontekstualSpesifik,
        mediaDanSumber,
      } = req.body;

      if (!mataPelajaran || !topikMateri) {
        return res.status(400).json({ error: 'Mata pelajaran dan topik materi pembelajaran wajib diisi.' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: 'GEMINI_API_KEY belum dikonfigurasi pada server.',
          needsFallback: true,
        });
      }

      const prompt = `Anda adalah konsultan kurikulum nasional dan pakar pedagogi Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, Joyful) berstandar Kemendikdasmen RI / Kurikulum Merdeka (Keputusan BSKAP No 032/H/KR/2024 tentang Capaian Pembelajaran).

Tolong susunkan dokumen resmi MODUL AJAR PEMBELAJARAN MENDALAM yang sangat akurat, operasional, dan presisi, menyesuaikan secara menyeluruh dengan seluruh input dari Bagian A sampai D berikut:

A. IDENTITAS MODUL:
- Nama Satuan Pendidikan: ${namaSekolah}
- Nama Kepala Sekolah: ${namaKepalaSekolah}
- NIP Kepala Sekolah: ${cleanNip(nipKepalaSekolah)}
- Nama Guru Pengampu: ${namaGuru}
- NIP Guru Pengampu: ${cleanNip(nipGuru) || '-'}
- Mata Pelajaran: ${mataPelajaran}
- Fase & Kelas: ${fase} / ${kelas}
- Semester & Tahun Pelajaran: ${semester} / ${tahunPelajaran}
- Alokasi Waktu: ${alokasiWaktu}
- Topik / Materi Pembelajaran: ${topikMateri}

B. IDENTIFIKASI & PERENCANAAN PEMBELAJARAN:
- Karakteristik & Kebutuhan Peserta Didik: ${karakteristikPesertaDidik || 'Cari dan rumuskan secara otomatis karakteristik psikologis dan gaya belajar murid jenjang ' + kelas + ' di ' + namaSekolah + ', khususnya orientasi praktik, kolaborasi, dan kemandirian.'}
- Materi Esensial & Relevansi Dunia Nyata / Industri: ${materiEsensialRelevansi || 'Hubungkan konsep materi esensial secara otomatis dengan pemecahan masalah nyata dalam kehidupan sehari-hari dan kebutuhan dunia kerja/industri.'}
- Dimensi Profil Lulusan yang Dikembangkan: ${Array.isArray(dimensiProfilLulusan) && dimensiProfilLulusan.length > 0 ? dimensiProfilLulusan.join(', ') : 'Bernalar Kritis, Kreatif, Bergotong Royong, Mandiri'}
- Capaian Pembelajaran (CP): ${capaianPembelajaran || 'Cari secara otomatis deskripsi resmi Capaian Pembelajaran (CP) Kemendikdasmen sesuai mata pelajaran ' + mataPelajaran + ' dan ' + fase + '.'}
- Arahan Tujuan Pembelajaran (TP): ${fokusTujuanPembelajaran || 'Rumuskan minimal 3 Tujuan Pembelajaran operasional ABCD (Audience, Behavior, Condition, Degree) berbasis pemikiran tingkat tinggi (HOTS).'}
- Kriteria Ketercapaian (KKTP): ${kriteriaKetercapaianFokus || 'Susun indikator ketercapaian terukur yang mencakup ranah kognitif, afektif, dan performa psikomotorik.'}

C. DESAIN PEMBELAJARAN MENDALAM:
- Praktik Pedagogis: ${praktikPedagogis || 'Problem-Based Learning terintegrasi Teaching Factory / Diferensiasi'}
- Kemitraan Pembelajaran: ${kemitraanPembelajaran || 'Kolaborasi antarsiswa, guru fasilitator, dan keterlibatan dunia usaha/dunia industri (DUDI)'}
- Lingkungan Pembelajaran: ${lingkunganPembelajaran || 'Laboratorium/bengkel praktik berbudaya 5R serta iklim psikologis aman & suportif'}
- Pemanfaatan Teknologi Digital: ${pemanfaatanTeknologiDigital || 'Platform digital kolaboratif, AI edukatif, dan simulasi kejuruan'}
- Fokus Prinsip: ${prinsipFokus || 'Berkesadaran (Mindful), Bermakna (Meaningful), Menggembirakan (Joyful)'}
- Pengalaman Belajar Inti:
  * Memahami (Understanding / Eksplorasi konsep esensial)
  * Mengaplikasi (Applying / Proyek atau studi kasus nyata terstandar)
  * Merefleksi (Reflecting / Metakognisi dan evaluasi diri)

D. LANGKAH-LANGKAH PEMBELAJARAN:
- Pertanyaan Pemantik: ${pertanyaanPemantikKhusus || 'Buat minimal 2 pertanyaan pemantik yang memicu nalar kritis dan rasa ingin tahu mendalam.'}
- Skenario Langkah Pembelajaran (Pendahuluan, Inti [Memahami, Mengaplikasi, Merefleksi], Penutup) dengan rincian aktivitas guru dan aktivitas peserta didik yang interaktif.
- Kegiatan Kontekstual: ${kegiatanKontekstualSpesifik || 'Studi kasus kontekstual nyata yang menguji pemecahan masalah.'}
- Media, Sumber Belajar & Alokasi Waktu: ${mediaDanSumber || 'Alat praktik, buku ajar resmi, dan referensi industri'}

Berikan respon selalu dalam format JSON murni sesuai skema.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Anda adalah pakar penyusun modul ajar Deep Learning (Mindful, Meaningful, Joyful) berstandar nasional Indonesia (Kemendikdasmen). Berikan output selalu dalam format JSON murni yang sesuai dengan skema yang diminta.',
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

      // Enforce the requested identity fields
      parsedData.identitas.namaSekolah = namaSekolah || 'SMK Negeri 1 Bebandem';
      parsedData.identitas.namaKepalaSekolah = namaKepalaSekolah || 'I Wayan Darmayasa, ST.,M.Si.';
      parsedData.identitas.nipKepalaSekolah = cleanNip(nipKepalaSekolah) || '19730522 200501 1 009';
      if (namaGuru) parsedData.identitas.namaGuru = namaGuru;
      if (nipGuru) parsedData.identitas.nipGuru = cleanNip(nipGuru);
      if (!parsedData.meta) {
        parsedData.meta = {
          kotaPenyusunan: 'Bebandem',
          tanggalPenyusunan: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        };
      }

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

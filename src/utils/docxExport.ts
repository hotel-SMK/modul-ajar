import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
  ShadingType,
} from 'docx';
import { ModulAjarData } from '../types/modul';

const PRIMARY_COLOR = '1E3A8A'; // Navy blue
const LIGHT_BG = 'F1F5F9';     // Slate light
const BORDER_COLOR = 'CBD5E1'; // Slate border

export async function exportModulToDocx(data: ModulAjarData): Promise<Blob> {
  const tableBorder = {
    top: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
    bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
    left: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
    right: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
  };

  const createSectionHeader = (title: string) => {
    return new Paragraph({
      spacing: { before: 280, after: 140 },
      heading: HeadingLevel.HEADING_2,
      children: [
        new TextRun({
          text: title,
          bold: true,
          size: 24, // 12pt
          color: PRIMARY_COLOR,
          font: 'Times New Roman',
        }),
      ],
    });
  };

  const createSubHeader = (title: string) => {
    return new Paragraph({
      spacing: { before: 180, after: 80 },
      children: [
        new TextRun({
          text: title,
          bold: true,
          size: 22, // 11pt
          font: 'Times New Roman',
          color: '0F172A',
        }),
      ],
    });
  };

  const createBullet = (text: string) => {
    return new Paragraph({
      bullet: { level: 0 },
      spacing: { before: 40, after: 60 },
      children: [
        new TextRun({
          text,
          size: 22,
          font: 'Times New Roman',
          color: '1E293B',
        }),
      ],
    });
  };

  const createBodyParagraph = (text: string) => {
    return new Paragraph({
      spacing: { before: 60, after: 120 },
      children: [
        new TextRun({
          text,
          size: 22,
          font: 'Times New Roman',
          color: '1E293B',
        }),
      ],
    });
  };

  // Helper for identity row
  const createIdentityRow = (label: string, value: string) => {
    return new TableRow({
      children: [
        new TableCell({
          width: { size: 30, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: LIGHT_BG },
          borders: tableBorder,
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: label,
                  bold: true,
                  size: 20,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 70, type: WidthType.PERCENTAGE },
          borders: tableBorder,
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: value || '-',
                  size: 20,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };

  // Identity Table
  const identityTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      createIdentityRow('Nama Satuan Pendidikan', data.identitas.namaSekolah),
      createIdentityRow('Nama Guru / Penyusun', data.identitas.namaGuru + (data.identitas.nipGuru ? ` (NIP. ${data.identitas.nipGuru})` : '')),
      createIdentityRow('Mata Pelajaran', data.identitas.mataPelajaran),
      createIdentityRow('Fase & Kelas', `${data.identitas.fase} / ${data.identitas.kelas}`),
      createIdentityRow('Semester & Tahun Pelajaran', `${data.identitas.semester} / ${data.identitas.tahunPelajaran}`),
      createIdentityRow('Alokasi Waktu', data.identitas.alokasiWaktu),
      createIdentityRow('Materi / Topik Pembelajaran', data.identitas.topikMateri),
    ],
  });

  // Table for Activity Steps (Pendahuluan, Inti, Penutup)
  const createActivityTableRow = (tahap: string, durasi: string, aktivitasGuru: string[], aktivitasSiswa: string[]) => {
    return new TableRow({
      children: [
        new TableCell({
          width: { size: 22, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: LIGHT_BG },
          borders: tableBorder,
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: tahap, bold: true, size: 20, font: 'Times New Roman', color: PRIMARY_COLOR }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60 },
              children: [
                new TextRun({ text: `(${durasi})`, italics: true, size: 18, font: 'Times New Roman' }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 39, type: WidthType.PERCENTAGE },
          borders: tableBorder,
          children: aktivitasGuru.map(
            (act) =>
              new Paragraph({
                bullet: { level: 0 },
                spacing: { before: 40, after: 40 },
                children: [new TextRun({ text: act, size: 19, font: 'Times New Roman' })],
              })
          ),
        }),
        new TableCell({
          width: { size: 39, type: WidthType.PERCENTAGE },
          borders: tableBorder,
          children: aktivitasSiswa.map(
            (act) =>
              new Paragraph({
                bullet: { level: 0 },
                spacing: { before: 40, after: 40 },
                children: [new TextRun({ text: act, size: 19, font: 'Times New Roman' })],
              })
          ),
        }),
      ],
    });
  };

  const stepsTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      // Table Header
      new TableRow({
        children: [
          new TableCell({
            width: { size: 22, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: PRIMARY_COLOR },
            borders: tableBorder,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: 'Tahap & Alokasi', bold: true, size: 20, color: 'FFFFFF', font: 'Times New Roman' })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 39, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: PRIMARY_COLOR },
            borders: tableBorder,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: 'Aktivitas Guru', bold: true, size: 20, color: 'FFFFFF', font: 'Times New Roman' })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 39, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: PRIMARY_COLOR },
            borders: tableBorder,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: 'Aktivitas Peserta Didik', bold: true, size: 20, color: 'FFFFFF', font: 'Times New Roman' })],
              }),
            ],
          }),
        ],
      }),
      // Pendahuluan
      createActivityTableRow(
        'Kegiatan Pendahuluan',
        data.langkahPembelajaran.kegiatanPendahuluan.durasi,
        data.langkahPembelajaran.kegiatanPendahuluan.aktivitasGuru,
        data.langkahPembelajaran.kegiatanPendahuluan.aktivitasSiswa
      ),
      // Inti - Memahami
      createActivityTableRow(
        'Kegiatan Inti 1: Memahami (Understanding)',
        '20 Menit',
        data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasGuru,
        data.langkahPembelajaran.kegiatanInti.tahapMemahami.aktivitasSiswa
      ),
      // Inti - Mengaplikasi
      createActivityTableRow(
        'Kegiatan Inti 2: Mengaplikasi (Applying)',
        '25 Menit',
        data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasGuru,
        data.langkahPembelajaran.kegiatanInti.tahapMengaplikasi.aktivitasSiswa
      ),
      // Inti - Merefleksi
      createActivityTableRow(
        'Kegiatan Inti 3: Merefleksi (Reflecting)',
        '15 Menit',
        data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasGuru,
        data.langkahPembelajaran.kegiatanInti.tahapMerefleksi.aktivitasSiswa
      ),
      // Penutup
      createActivityTableRow(
        'Kegiatan Penutup',
        data.langkahPembelajaran.kegiatanPenutup.durasi,
        data.langkahPembelajaran.kegiatanPenutup.aktivitasGuru,
        data.langkahPembelajaran.kegiatanPenutup.aktivitasSiswa
      ),
    ],
  });

  // Signature Table
  const kota = data.meta?.kotaPenyusunan || 'Tempat Penyusunan';
  const tanggal = data.meta?.tanggalPenyusunan || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const signatureTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Mengetahui,', size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Kepala Satuan Pendidikan', bold: true, size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({ spacing: { before: 1200 }, children: [] }), // Signature space
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: data.identitas.namaKepalaSekolah || '( ............................................. )', bold: true, underline: {}, size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: data.identitas.nipKepalaSekolah ? `NIP. ${data.identitas.nipKepalaSekolah}` : 'NIP. -', size: 20, font: 'Times New Roman' }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: `${kota}, ${tanggal}`, size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Guru Mata Pelajaran', bold: true, size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({ spacing: { before: 1200 }, children: [] }), // Signature space
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: data.identitas.namaGuru || '( ............................................. )', bold: true, underline: {}, size: 22, font: 'Times New Roman' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: data.identitas.nipGuru ? `NIP. ${data.identitas.nipGuru}` : 'NIP. -', size: 20, font: 'Times New Roman' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  // Construct Document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440,    // 1 inch
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: [
          // Title
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({
                text: 'MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)',
                bold: true,
                size: 28, // 14pt
                font: 'Times New Roman',
                color: PRIMARY_COLOR,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 240 },
            children: [
              new TextRun({
                text: 'PENDEKATAN BERKESADARAN (MINDFUL), BERMAKNA (MEANINGFUL), & MENGGEMBIRAKAN (JOYFUL)',
                bold: true,
                size: 20, // 10pt
                font: 'Times New Roman',
                color: '475569',
              }),
            ],
          }),

          // Section A
          createSectionHeader('A. IDENTITAS MODUL'),
          identityTable,

          // Section B
          createSectionHeader('B. IDENTIFIKASI DAN PERENCANAAN PEMBELAJARAN'),
          createSubHeader('1. Karakteristik dan Kebutuhan Peserta Didik:'),
          createBodyParagraph(data.identifikasi.karakteristikPesertaDidik),

          createSubHeader('2. Materi Esensial dan Relevansinya dengan Kehidupan Nyata:'),
          createBodyParagraph(data.identifikasi.materiEsensialRelevansi),

          createSubHeader('3. Dimensi Profil Lulusan yang Dikembangkan:'),
          ...data.identifikasi.dimensiProfilLulusan.map(createBullet),

          createSubHeader('4. Capaian Pembelajaran (CP):'),
          createBodyParagraph(data.identifikasi.capaianPembelajaran),

          createSubHeader('5. Tujuan Pembelajaran (TP):'),
          ...data.identifikasi.tujuanPembelajaran.map(createBullet),

          createSubHeader('6. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP):'),
          ...data.identifikasi.kriteriaKetercapaian.map(createBullet),

          // Section C
          createSectionHeader('C. DESAIN PEMBELAJARAN MENDALAM (DEEP LEARNING)'),
          createSubHeader('1. Praktik Pedagogis atau Strategi Pembelajaran:'),
          createBodyParagraph(data.desainDeepLearning.praktikPedagogis),

          createSubHeader('2. Kemitraan Pembelajaran:'),
          createBodyParagraph(data.desainDeepLearning.kemitraanPembelajaran),

          createSubHeader('3. Lingkungan Pembelajaran:'),
          createBodyParagraph(data.desainDeepLearning.lingkunganPembelajaran),

          createSubHeader('4. Pemanfaatan Teknologi Digital:'),
          createBodyParagraph(data.desainDeepLearning.pemanfaatanTeknologiDigital),

          createSubHeader('5. Prinsip Pembelajaran Mendalam:'),
          createBullet(`Berkesadaran (Mindful): ${data.desainDeepLearning.prinsipPrinsip.berkesadaran}`),
          createBullet(`Bermakna (Meaningful): ${data.desainDeepLearning.prinsipPrinsip.bermakna}`),
          createBullet(`Menggembirakan (Joyful): ${data.desainDeepLearning.prinsipPrinsip.menggembirakan}`),

          createSubHeader('6. Pengalaman Belajar Inti:'),
          createBullet(`Memahami (Understanding): ${data.desainDeepLearning.pengalamanBelajar.memahami}`),
          createBullet(`Mengaplikasi (Applying): ${data.desainDeepLearning.pengalamanBelajar.mengaplikasi}`),
          createBullet(`Merefleksi (Reflecting): ${data.desainDeepLearning.pengalamanBelajar.merefleksi}`),

          // Section D
          createSectionHeader('D. LANGKAH-LANGKAH PEMBELAJARAN'),
          createSubHeader('Pertanyaan Pemantik:'),
          ...data.langkahPembelajaran.kegiatanPendahuluan.pertanyaanPemantik.map(createBullet),

          createSubHeader('Tabel Alur dan Aktivitas Pembelajaran:'),
          stepsTable,

          createSubHeader('Kegiatan Kontekstual Aplikatif:'),
          createBodyParagraph(data.langkahPembelajaran.kegiatanInti.kegiatanKontekstual),

          createSubHeader('Media, Alat, dan Sumber Belajar:'),
          createBullet(`Media & Alat: ${data.langkahPembelajaran.mediaSumberBelajar.mediaAlat.join(', ')}`),
          createBullet(`Sumber Belajar: ${data.langkahPembelajaran.mediaSumberBelajar.sumberBelajar.join(', ')}`),
          createBullet(`Alokasi Waktu Terinci: ${data.langkahPembelajaran.mediaSumberBelajar.alokasiWaktuDetail}`),

          // Section E (Optional but highly appreciated by teachers)
          ...(data.asesmenDanLampiran
            ? [
                createSectionHeader('E. ASESMEN DAN LAMPIRAN PEMBELAJARAN'),
                createSubHeader('1. Asesmen Awal (Diagnostik):'),
                createBodyParagraph(data.asesmenDanLampiran.asesmenAwal),
                createSubHeader('2. Asesmen Formatif (Proses & Performa):'),
                createBodyParagraph(data.asesmenDanLampiran.asesmenFormatif),
                createSubHeader('3. Asesmen Sumatif:'),
                createBodyParagraph(data.asesmenDanLampiran.asesmenSumatif),
                createSubHeader('4. Lembar Kerja Peserta Didik (LKPD) Ringkas:'),
                createBodyParagraph(data.asesmenDanLampiran.lembarKerjaRingkas),
              ]
            : []),

          // Signature
          new Paragraph({ spacing: { before: 400, after: 200 }, children: [] }),
          signatureTable,
        ],
      },
    ],
  });

  return await Packer.toBlob(doc);
}

export function downloadBlobAsFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

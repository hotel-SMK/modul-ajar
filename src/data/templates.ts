import { ModulAjarData } from '../types/modul';

export const INITIAL_MODUL: ModulAjarData = {
  identitas: {
    namaSekolah: 'SMK Negeri 1 Bebandem',
    namaGuru: 'Guru Pengampu, S.Pd.',
    nipGuru: '-',
    namaKepalaSekolah: 'I Wayan Darmayasa, ST.,M.Si.',
    nipKepalaSekolah: '19730522 200501 1 009',
    mataPelajaran: 'Dasar-Dasar Kejuruan / Informatika',
    fase: 'Fase E',
    kelas: 'Kelas X (Sepuluh) SMK',
    semester: 'Semester Ganjil',
    tahunPelajaran: '2024/2025',
    alokasiWaktu: '4 JP (4 x 45 menit)',
    topikMateri: 'Penerapan Berpikir Komputasional dan Keselamatan Kerja Teknologi di Lingkungan Sekolah & Industri',
  },
  identifikasi: {
    karakteristikPesertaDidik:
      'Peserta didik kelas X SMK Negeri 1 Bebandem memiliki gaya belajar visual dan kinestetik yang dominan, antusias terhadap praktik langsung dan simulasi teknologi, serta membutuhkan pembiasaan etika kerja profesional, disiplin industri, dan pemikiran analitis dalam menyelesaikan permasalahan nyata.',
    materiEsensialRelevansi:
      'Konsep esensial Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma) dan Budaya Kerja Industri (5R/5S dan K3LH). Relevan langsung dengan standar kompetensi kerja vokasi kejuruan dan pemecahan masalah teknis di dunia industri.',
    dimensiProfilLulusan: [
      'Bernalar Kritis (menganalisis masalah teknis, mengevaluasi efisiensi solusi sistematis)',
      'Kreatif (merumuskan solusi inovatif dan desain alur kerja efisien)',
      'Bergotong Royong (berkolaborasi aktif dalam tim kerja bengkel/laboratorium)',
      'Mandiri (memiliki inisiatif kerja dan disiplin regulasi diri berstandar industri)',
    ],
    capaianPembelajaran:
      'Pada akhir Fase E, peserta didik mampu menerapkan berpikir komputasional dalam menyelesaikan persoalan nyata berlandaskan logika algoritmik, serta menerapkan prinsip keamanan data, etika digital, dan standar keselamatan kerja profesional.',
    tujuanPembelajaran: [
      'Peserta didik mampu menganalisis permasalahan kontekstual di lingkungan sekolah dan industri menggunakan 4 pilar berpikir komputasional secara terstruktur.',
      'Peserta didik mampu merancang algoritma solusi kerja terstandar yang efisien dan aman melalui kerja kolaboratif.',
      'Peserta didik mampu merefleksikan proses penyelesaian masalah serta menarik makna pembelajaran untuk kesiapan kerja di dunia industri.',
    ],
    kriteriaKetercapaian: [
      'Mampu mendekomposisi masalah kompleks kejuruan menjadi komponen-komponen kecil yang terkelola.',
      'Mampu menyusun diagram alur/prosedur kerja solusi secara logis dan runtut.',
      'Menunjukkan sikap kerja berkesadaran, teliti, dan mengutamakan keselamatan kerja.',
      'Mampu mengkomunikasikan hasil karya kelompok secara percaya diri dan terbuka terhadap masukan.',
    ],
  },
  desainDeepLearning: {
    praktikPedagogis:
      'Problem-Based Learning (PBL) dan Teaching Factory (TEFA) berorientasi diferensiasi proses, memadukan studi kasus industri nyata dan simulasi praktik terarah.',
    kemitraanPembelajaran:
      'Kemitraan segitiga: Guru fasilitator, peserta didik yang saling mendukung (peer-mentoring), serta penyelarasan standar dengan Dunia Usaha / Dunia Industri (DUDI) mitra sekolah.',
    lingkunganPembelajaran:
      'Ruang laboratorium/bengkel praktik yang menerapkan 5R (Ringkas, Rapi, Resik, Rawat, Rajin) dengan atmosfer psikologis yang aman, suportif, dan menghargai setiap proses eksplorasi murid.',
    pemanfaatanTeknologiDigital:
      'Pemanfaatan AI edukatif untuk verifikasi ide, platform kolaborasi digital real-time, dan software simulator teknis kejuruan.',
    prinsipPrinsip: {
      berkesadaran:
        'Mindful: Mengawali aktivitas dengan pembiasaan kesadaran diri (mindful breathing) dan briefing keselamatan kerja 2 menit untuk membangun fokus mental penuh.',
      bermakna:
        'Meaningful: Setiap topik dikaitkan langsung dengan studi kasus nyata yang dihadapi teknisi/pekerja di industri, bukan hafalan teori.',
      menggembirakan:
        'Joyful: Suasana belajar interaktif melalui tantangan mini-proyek beregu, apresiasi pencapaian tim, dan dinamika pembelajaran tanpa tekanan intimidasi.',
    },
    pengalamanBelajar: {
      memahami:
        'Peserta didik mengeksplorasi konsep esensial melalui observasi studi kasus nyata dan investigasi sistematis.',
      mengaplikasi:
        'Peserta didik merancang dan menguji coba solusi konkret atas masalah kerja industri bersama tim kerja.',
      merefleksi:
        'Peserta didik melakukan refleksi metakognisi 3-2-1 dan evaluasi rekan sejawat terkait kualitas hasil kerja serta sikap kerja tim.',
    },
  },
  langkahPembelajaran: {
    kegiatanPendahuluan: {
      durasi: '15 Menit',
      aktivitasGuru: [
        'Guru menyapa murid dengan salam hangat, memimpin doa, dan memandu latihan hening berkesadaran (Mindful Moment) 2 menit untuk kesiapan mental belajar.',
        'Guru memeriksa kehadiran dan memastikan kesiapan alat perlindungan diri serta kebersihan lingkungan belajar (5R).',
        'Guru memberikan apersepsi kontekstual berupa tayangan video singkat tentang tantangan teknologi industri masa kini.',
        'Guru menyampaikan tujuan pembelajaran, indikator pencapaian, dan alur aktivitas yang menggembirakan.',
      ],
      aktivitasSiswa: [
        'Peserta didik merespons salam, berdoa dengan khidmat, dan mengikuti latihan hening berkesadaran dengan fokus penuh.',
        'Peserta didik mengecek kerapian diri dan kesiapan ruang belajar.',
        'Peserta didik menyimak apersepsi dengan antusias dan merespons pertanyaan pemantik dari guru.',
      ],
      pertanyaanPemantik: [
        'Bagaimana seorang teknisi profesional menemukan akar penyebab mesin/sistem yang tiba-tiba berhenti bekerja?',
        'Mengapa cara berpikir terstruktur dan kesadaran keselamatan kerja jauh lebih penting daripada sekadar kecepatan menyelesaikan tugas?',
      ],
    },
    kegiatanInti: {
      durasi: '140 Menit',
      tahapMemahami: {
        aktivitasGuru: [
          'Guru menyajikan studi kasus otentik industri dan memfasilitasi eksplorasi konsep 4 pilar Berpikir Komputasional.',
          'Guru memberikan bimbingan bertingkat (scaffolding) sesuai kebutuhan kesiapan belajar peserta didik.',
        ],
        aktivitasSiswa: [
          'Peserta didik menelaah dokumen studi kasus dan mengidentifikasi pola serta akar permasalahan (Dekomposisi & Pengenalan Pola).',
          'Peserta didik berdiskusi interaktif dalam kelompok kecil untuk merumuskan konsep pemahaman inti.',
        ],
      },
      tahapMengaplikasi: {
        aktivitasGuru: [
          'Guru memfasilitasi kerja tim dan mendampingi perancangan alur solusi kerja/algoritma pemecahan masalah.',
          'Guru melakukan observasi asesmen formatif terhadap keaktifan, penalaran kritis, dan kerjasama tim.',
        ],
        aktivitasSiswa: [
          'Peserta didik berkolaborasi dalam kelompok kerja merancang alur prosedur pemecahan masalah berstandar operasional.',
          'Peserta didik mendokumentasikan hasil rancangan dalam lembar kerja kolaboratif digital/visual.',
        ],
      },
      tahapMerefleksi: {
        aktivitasGuru: [
          'Guru memandu sesi presentasi silang (Gallery Walk / Demo Karya) dan memberikan penguatan konsep bermakna.',
          'Guru memfasilitasi proses refleksi diri dan umpan balik antarpeserta didik.',
        ],
        aktivitasSiswa: [
          'Setiap kelompok mempresentasikan rancangan solusi dan menerima masukan konstruktif dari kelompok lain.',
          'Peserta didik mengisi lembar refleksi diri mengenai wawasan baru, kendala yang dihadapi, dan strategi perbaikan diri.',
        ],
      },
      kegiatanKontekstual:
        'Simulasi penanganan kendala teknis nyata di industri kejuruan dengan menerapkan dekomposisi masalah, SOP kerja terstandar, dan protokol keselamatan kerja.',
    },
    kegiatanPenutup: {
      durasi: '25 Menit',
      aktivitasGuru: [
        'Guru bersama peserta didik merumuskan simpulan bermakna dari seluruh rangkaian pengalaman belajar.',
        'Guru memberikan apresiasi atas dedikasi, kerjasama, dan sikap berkesadaran yang ditunjukkan murid.',
        'Guru memberikan arahan tindak lanjut penugasan mandiri dan menutup sesi dengan doa penutup serta salam.',
      ],
      aktivitasSiswa: [
        'Peserta didik menyampaikan intisari pembelajaran dan komitmen perbaikan sikap kerja.',
        'Peserta didik merapikan kembali ruang praktik sesuai prinsip 5R (Ringkas, Rapi, Resik).',
        'Peserta didik berdoa bersama dan bersalaman dengan penuh rasa hormat.',
      ],
      refleksiTindakLanjut:
        'Mempraktikkan cara berpikir komputasional dalam menyelesaikan tugas proyek kejuruan berikutnya dan membuat catatan portofolio mandiri.',
    },
    mediaSumberBelajar: {
      mediaAlat: [
        'Perangkat Komputer / Laptop Lab',
        'LCD Proyektor Multimedia',
        'Papan tulis dan instrumen kerja kelompok',
        'Gawai untuk akses sumber rujukan digital',
      ],
      sumberBelajar: [
        'Buku Teks Kejuruan Kurikulum Merdeka Kemendikdasmen',
        'Modul Standar Operasional Prosedur (SOP) Industri Mitra SMK',
        'Bahan ajar digital dan dokumentasi teknis kejuruan terkini',
      ],
      alokasiWaktuDetail:
        'Total 4 JP (180 Menit): Pendahuluan (15 mnt), Eksplorasi Memahami (40 mnt), Aplikasi Rancangan (70 mnt), Refleksi & Berbagi (30 mnt), Penutup (25 mnt).',
    },
  },
  asesmenDanLampiran: {
    asesmenAwal:
      'Asesmen diagnostik non-kognitif (kesiapan mental dan gaya belajar) serta kuis diagnostik kognitif 3 soal mengenai logika pemecahan masalah.',
    asesmenFormatif:
      'Penilaian observasi kinerja proses kerja kelompok menggunakan rubrik analitik (Aspek: Penalaran Kritis, Kolaborasi, Ketelitian, dan Sikap Kerja).',
    asesmenSumatif:
      'Penilaian portofolio laporan hasil rancangan pemecahan masalah dan lembar uji pemahaman konsep.',
    lembarKerjaRingkas:
      'LKPD Berbasis Masalah: Berisi skenario kendala teknis industri, bagan dekomposisi masalah, tabel identifikasi pola, dan formulir perumusan alur kerja.',
    bahanBacaanGuruSiswa:
      'Ringkasan materi "Penerapan Berpikir Komputasional dan Budaya Kerja Industri 5R dalam Pendidikan Vokasi SMK".',
    glosarium: [
      { istilah: 'Deep Learning (Pembelajaran Mendalam)', definisi: 'Pendekatan pembelajaran berkesadaran, bermakna, dan menggembirakan yang menumbuhkan pemahaman konsep esensial dan kemampuan aplikatif jangka panjang.' },
      { istilah: 'Teaching Factory (TEFA)', definisi: 'Model pembelajaran di SMK berbasis produksi/jasa yang mengacu pada standar dan prosedur di dunia industri.' },
      { istilah: 'Mindful Breathing', definisi: 'Latihan pernapasan sadar untuk memusatkan perhatian, mengurangi kecemasan, dan meningkatkan kejernihan berpikir sebelum belajar.' },
      { istilah: 'Dekomposisi Masalah', definisi: 'Kemampuan memecah suatu masalah atau sistem yang rumit menjadi bagian-bagian yang lebih kecil dan mudah dikelola.' },
    ],
  },
  meta: {
    kotaPenyusunan: 'Bebandem',
    tanggalPenyusunan: '15 Juli 2024',
  },
};

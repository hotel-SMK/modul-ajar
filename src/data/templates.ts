import { ModulAjarData } from '../types/modul';

export const TEMPLATE_CONTOH_1: ModulAjarData = {
  identitas: {
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
  },
  identifikasi: {
    karakteristikPesertaDidik:
      'Peserta didik kelas X berada pada rentang usia 15-16 tahun, sangat akrab dengan gawai dan media sosial (digital native), namun sebagian besar masih berperan sebagai konsumen pasif informasi. Memiliki minat tinggi pada teknologi visual dan kecerdasan buatan, namun membutuhkan penguatan dalam kemampuan berpikir kritis, verifikasi fakta/data, serta pemahaman etika privasi digital.',
    materiEsensialRelevansi:
      'Prinsip Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma) dan dampaknya dalam pemanfaatan generative AI. Relevan secara langsung karena peserta didik menggunakan AI sehari-hari untuk mengerjakan tugas sekolah dan interaksi sosial.',
    dimensiProfilLulusan: [
      'Bernalar Kritis (menganalisis output AI, mengevaluasi bias informasi)',
      'Kreatif (merumuskan solusi inovatif berbasis teknologi secara bertanggung jawab)',
      'Bergotong Royong (berkolaborasi memecahkan studi kasus nyata dalam kelompok)',
      'Mandiri (memiliki kesadaran regulasi diri dalam penggunaan gawai)',
    ],
    capaianPembelajaran:
      'Pada akhir Fase E, peserta didik mampu memahami strategi algoritmik standar dan menerapkan berpikir komputasional pada situasi kontekstual sehari-hari, serta memahami dampak sosial, etika, dan keamanan data dalam era kecerdasan artifisial.',
    tujuanPembelajaran: [
      'Peserta didik mampu menguraikan 4 pilar berpikir komputasional dalam konteks studi kasus pemanfaatan AI secara cermat melalui diskusi interaktif.',
      'Peserta didik mampu merancang prompt instruksional yang etis dan bernalar kritis untuk menyelesaikan permasalahan nyata di lingkungan sekolah.',
      'Peserta didik mampu merefleksikan dampak positif dan risiko bias kecerdasan buatan terhadap hak cipta serta integritas akademik.',
    ],
    kriteriaKetercapaian: [
      'Mampu mengidentifikasi minimal 3 pilar berpikir komputasional dalam skenario yang disajikan.',
      'Mampu menyusun prompt berbasis masalah kontekstual yang menghasilkan solusi valid dan terverifikasi.',
      'Mampu memberikan argumentasi etis terkait batasan penggunaan AI dalam pembelajaran.',
      'Menunjukkan sikap kolaboratif dan saling menghargai saat presentasi kelompok.',
    ],
  },
  desainDeepLearning: {
    praktikPedagogis:
      'Problem-Based Learning (PBL) terintegrasi Pembelajaran Berdiferensiasi (Differentiated Process & Product) dan Socratic Dialogue untuk merangsang pemikiran reflektif tingkat tinggi (HOTS).',
    kemitraanPembelajaran:
      'Kemitraan multi-arah: Kolaborasi peer-to-peer antarpeserta didik dalam kelompok heterogen, guru sebagai fasilitator pemantik rasa ingin tahu, serta mengundang referensi dari praktisi AI/komunitas teknologi lokal secara virtual.',
    lingkunganPembelajaran:
      'Menciptakan ruang kelas yang aman secara psikologis (psychological safety), di mana setiap kesalahan dianggap sebagai momen belajar (growth mindset). Penataan meja berbentuk pulau kecil (round-table clusters) untuk memudahkan interaksi.',
    pemanfaatanTeknologiDigital:
      'Platform visual interaktif (Mentimeter/Padlet) untuk brainstorming berkesadaran, simulator prompt AI berbasis edukasi, dan dokumen kolaboratif digital untuk asesmen formatif langsung.',
    prinsipPrinsip: {
      berkesadaran:
        'Mindful: Mengawali pembelajaran dengan latihan pernapasan berkesadaran (mindful breathing) 2 menit untuk menenangkan pikiran, serta mengajak murid sadar penuh atas dampak digital footprint mereka.',
      bermakna:
        'Meaningful: Materi dikaitkan langsung dengan dilema nyata yang dihadapi murid saat menggunakan AI untuk tugas sekolah, hoax deepfake di medsos, dan orisinalitas karya.',
      menggembirakan:
        'Joyful: Pembelajaran dikemas melalui game investigasi detektif AI (Spot the AI Bias), kuis interaktif, dan apresiasi positif terhadap setiap kontribusi gagasan orisinal murid.',
    },
    pengalamanBelajar: {
      memahami:
        'Murid mengeksplorasi konsep dasar berpikir komputasional melalui simulasi kasus nyata "Bagaimana algoritma rekomendasi media sosial memahami preferensi kita".',
      mengaplikasi:
        'Murid bekerja dalam tim merumuskan solusi atas permasalahan "Mengatasi Plagiarisme & Hoax di Kalangan Pelajar" dengan membuat infografis/alur panduan etika digital.',
      merefleksi:
        'Murid menuliskan jurnal refleksi 3-2-1 (3 hal baru yang dipahami, 2 hal yang menantang, 1 komitmen etis yang akan dipraktikkan mulai hari ini).',
    },
  },
  langkahPembelajaran: {
    kegiatanPendahuluan: {
      durasi: '15 Menit',
      aktivitasGuru: [
        'Guru menyapa murid dengan hangat dan memandu latihan hening sejenak (Mindful Moment) untuk memusatkan perhatian dan rasa syukur.',
        'Guru melakukan presensi kehadiran dan menyepakati keyakinan kelas selama pembelajaran berlangsung.',
        'Guru menyajikan tayangan video singkat 60 detik tentang berita viral buatan AI (deepfake) sebagai apersepsi kontekstual.',
        'Guru menyampaikan tujuan pembelajaran, alur kegiatan, dan kriteria penilaian.',
      ],
      aktivitasSiswa: [
        'Murid merespons salam, mengikuti latihan hening dengan tenang dan hadir utuh (mindful).',
        'Murid menyimak tayangan video apersepsi dengan antusias dan mengajukan dugaan awal.',
        'Murid menjawab polling cepat diagnostik non-kognitif pada layar proyektor mengenai perasaan mereka hari ini.',
      ],
      pertanyaanPemantik: [
        'Pernahkah kalian membaca berita atau melihat foto di media sosial yang ternyata 100% dibuat oleh AI? Bagaimana cara kalian mengetahuinya?',
        'Jika AI bisa mengerjakan semua tugas sekolah dalam 5 detik, keterampilan manusia apa yang paling berharga dan tidak bisa digantikan oleh mesin?',
      ],
    },
    kegiatanInti: {
      durasi: '60 Menit',
      tahapMemahami: {
        aktivitasGuru: [
          'Guru memfasilitasi eksplorasi konsep 4 pilar Berpikir Komputasional melalui skenario "Detektif Informasi".',
          'Guru memberikan scaffolding bagi kelompok yang membutuhkan bimbingan bertahap dan tantangan pengayaan bagi kelompok cepat.',
        ],
        aktivitasSiswa: [
          'Murid secara mandiri membaca studi kasus digital dan mengidentifikasi unsur dekomposisi serta pola dalam data.',
          'Murid saling mendiskusikan temuan awal dengan rekan sebangku (Think-Pair-Share).',
        ],
      },
      tahapMengaplikasi: {
        aktivitasGuru: [
          'Guru mendampingi kerja kelompok dan memberikan umpan balik langsung (formative feedback) saat murid menyusun panduan etika AI.',
          'Guru mengobservasi partisipasi aktif dan dimensi bernalar kritis murid menggunakan lembar observasi proses.',
        ],
        aktivitasSiswa: [
          'Murid berkolaborasi dalam tim heterogen (4-5 orang) merancang "Piagam Pelajar Cerdas & Beretika AI".',
          'Murid menuangkan gagasan dalam format visual (poster digital / mini-presentasi / peta pikiran sesuai minat kelompok).',
        ],
      },
      tahapMerefleksi: {
        aktivitasGuru: [
          'Guru memfasilitasi sesi "Gallery Walk" singkat di mana tiap kelompok memberikan apresiasi bintang dan catatan masukan konstruktif.',
          'Guru menguatkan kesimpulan esensial dan mengaitkannya kembali dengan dimensi bernalar kritis dan integritas diri.',
        ],
        aktivitasSiswa: [
          'Perwakilan kelompok mempresentasikan karya secara bergilir selama 3 menit.',
          'Murid mengisi instrumen refleksi diri mengenai apa yang dirasakan, dipelajari, dan tantangan yang berhasil diatasi.',
        ],
      },
      kegiatanKontekstual:
        'Studi kasus nyata mengenai fenomena tugas esai yang digenerate oleh AI tanpa proses telaah kritis, dampaknya terhadap kemampuan problem solving jangka panjang murid, serta solusi alternatif berupa verifikasi multi-sumber.',
    },
    kegiatanPenutup: {
      durasi: '15 Menit',
      aktivitasGuru: [
        'Guru bersama murid menyimpulkan intisari pembelajaran hari ini secara interaktif.',
        'Guru memberikan umpan balik positif atas dinamika kelas yang berkesadaran, bermakna, dan menggembirakan.',
        'Guru memberikan tindak lanjut pengamatan mandiri di rumah dan menutup pembelajaran dengan doa serta salam.',
      ],
      aktivitasSiswa: [
        'Murid menyampaikan simpulan bermakna dari pengalaman belajar yang telah dialami.',
        'Murid mengumpulkan kartu refleksi tiket keluar (Exit Ticket).',
        'Murid berdoa bersama dan merapikan kembali ruang belajar.',
      ],
      refleksiTindakLanjut:
        'Mengisi jurnal refleksi mingguan di LMS sekolah serta menguji coba 1 etika pemanfaatan teknologi saat menyelesaikan proyek mata pelajaran lain.',
    },
    mediaSumberBelajar: {
      mediaAlat: [
        'Laptop / Proyektor multimedia',
        'Gawai peserta didik (smartphone / tablet)',
        'Papan tulis interaktif / Plano kertas kerja kelompok',
        'Spidol aneka warna dan sticky notes',
      ],
      sumberBelajar: [
        'Buku Teks Utama Informatika Fase E Kemendikbudristek',
        'Modul Literasi Digital & Etika Kecerdasan Artifisial UNESCO / Kemkominfo',
        'Artikel Studi Kasus Etika AI dari portal edukasi terpercaya',
      ],
      alokasiWaktuDetail:
        'Total 90 Menit: Pendahuluan (15 mnt), Eksplorasi Memahami (20 mnt), Aplikasi Berkelompok (25 mnt), Refleksi & Berbagi (15 mnt), Penutup (15 mnt).',
    },
  },
  asesmenDanLampiran: {
    asesmenAwal:
      'Kuis diagnostik 3 pertanyaan cepat melalui polling digital untuk memetakan pemahaman awal murid terkait berpikir komputasional dan pengalaman memakai AI.',
    asesmenFormatif:
      'Penilaian kinerja proses diskusi kelompok menggunakan rubrik analitik 4 skala (Aspek: Partisipasi, Bernalar Kritis, Kerjasama Tim, dan Kualitas Solusi Etis).',
    asesmenSumatif:
      'Penilaian produk "Piagam Panduan Etika AI Sekolah" dan jurnal refleksi personal di akhir fase pembelajaran.',
    lembarKerjaRingkas:
      'LKPD Eksploratif: Berisi tabel analisis skenario kasus, kotak dekomposisi masalah, template perumusan prompt etis, dan panduan cek validitas output.',
    bahanBacaanGuruSiswa:
      'Ringkasan materi "4 Pilar Computational Thinking dan Prinsip Human-Centered AI dalam Pendidikan Modern".',
    glosarium: [
      { istilah: 'Deep Learning (Pembelajaran Mendalam)', definisi: 'Pendekatan pedagogis yang menekankan pemahaman konsep secara mendalam, bermakna, berkesadaran, dan menyenangkan untuk diterapkan dalam pemecahan masalah kehidupan nyata.' },
      { istilah: 'Berpikir Komputasional', definisi: 'Metode berpikir terstruktur untuk memformulasikan masalah dan merancang solusinya sehingga dapat dieksekusi secara efektif oleh manusia maupun komputer.' },
      { istilah: 'Mindful Learning', definisi: 'Kondisi kesadaran penuh saat belajar, hadir secara mental, fokus, serta menyadari tujuan dan proses belajarnya.' },
      { istilah: 'Prompt Engineering', definisi: 'Keahlian merumuskan instruksi terstruktur dan kontekstual kepada model AI guna menghasilkan respon yang akurat dan relevan.' },
    ],
  },
  meta: {
    kotaPenyusunan: 'Jakarta',
    tanggalPenyusunan: '15 Juli 2024',
  },
};

export const PRESET_OPTIONS = [
  {
    id: 'informatika-sma',
    label: 'Informatika SMA (Fase E) - Berpikir Komputasional & AI',
    mataPelajaran: 'Informatika',
    fase: 'Fase E',
    kelas: 'Kelas X',
    topikMateri: 'Penerapan Berpikir Komputasional & Etika Kecerdasan Artifisial (AI) dalam Kehidupan Sehari-hari',
    alokasiWaktu: '2 JP (2 x 45 menit)',
    fokus: 'Problem-Based Learning, Bernalar Kritis & Etika Digital',
    data: TEMPLATE_CONTOH_1,
  },
  {
    id: 'ipas-sd',
    label: 'IPAS SD (Fase C) - Energi Terbarukan & Lingkungan',
    mataPelajaran: 'Ilmu Pengetahuan Alam dan Sosial (IPAS)',
    fase: 'Fase C',
    kelas: 'Kelas V',
    topikMateri: 'Menjelajahi Energi Terbarukan Ramah Lingkungan di Sekitar Kita',
    alokasiWaktu: '3 JP (3 x 35 menit)',
    fokus: 'Project-Based Learning, Kreatif & Bergotong Royong',
    data: {
      ...TEMPLATE_CONTOH_1,
      identitas: {
        ...TEMPLATE_CONTOH_1.identitas,
        namaSekolah: 'SD Negeri Nusantara Ceria',
        mataPelajaran: 'Ilmu Pengetahuan Alam dan Sosial (IPAS)',
        fase: 'Fase C',
        kelas: 'Kelas V (Lima)',
        alokasiWaktu: '3 JP (3 x 35 menit)',
        topikMateri: 'Menjelajahi Energi Terbarukan Ramah Lingkungan di Sekitar Kita',
      },
      identifikasi: {
        ...TEMPLATE_CONTOH_1.identifikasi,
        karakteristikPesertaDidik: 'Peserta didik usia 10-11 tahun memiliki rasa ingin tahu tinggi terhadap fenomena alam, menyukai kegiatan observasi visual dan eksperimen langsung, serta membutuhkan pengalaman belajar kinestetik dan kolaboratif.',
        materiEsensialRelevansi: 'Bentuk-bentuk energi terbarukan (matahari, angin, air) dan pentingnya menghemat energi fosil untuk menjaga bumi.',
        dimensiProfilLulusan: [
          'Beriman, Bertakwa kepada Tuhan YME dan Berakhlak Mulia (akhlak kepada alam)',
          'Bergotong Royong (bekerja sama dalam proyek mini sains)',
          'Bernalar Kritis (mengidentifikasi pemborosan energi di rumah dan sekolah)',
        ],
        capaianPembelajaran: 'Peserta didik memahami konsep kekekalan energi, ragam sumber energi terbarukan, serta mampu merancang tindakan nyata penghematan energi di lingkungan terdekat.',
        tujuanPembelajaran: [
          'Peserta didik mampu mengidentifikasi minimal 3 sumber energi terbarukan di lingkungan sekitar melalui pengamatan terpandu.',
          'Peserta didik mampu merancang model sederhana kincir angin/tenaga surya mini secara kreatif.',
          'Peserta didik mampu merefleksikan kebiasaan konsumsi energi harian dan merumuskan aksi nyata hemat energi.',
        ],
      },
    },
  },
  {
    id: 'ipa-smp',
    label: 'IPA SMP (Fase D) - Ekosistem & Solusi Krisis Lingkungan',
    mataPelajaran: 'Ilmu Pengetahuan Alam (IPA)',
    fase: 'Fase D',
    kelas: 'Kelas VIII',
    topikMateri: 'Keseimbangan Ekosistem dan Solusi Aksi Iklim Berkelanjutan',
    alokasiWaktu: '2 JP (2 x 40 menit)',
    fokus: 'Inquiry-Based Learning, Bernalar Kritis & Peduli Lingkungan',
    data: {
      ...TEMPLATE_CONTOH_1,
      identitas: {
        ...TEMPLATE_CONTOH_1.identitas,
        namaSekolah: 'SMP Negeri 2 Harapan Bangsa',
        mataPelajaran: 'Ilmu Pengetahuan Alam (IPA)',
        fase: 'Fase D',
        kelas: 'Kelas VIII (Delapan)',
        alokasiWaktu: '2 JP (2 x 40 menit)',
        topikMateri: 'Keseimbangan Ekosistem dan Solusi Aksi Iklim Berkelanjutan',
      },
      identifikasi: {
        ...TEMPLATE_CONTOH_1.identifikasi,
        karakteristikPesertaDidik: 'Peserta didik fase D berada pada masa transisi remaja awal, memiliki kepedulian terhadap isu lingkungan aktual (perubahan iklim, sampah plastik), dan aktif berdiskusi bila dikaitkan dengan fenomena lokal.',
        materiEsensialRelevansi: 'Interaksi antar komponen ekosistem, rantai makanan, dan dampak aktivitas manusia terhadap keanekaragaman hayati.',
        capaianPembelajaran: 'Peserta didik mampu mengidentifikasi interaksi makhluk hidup dan lingkungannya serta merancang solusi atas permasalahan lingkungan hidup di sekitarnya.',
      },
    },
  },
  {
    id: 'matematika-sma',
    label: 'Matematika SMA (Fase F) - Analisis Data & Peluang',
    mataPelajaran: 'Matematika',
    fase: 'Fase F',
    kelas: 'Kelas XI',
    topikMateri: 'Analisis Data Nyata, Ukuran Pemusatan, dan Pengambilan Keputusan Berbasis Peluang',
    alokasiWaktu: '2 JP (2 x 45 menit)',
    fokus: 'Data-Driven Problem Solving, Bernalar Kritis & Kolaboratif',
    data: {
      ...TEMPLATE_CONTOH_1,
      identitas: {
        ...TEMPLATE_CONTOH_1.identitas,
        namaSekolah: 'SMA Bina Cendekia',
        mataPelajaran: 'Matematika',
        fase: 'Fase F',
        kelas: 'Kelas XI (Sebelas)',
        alokasiWaktu: '2 JP (2 x 45 menit)',
        topikMateri: 'Analisis Data Nyata, Ukuran Pemusatan, dan Pengambilan Keputusan Berbasis Peluang',
      },
      identifikasi: {
        ...TEMPLATE_CONTOH_1.identifikasi,
        materiEsensialRelevansi: 'Mean, median, modus, sebaran data, dan interpretasi grafik data riil (misal tren ekonomi, kesehatan masyarakat).',
      },
    },
  },
  {
    id: 'bahasa-indonesia-smp',
    label: 'Bahasa Indonesia SMP (Fase D) - Teks Argumentasi Kritis',
    mataPelajaran: 'Bahasa Indonesia',
    fase: 'Fase D',
    kelas: 'Kelas IX',
    topikMateri: 'Menyusun Teks Argumentasi Kritis Berbasis Data dan Fakta',
    alokasiWaktu: '2 JP (2 x 40 menit)',
    fokus: 'Literasi Kritis, Komunikasi Efektif & Berkesadaran',
    data: {
      ...TEMPLATE_CONTOH_1,
      identitas: {
        ...TEMPLATE_CONTOH_1.identitas,
        namaSekolah: 'SMP Bintang Gemilang',
        mataPelajaran: 'Bahasa Indonesia',
        fase: 'Fase D',
        kelas: 'Kelas IX (Sembilan)',
        alokasiWaktu: '2 JP (2 x 40 menit)',
        topikMateri: 'Menyusun Teks Argumentasi Kritis Berbasis Data dan Fakta',
      },
      identifikasi: {
        ...TEMPLATE_CONTOH_1.identifikasi,
        materiEsensialRelevansi: 'Struktur teks argumentasi (tesis, argumen berdata, penegasan ulang) dan kaidah kebahasaan persuasif objektif.',
      },
    },
  },
];

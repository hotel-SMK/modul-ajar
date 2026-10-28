export interface ModulIdentitas {
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
}

export interface ModulIdentifikasi {
  karakteristikPesertaDidik: string;
  materiEsensialRelevansi: string;
  dimensiProfilLulusan: string[];
  capaianPembelajaran: string;
  tujuanPembelajaran: string[];
  kriteriaKetercapaian: string[];
}

export interface PrinsipPrinsipDL {
  berkesadaran: string; // Mindful
  bermakna: string;     // Meaningful
  menggembirakan: string; // Joyful
}

export interface PengalamanBelajarDL {
  memahami: string;    // Understanding
  mengaplikasi: string; // Applying
  merefleksi: string;   // Reflecting
}

export interface DesainDeepLearning {
  praktikPedagogis: string;
  kemitraanPembelajaran: string;
  lingkunganPembelajaran: string;
  pemanfaatanTeknologiDigital: string;
  prinsipPrinsip: PrinsipPrinsipDL;
  pengalamanBelajar: PengalamanBelajarDL;
}

export interface AktivitasSesi {
  aktivitasGuru: string[];
  aktivitasSiswa: string[];
}

export interface KegiatanPendahuluan extends AktivitasSesi {
  durasi: string;
  pertanyaanPemantik: string[];
}

export interface KegiatanInti {
  durasi: string;
  tahapMemahami: AktivitasSesi;
  tahapMengaplikasi: AktivitasSesi;
  tahapMerefleksi: AktivitasSesi;
  kegiatanKontekstual: string;
}

export interface KegiatanPenutup extends AktivitasSesi {
  durasi: string;
  refleksiTindakLanjut: string;
}

export interface MediaSumberBelajar {
  mediaAlat: string[];
  sumberBelajar: string[];
  alokasiWaktuDetail: string;
}

export interface LangkahPembelajaran {
  kegiatanPendahuluan: KegiatanPendahuluan;
  kegiatanInti: KegiatanInti;
  kegiatanPenutup: KegiatanPenutup;
  mediaSumberBelajar: MediaSumberBelajar;
}

export interface GlosariumItem {
  istilah: string;
  definisi: string;
}

export interface AsesmenDanLampiran {
  asesmenAwal: string;
  asesmenFormatif: string;
  asesmenSumatif: string;
  lembarKerjaRingkas: string;
  bahanBacaanGuruSiswa: string;
  glosarium: GlosariumItem[];
}

export interface ModulAjarData {
  identitas: ModulIdentitas;
  identifikasi: ModulIdentifikasi;
  desainDeepLearning: DesainDeepLearning;
  langkahPembelajaran: LangkahPembelajaran;
  asesmenDanLampiran?: AsesmenDanLampiran;
  meta?: {
    kotaPenyusunan: string;
    tanggalPenyusunan: string;
  };
}

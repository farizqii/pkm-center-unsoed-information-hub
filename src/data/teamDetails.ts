export interface DetailCard {
  title: string;
  badge?: string;
  description: string;
  points?: string[];
  image?: string;
}

export interface DivisionContent {
  division: string;
  name: string;
  tentangKami: DetailCard[];
  programKerja: DetailCard[];
  lihatTim: DetailCard[];
}

const createPlaceholderCards = (prefix: string): DetailCard[] => [
  {
    title: `${prefix} 1`,
    badge: "Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    points: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
  },
  {
    title: `${prefix} 2`,
    badge: "Placeholder",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    points: [
      "Duis aute irure dolor in reprehenderit",
      "Voluptate velit esse cillum dolore",
    ],
  },
  {
    title: `${prefix} 3`,
    badge: "Placeholder",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  },
];

const createPlaceholderTeam = (
  images: { name: string; role: string; image?: string }[],
): DetailCard[] =>
  images.map((item, idx) => ({
    title: item.name || `Nama Anggota ${idx + 1}`,
    badge: item.role || "Role Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: item.image,
  }));

export const divisionDetails: Record<string, DivisionContent> = {
  BPH: {
    division: "BPH",
    name: "Badan Pengurus Harian",
    tentangKami: createPlaceholderCards("Tentang BPH"),
    programKerja: createPlaceholderCards("Program Kerja BPH"),
    lihatTim: createPlaceholderTeam([
      {
        name: "Azzahra Nur Annisa",
        role: "Ketua Umum",
        image: "/team/Azzahra-Ketua.png",
      },
      {
        name: "Izuddin Najib Fikri",
        role: "Wakil Ketua",
        image: "/team/Fikri-Wakil.png",
      },
      {
        name: "Fitria Oktari Nur Hidayah",
        role: "Sekretaris",
        image: "/team/Fitria-Sekretaris.png",
      },
      {
        name: "Ghina Aulia Putri",
        role: "Bendahara",
        image: "/team/Ghina-Bendahara.png",
      },
    ]),
  },

  PSDM: {
    division: "PSDM",
    name: "Pengembangan Sumber Daya Manusia",
    tentangKami: createPlaceholderCards("Tentang PSDM"),
    programKerja: createPlaceholderCards("Program Kerja PSDM"),
    lihatTim: createPlaceholderTeam([
      {
        name: "Bela Natalia",
        role: "Kepala Departemen",
        image: "/team/Natalia-PSDM.png",
      },
      { name: "Anggota Tim 1", role: "Staff PSDM" },
      { name: "Anggota Tim 2", role: "Staff PSDM" },
    ]),
  },

  PPP: {
    division: "PPP",
    name: "Penelitian, Pengembangan & Pelatihan",
    tentangKami: createPlaceholderCards("Tentang PPP"),
    programKerja: createPlaceholderCards("Program Kerja PPP"),
    lihatTim: createPlaceholderTeam([
      {
        name: "M. Jihaduddin Lathif",
        role: "Kepala Departemen",
        image: "/team/Jihaduddin-PPP.png",
      },
      { name: "Anggota Tim 1", role: "Staff PPP" },
      { name: "Anggota Tim 2", role: "Staff PPP" },
    ]),
  },

  KIM: {
    division: "KIM",
    name: "Kajian Ilmiah & Mutu",
    tentangKami: createPlaceholderCards("Tentang KIM"),
    programKerja: createPlaceholderCards("Program Kerja KIM"),
    lihatTim: createPlaceholderTeam([
      {
        name: "Zahra Raihanna",
        role: "Kepala Departemen",
        image: "/team/Zahra-KIM.png",
      },
      { name: "Anggota Tim 1", role: "Staff KIM" },
      { name: "Anggota Tim 2", role: "Staff KIM" },
    ]),
  },

  Personalia: {
    division: "Personalia",
    name: "Personalia",
    tentangKami: createPlaceholderCards("Tentang Personalia"),
    programKerja: createPlaceholderCards("Program Kerja Personalia"),
    lihatTim: createPlaceholderTeam([
      {
        name: "Naiya Amelia",
        role: "Kepala Departemen",
        image: "/team/Naiya-Personalia.png",
      },
      { name: "Anggota Tim 1", role: "Staff Personalia" },
      { name: "Anggota Tim 2", role: "Staff Personalia" },
    ]),
  },

  "Media & Relasi": {
    division: "Media & Relasi",
    name: "Media & Relasi",
    tentangKami: createPlaceholderCards("Tentang Media & Relasi"),
    programKerja: createPlaceholderCards("Program Kerja Media & Relasi"),
    lihatTim: createPlaceholderTeam([
      {
        name: "Aurick Fachri Al Fajr",
        role: "Kepala Departemen",
        image: "/team/Aurick-Medsi.png",
      },
      { name: "Anggota Tim 1", role: "Staff Media & Relasi" },
      { name: "Anggota Tim 2", role: "Staff Media & Relasi" },
    ]),
  },
};

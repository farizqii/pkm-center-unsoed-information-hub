export interface Member {
  id: string;
  role: string;
  name: string;
  division: string;
  image: string;
  blurHash: string;
}

export interface DepartmentItem {
  id: string;
  name: string;
  fullName: string;
  leader: string;
  image: string;
  blurHash: string;
}

// Badan Pengurus Harian (BPH)
export const bphMembers: Member[] = [
  {
    id: "ketua-umum",
    role: "Ketua Umum",
    name: "Azzahra Nur Annisa",
    division: "Ketua Umum",
    image: "/team/Azzahra-Ketua.png",
    blurHash: "LD8Dz;n%0KW.IAa#x[j=babHRjoM",
  },
  {
    id: "wakil-ketua-umum",
    role: "Wakil Ketua",
    name: "Izuddin Najib Fikri",
    division: "Wakil Ketua",
    image: "/team/Fikri-Wakil.png",
    blurHash: "L35EKhIp0yrr;dS$9u%1InWB-pR+",
  },
  {
    id: "sekretaris",
    role: "Sekretaris",
    name: "Fitria Oktari Nur Hidayah",
    division: "Sekretaris",
    image: "/team/Fitria-Sekretaris.png",
    blurHash: "LH97O+Rj0Js/9Ft7%NR*RPRjx[s/",
  },

  {
    id: "bendahara",
    role: "Bendahara",
    name: "Ghina Aulia Putri",
    division: "Bendahara",
    image: "/team/Ghina-Bendahara.png",
    blurHash: "LC7T?4of0LRjxCj=I;a#D%ax%Nog",
  },
];

// Departemen
export const departments: DepartmentItem[] = [
  {
    id: "psdm",
    name: "PSDM",
    fullName: "Pengembangan Sumber Daya Manusia",
    leader: "Bela Natalia",
    image: "/team/Natalia-PSDM.png",
    blurHash: "L97dg|^3E10K9YE1W:%MIARPtRxv",
  },
  {
    id: "ppp",
    name: "PPP",
    fullName: "Penelitian, Pengembangan & Pelatihan",
    leader: "M. Jihaduddin Lathif",
    image: "/team/Jihaduddin-PPP.png",
    blurHash: "L87AlB-V0f9a]jxa9tELI/W:w]jY",
  },
  {
    id: "kim",
    name: "KIM",
    fullName: "Kajian Ilmiah & Mutu",
    leader: "Zahra Raihanna",
    image: "/team/Zahra-KIM.png",
    blurHash: "LE7-A[s/0KM_M_ayt8fkIAWB%gt7",
  },
  {
    id: "personalia",
    name: "Personalia",
    fullName: "Personalia",
    leader: "Naiya Amelia",
    image: "/team/Naiya-Personalia.png",
    blurHash: "L35EW]af0fIU$jxaI/I/9Ft6%2o|",
  },
  {
    id: "media-relasi",
    name: "Media & Relasi",
    fullName: "Media & Relasi",
    leader: "Aurick Fachri Al Fajr",
    image: "/team/Aurick-Medsi.png",
    blurHash: "L55qhasm0fNw]js.9tR+I;j[sle.",
  },
];

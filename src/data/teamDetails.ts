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

export const divisionDetails: Record<string, DivisionContent> = {
  BPH: {
    division: "BPH",
    name: "Badan Pengurus Harian",
    tentangKami: [
      {
        title: "About Ketua & Wakil Ketua",
        badge: "Tentang Kami",
        description:
          "Ketua Umum dan Wakil Ketua memimpin Satuan Tugas PKM Center Unsoed selama satu kepengurusan. Keduanya menetapkan arah gerak organisasi, mengoordinasikan seluruh departemen, dan memantau pelaksanaan program kerja dari awal sampai akhir periode.",
      },
      {
        title: "About Sekretaris",
        badge: "Tentang Kami",
        description:
          "Departemen Sekretaris bertanggung jawab pada kegiatan administrasi PKM Center seperti pengadaan proposal, LPJ, surat masuk & keluar, notulensi.",
      },
      {
        title: "About Bendahara",
        badge: "Tentang Kami",
        description:
          "Bendahara merupakan departemen yang mewadahi keuangan PKM Center termasuk regulasi dan transparansinya, terutama penggunaannya di setiap program kerja departemen. Bendahara juga mewadahi forum bendahara PKM Center guna menjaga kelancaran dan transparansi aktivitas keuangan di lingkup internal organisasi.",
      },
    ],
    programKerja: [
      {
        title: "Musyawarah Kerja",
        badge: "Proker 1",
        description:
          "Musyawarah kerja merupakan forum penyampaian program kerja yang telah dirancang oleh masing-masing departemen. Forum musyawarah kerja diikuti oleh seluruh pengurus Satuan Tugas PKM Center dan menggunakan mekanisme pengkritisan untuk setiap departemen.",
        points: [
          "Forum ini ditujukan agar tersampaikannya informasi program kerja dan arah gerak Satuan Tugas PKM Center Unsoed selama satu kepengurusan.",
        ],
      },
      {
        title: "Identitas Pengurus",
        badge: "Proker 2",
        description:
          "Program kerja berupa pembuatan lanyard pengurus PKM Center Unsoed. Dilaksanakan di awal kepengurusan berbasis data dan informasi dari Database program kerja Departemen Personalia.",
        points: [
          "Menyediakan identitas visual bagi pengurus yang dapat meningkatkan rasa kebersamaan, kekompakan, dan identitas organisasi dalam pelaksanaan kegiatan.",
        ],
      },
      {
        title: "Sistem Administrasi",
        badge: "Proker 3",
        description:
          "Sistem administrasi PKM Center merupakan program kerja yang bertujuan untuk mengatur dan mengelola berbagai aspek administrasi PKM Center.",
        points: [
          "Sistem administrasi PKM Center bertujuan untuk melakukan pengelolaan administrasi dari PKM Center secara tertib dan terkelola dengan baik.",
        ],
      },
      {
        title: "Forum Sekretaris",
        badge: "Proker 4",
        description:
          "Forum sekretaris adalah suatu forum yang ditujukan untuk dihadiri oleh sekretaris dari tiap departemen guna membahas permasalahan administrasi ataupun hal-hal yang dapat didiskusikan terkait kesekretariatan.",
        points: [
          "Menjadi salah satu wadah dalam menjalin komunikasi antara sekretaris umum dengan sekretaris tiap departemen.",
          "Sebagai salah satu monitoring dalam meningkatkan kinerja terkait kondisi kesekretariatan tiap departemen.",
        ],
      },
      {
        title: "Gallery Foto",
        badge: "Proker 5",
        description:
          "Gallery Foto adalah program kerja yang ditujukan untuk mendokumentasikan dan menampilkan foto para pengurus sebagai bentuk pengenalan dan dokumentasi kepengurusan. Foto yang ditampilkan mencakup pengurus dari setiap departemen atau bidang sehingga dapat memberikan gambaran mengenai susunan dan anggota kepengurusan dalam satu periode.",
        points: [
          "Mendokumentasikan foto seluruh pengurus dalam satu periode kepengurusan.",
          "Memperkenalkan identitas pengurus dari setiap departemen atau bidang.",
          "Memudahkan anggota dalam mengenali pengurus dan susunan kepengurusan.",
        ],
      },
      {
        title: "Sistem Keuangan PKM Center",
        badge: "Proker 6",
        description:
          "Sistem Keuangan PKM Center merupakan program kerja yang dirancang untuk mengelola seluruh aspek keuangan dari Program Kreativitas Mahasiswa (PKM). Sistem ini mencakup pengelolaan anggaran, pencatatan transaksi, pembuatan laporan keuangan, dan monitoring penggunaan dana.",
        points: [
          "Meningkatkan Transparansi Keuangan",
          "Menyediakan akses terbuka kepada pengelola PKM Center mengenai penggunaan dana sehingga semua pihak dapat melihat bagaimana dana digunakan.",
          "Mempermudah Pengelolaan Anggaran seperti memfasilitasi perencanaan anggaran, alokasi dana, dan pemantauan real-time terhadap penggunaan anggaran.",
        ],
      },
      {
        title: "Forum Bendahara PKM Center",
        badge: "Proker 7",
        description:
          "Forum Bendahara PKM Center adalah sebuah wadah diskusi dan koordinasi bagi para bendahara departemen dari pengelola PKM Center.",
        points: [
          "memperkuat kemampuan manajemen keuangan dan meningkatkan keterampilan bendahara dalam mengelola dana. Forum ini juga berfungsi sebagai sarana untuk menyampaikan informasi terbaru terkait kebijakan keuangan, panduan pengelolaan dana, dan pelaporan keuangan dari masing-masing departemen PKM Center.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "Azzahra Nur Annisa",
        description: "Ketua Umum",
        image: "/team/Azzahra-Ketua.png",
      },
      {
        title: "Izuddin Najib Fikri",
        description: "Wakil Ketua",
        image: "/team/Fikri-Wakil.png",
      },
      {
        title: "Fitria Oktari Nur Hidayah",
        description: "Sekretaris",
        image: "/team/Fitria-Sekretaris.png",
      },
      {
        title: "Ghina Aulia Putri",
        description: "Bendahara",
        image: "/team/Ghina-Bendahara.png",
      },
      {
        title: "Vivi Khoirun Nisa",
        description: "Bendahara 2",
      },
      {
        title: "Syifa Salsabila",
        description: "Bendahara 3",
      },
      {
        title: "Dea Andini Pibriyanti",
        description: "Sekretaris 2",
      },
      {
        title: "Khansa Naura Hidayah",
        description: "Sekretaris 3",
      },
    ],
  },

  PSDM: {
    division: "PSDM",
    name: "Pengembangan Sumber Daya Manusia",
    tentangKami: [
      {
        title: "About PSDM",
        badge: "Tentang Kami",
        description:
          "Departemen PSDM merupakan departemen yang berfokus pada pengembangan kapasitas, kompetensi mahasiswa. Program yang dilaksanakan bergerak di bidang pembinaan serta pengembangan guna memunculkan potensi-potensi terbaik mahasiswa dalam hal PKM.",
      },
    ],
    programKerja: [
      {
        title: "Sahabat Program Kreativitas Mahasiswa (PKM)",
        badge: "Proker 1",
        description:
          "Sahabat PKM merupakan program kerja yang berkolaborasi dengan UKM Penalaran dan Riset Unsoed yang bertujuan untuk memperkenalkan PKM kepada mahasiswa Universitas Jenderal Soedirman terkhusus kepada mahasiswa baru Universitas Jenderal Soedirman.",
        points: [
          "Memperkenalkan Program Kreativitas Mahasiswa",
          "Meningkatkan minat mahasiswa baru Universitas Jenderal Soedirman terhadap PKM",
          "Memperkenalkan alur pendaftaran PKM di Universitas Jenderal Soedirman",
          "Memberikan gambaran umum PIMNAS",
        ],
      },
      {
        title: "PKM Rektor Cup",
        badge: "Proker 2",
        description:
          "PKM Rektor Cup merupakan salah satu event kompetisi PKM Universitas Jenderal Soedirman yang diselenggarakan oleh PKM Center Unsoed bersama seluruh elemen mahasiswa. Mahasiswa Universitas Jenderal Soedirman mengirimkan Draft proposal PKM berdasarkan ide mahasiswa yang diolah berdasarkan kreativitas, data yang dianalisis secara runtut dan sistematis. Hasil karya ini diharapkan menjadi dasar proposal PKM yang dapat diajukan pada kompetisi PKM 2026.",
        points: [
          "Menjadi sarana untuk mengasah kreativitas, mengasah kemampuan menulis, menyampaikan, serta menuangkan ide kreatif dan menambah pengalaman berharga mahasiswa Universitas Jenderal Soedirman.",
          "Menjadi sarana untuk mengenal PKM dan mengakomodir hasrat intelektual mahasiswa Universitas Jenderal Soedirman.",
          "Meningkatkan sensitivitas dan mengasah pikiran kritis mahasiswa dalam mengenali dan memecahkan permasalahan di sekitarnya.",
          "Meningkatkan motivasi kepada mahasiswa untuk meraih prestasi yang tinggi.",
          "Meningkatkan partisipasi mahasiswa Unsoed dalam kegiatan PKM dan mempersiapkan mahasiswa Unsoed menuju PIMNAS 2026.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "Bela Natalia",
        description: "Kepala Departemen",
        image: "/team/Natalia-PSDM.png",
      },
      { title: "Azzumi Khalifa Hasan", description: "Staff PSDM" },
      { title: "Nimas Qissya Abhiesa Al Maulida", description: "Staff PSDM" },
      { title: "Ratna Scerfila", description: "Staff PSDM" },
      { title: "Aulia Anjani", description: "Staff PSDM" },
      { title: "Exakta Latifah", description: "Staff PSDM" },
      { title: "Suci Aprilyani", description: "Staff PSDM" },
    ],
  },

  PPP: {
    division: "PPP",
    name: "Penelitian, Pengembangan & Pelatihan",
    tentangKami: [
      {
        title: "About PPP",
        badge: "Tentang Kami",
        description:
          "Departemen PPP merupakan departemen yang bertugas dalam membentuk membentuk Satuan Tugas dan Pelaksana Teknis PKM yang berperan dalam administrasi, seleksi, hingga pengunggahan",
      },
    ],
    programKerja: [
      {
        title: "PKM 2027",
        badge: "Proker 1",
        description:
          "PKM 2027 merupakan serangkaian kegiatan yang dilaksanakan dalam rangka mempersiapkan mahasiswa Universitas Jenderal Soedirman untuk mengikuti Program Kreativitas Mahasiswa (PKM) yang diadakan oleh Kemendiktisainstek melalui Diktisainstek pada tahun 2027.",
        points: [
          "Mengoordinasikan teknis seleksi internal proposal PKM mahasiswa Universitas Jenderal Soedirman yang dilakukan oleh tim reviewer dosen.",
          "Mengoordinasikan teknis pembuatan akun dan pengunggahan proposal di website Simbelmawa Kemdikti.",
          "Melakukan review administrasi proposal PKM yang telah mendapatkan akun Simbelmawa Kemdikti.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "M. Jihaduddin Lathif",
        description: "Kepala Departemen",
        image: "/team/Jihaduddin-PPP.png",
      },
      { title: "Aziz Maulana", description: "Staff PPP" },
      { title: "Zea Gladys", description: "Staff PPP" },
      { title: "Neza Aulia Rahmah", description: "Staff PPP" },
      { title: "Vinkania Layza Gusti Azzahra", description: "Staff PPP" },
      { title: "Tsuwaibah Tasyaningtyas", description: "Staff PPP" },
      { title: "Maura Maulida Hanun", description: "Staff PPP" },
    ],
  },

  KIM: {
    division: "KIM",
    name: "Kajian Ilmiah & Mutu",
    tentangKami: [
      {
        title: "About KIM",
        badge: "Tentang Kami",
        description:
          "Departemen Kreativitas Ilmiah Mahasiswa memiliki tanggung jawab sebagai fasilitator mahasiswa dan peserta PKM Pendanaan Universitas Jenderal Soedirman. Tanggung jawab meliputi penyediaan fasilitas peserta selama BIMTEK, Monitoring dan Evaluasi, Pelatihan HKI, Penyerahan laporan PKM, dan pendampingan kegiatan PIMNAS. Departemen KIM juga berperan menjadi jembatan informasi dari Belmawa dan dosen fasilitator ke mahasiswa peserta PKM; serta melakukan pengawasan dan monitoring TIM PKM UNSOED selama kegiatan berjalan.",
      },
    ],
    programKerja: [
      {
        title: "Monitoring dan Evaluasi Internal 1",
        badge: "Proker 1",
        description:
          "Monitoring dan evaluasi kemajuan kegiatan yang dilakukan oleh tim PKM Pendanaan Unsoed bersama dosen fasilitator.",
        points: [
          "Mengukur sejauh mana program yang telah dilakukan sekaligus menjadi simulasi sebelum monev eksternal dari Direktorat Jenderal Pembelajaran dan Kemahasiswaan (Belmawa) di bawah Kementerian Pendidikan Tinggi, Sains, dan Teknologi.",
        ],
      },
      {
        title: "Pendampingan Pelatihan HAKI",
        badge: "Proker 2",
        description:
          "Kegiatan pelatihan mengenai Hak Kekayaan Intelektual (HAKI) yang bertujuan memberikan pemahaman kepada tim PKM pendanaan Unsoed mengenai jenis, manfaat, prosedur, dan pentingnya perlindungan karya atau hasil inovasi.",
        points: [
          "Meningkatkan pemahaman mengenai HKI, mendorong tim PKM pendanaan Unsoed untuk melindungi dan mengembangkan hasil karya atau inovasinya.",
        ],
      },
      {
        title: "Monitoring dan Evaluasi Internal 2",
        badge: "Proker 3",
        description:
          "Monitoring dan evaluasi kemajuan tim PKM UNSOED bersama dosen fasilitator.",
        points: [
          "Mengukur sejauh mana program yang telah dilakukan sekaligus menjadi simulasi sebelum monev eksternal dari Direktorat Jenderal Pembelajaran dan Kemahasiswaan (Belmawa) di bawah Kementerian Pendidikan Tinggi, Sains, dan Teknologi.",
        ],
      },
      {
        title: "Pendampingan pembekalan dan pelatihan PKP2",
        badge: "Proker 4",
        description:
          "Pelatihan dan monitoring presentasi PKP2 secara internal dengan dosen fasilitator untuk menilai kesiapan dan memberikan masukkan sebelum pelaksanaan PKP2",
        points: ["Memonitoring dan membantu persiapan presentasi PKP2."],
      },
      {
        title: "Pendampingan pelaksanaan PKP2",
        badge: "Proker 5",
        description:
          "PKP2 merupakan evaluasi pelaksanaan PKM yang diselenggarakan oleh Direktorat Jenderal Pembelajaran dan Kemahasiswaan (Belmawa) di bawah Kementerian Pendidikan Tinggi, Sains, dan Teknologi.",
        points: [
          "Memaparkan hasil kemajuan kegiatan PKM disertai dengan upload laporan kemajuan pada Simbelmawa.",
        ],
      },
      {
        title: "Pendampingan PIMNAS",
        badge: "Proker 6",
        description:
          "PIMNAS merupakan puncak kegiatan ilmiah mahasiswa berskala nasional dan diselenggarakan di perguruan tinggi yang ditetapkan BPTI. PIMNAS sebagai forum pertemuan ilmiah dan komunikasi produk kreasi mahasiswa, diikuti oleh mahasiswa atau kelompok tim Program Kreativitas Mahasiswa (PKM). Kelompok mahasiswa dan dosen pembimbing yang hadir didampingi oleh satgas mahasiswa.",
        points: [
          "Satgas hadir untuk membantu persiapan sebelum maupun saat tim melaksanakan event PIMNAS.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "Zahra Raihanna",
        description: "Kepala Departemen",
        image: "/team/Zahra-KIM.png",
      },
      { title: "Sekar Wahyuningtyas", description: "Staff KIM" },
      { title: "Doni Nanda Saputra", description: "Staff KIM" },
      { title: "Rahma Nabilah", description: "Staff KIM" },
      { title: "Ani Alfahidah", description: "Staff KIM" },
      { title: "Lintangmoza Kirana Ananta", description: "Staff KIM" },
      { title: "Latifah Indah Hapsari", description: "Staff KIM" },
    ],
  },

  Personalia: {
    division: "Personalia",
    name: "Personalia",
    tentangKami: [
      {
        title: "About Personalia",
        badge: "Tentang Kami",
        description:
          "Departemen Personalia merupakan departemen yang bertugas dalam pengelolaan sumber daya pengurus internal PKM Center Unsoed dan menjaga hubungan baik antarpengurus PKM Center Unsoed 2026. Untuk mendukung hal tersebut, departemen personalia menjalankan program kerja seperti Upgrading untuk pengembangan kapasitas dan bonding, Staff of the Month dan Birthday Card sebagai bentuk apresiasi pengurus, Database Pengurus untuk penataan administrasi, serta Closing sebagai penutupan periode kepengurusan.",
      },
    ],
    programKerja: [
      {
        title: "Upgrading",
        badge: "Proker 1",
        description:
          "Menciptakan ruang bagi seluruh pengurus PKM Center untuk saling berinteraksi dan mengenal satu sama lain melalui kegiatan bersama sehingga dapat tercipta kepengurusan yang kompak dan solid.",
        points: [
          "Menciptakan kedekatan antar pengurus dan menciptakan koordinasi yang baik sehingga kinerja kepengurusan dapat meningkat.",
        ],
      },
      {
        title: "Upgrading 2",
        badge: "Proker 2",
        description:
          "Menciptakan ruang bagi seluruh pengurus PKM Center untuk saling berinteraksi dan mengenal satu sama lain melalui kegiatan bersama sehingga dapat tercipta kepengurusan yang kompak dan solid.",
        points: [
          "Menciptakan kedekatan antar pengurus dan menciptakan koordinasi yang baik sehingga kinerja kepengurusan dapat meningkat.",
        ],
      },
      {
        title: "Closing",
        badge: "Proker 3",
        description:
          "Menjadi kegiatan penutup rangkaian kepengurusan PKM Center 2026 sebagai bentuk apresiasi atas kontribusi seluruh pengurus selama satu periode. Kegiatan dilaksanakan melalui refleksi dan kebersamaan untuk mempererat hubungan antaranggota.",
        points: [
          "Menciptakan ruang bagi seluruh pengurus PKM Center untuk melakukan refleksi dan evaluasi bersama atas pelaksanaan kepengurusan selama satu periode sehingga dapat menjadi bahan perbaikan untuk kepengurusan selanjutnya.",
        ],
      },
      {
        title: "Database Pengurus",
        badge: "Proker 4",
        description:
          "Program kerja yang berfokus pada pengelolaan data pribadi seluruh pengurus PKM Center dengan cara mengumpulkan, menata dan menyimpan data dalam satu sistem yang terstruktur dan mudah diakses.",
        points: [
          "Mempermudah proses pengelolaan, pencarian dan penggunaan data pengurus PKM Center untuk mendukung kebutuhan administrasi.",
        ],
      },
      {
        title: "Staff of the Month",
        badge: "Proker 5",
        description:
          "Program kerja yang memberikan apresiasi kepada pengurus PKM Center yang memiliki kinerja terbaik setiap bulan melalui penilaian berdasarkan aspek kedisiplinan, tanggung jawab, kontribusi dan kerja sama yang baik.",
        points: [
          "Mendorong semangat dan motivasi setiap pengurus PKM Center melalui apresiasi penghargaan yang bersifat objektif dan menciptakan lingkungan kerja yang positif.",
        ],
      },
      {
        title: "Birthday Card",
        badge: "Proker 6",
        description:
          "Program kerja yang bertugas untuk membuat kartu ucapan ulang tahun kepada pengurus PKM Center sehingga dapat mewujudkan rasa kekeluargaan antar anggota. Ucapan berupa kartu digital yang berisi doa dan pesan positif.",
        points: [
          "Menciptakan rasa kebersamaan dan kepedulian antar pengurus PKM Center dengan memberikan apresiasi pada hari ulang tahun sehingga setiap pengurus merasa dihargai.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "Naiya Amelia",
        description: "Kepala Departemen",
        image: "/team/Naiya-Personalia.png",
      },
      { title: "Vigia Vika Maya Maharani", description: "Staff Personalia" },
      { title: "Alisya Rizki Firdausha", description: "Staff Personalia" },
      { title: "Selomita Anabela", description: "Staff Personalia" },
      { title: "Mutiara Ratri Devi", description: "Staff Personalia" },
      { title: "Putri Kayla Ramadani", description: "Staff Personalia" },
      { title: "Shaula Nautika Erdi Puteri", description: "Staff Personalia" },
    ],
  },

  "Media & Relasi": {
    division: "Media & Relasi",
    name: "Media & Relasi",
    tentangKami: [
      {
        title: "About Media & Relasi",
        badge: "Tentang Kami",
        description:
          "Departemen Media dan Relasi (MEDSI) adalah departemen yang menjadi garda terdepan komunikasi PKMCenter Unsoed. Departemen ini bertanggung jawab atas publikasi dan penyebaran informasi kegiatan, Program Kreativitas Mahasiswa kepada seluruh mahasiswa Unsoed melalui berbagai platform media. Di sisi lain, MEDSI juga membangun jejaring dan kerja sama dengan PKM Center atau lembaga sejenis di universitas lain sebagai bahan referensi dan pengembanganorganisasi.",
      },
    ],
    programKerja: [
      {
        title: "Pengelolaan Media Sosial",
        badge: "Proker 1",
        description:
          "Pengelolaan media sosial dalam rangka memberikan informasi terkait kegiatan yang diselenggarakan oleh PKM Center Unsoed, informasi terkait Program Kreativitas Mahasiswa, dan informasi lainnya yang berkaitan dengan keilmiahan.",
        points: [
          "Publikasi kegiatan-kegiatan yang akan diselenggarakan oleh PKM Center.",
          "Publikasi informasi Program Kreativitas Mahasiswa.",
          "Publikasi kegiatan dalam bentuk repost story Instagram terkait kegiatan yang sedang dilakukan oleh teman-teman Unsoed yang lolos pendanaan PKM Dikti.",
          "Laporan kegiatan/Live Report PKM Center, yaitu publikasi laporan kegiatan setelah kegiatan tersebut dilaksanakan.",
          "Jarkom internal yang ditujukan kepada seluruh mahasiswa Unsoed maupun seluruh UKM yang terdapat di Universitas Jenderal Soedirman.",
          "Kolaborasi dengan Departemen Personalia terkait Staff of The Month.",
        ],
      },
      {
        title: "Studi Banding",
        badge: "Proker 2",
        description:
          "Kegiatan kunjungan dan diskusi dengan PKM Center/lembaga sejenis di universitas lain yang dinilai lebih unggul dalam pengelolaan PKM, dengan tujuan menyerap referensi sistem kerja, strategi publikasi, dan pola pendampingan mahasiswa dalam PKM.",
        points: [
          "Bentuk kegiatan dapat berupa kunjungan langsung (offline), disesuaikan dengan kesepakatan pihak yang dituju.",
          "Hasil studi banding didokumentasikan dan dijadikan bahan evaluasi serta rekomendasi perbaikan sistem kerja PKM Center Unsoed.",
        ],
      },
    ],
    lihatTim: [
      {
        title: "Aurick Fachri Al Fajr",
        description: "Kepala Departemen",
        image: "/team/Aurick-Medsi.png",
      },
      { title: "Adyan Damar Farizqi", description: "Staff Media & Relasi" },
      { title: "Firda Putri Utami", description: "Staff Media & Relasi" },
      {
        title: "Amira Imtiyaz Naila Hanifah",
        description: "Staff Media & Relasi",
      },
      { title: "Bebi Nareswati", description: "Staff Media & Relasi" },
      { title: "Laelatul Hasanah", description: "Staff Media & Relasi" },
      { title: "Ananda Hasan Asyifa", description: "Staff Media & Relasi" },
    ],
  },
};

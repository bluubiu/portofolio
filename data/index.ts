export const navItems = [
  { name: "Beranda", link: "#home" },
  { name: "Tentang", link: "#about" },
  { name: "Proyek", link: "#projects" },
  { name: "Sertifikat", link: "#certificate" },
  { name: "Kontak", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Kolaborasi yang membuahkan hasil",
    description: "Saya percaya pada komunikasi yang terbuka dan iteratif dengan klien.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Kolaborasi tanpa hambatan di berbagai zona waktu",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack saya",
    description: "Saya terus berusaha untuk berkembang",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Didorong oleh rasa ingin tahu, digerakkan oleh kode",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Buat website yang sesuai dengan Anda",
    description: " ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Siap untuk menciptakan sesuatu yang luar biasa bersama?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MediUKS - Website Peminjaman Alat UKS",
    des: "MediUKS adalah aplikasi berbasis web untuk mengelola dan memfasilitasi peminjaman alat kesehatan (UKS) di SMKN 1 Kepanjen. Aplikasi ini dibuat untuk menggantikan metode pencatatan manual sebelumnya, dengan tujuan meningkatkan efisiensi, akurasi, dan aksesibilitas bagi siswa dan tim UKS.",
    img: "/management_peminjaman_uks.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mysql.svg", "/laravel.svg"],
    link: "https://github.com/bluubiu/Frontend-UKK.git",
  },
  {
    id: 2,
    title: "Tiga Warna - Website POS Penjualan Cat",
    des: "Tiga Warna adalah aplikasi berbasis web untuk mengelola dan memfasilitasi penjualan cat. Aplikasi ini dibuat untuk menggantikan metode pencatatan manual sebelumnya, dengan tujuan meningkatkan efisiensi, akurasi, dan aksesibilitas bagi pelanggan dan tim Tiga Warna.",
    img: "/management_system_printing.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/firebase.svg"],
    link: "https://github.com/bluubiu/trigara.git",
  },
  {
    id: 3,
    title: "ProLearn - Platform Pembelajaran Online",
    des: "Platform pembelajaran online modern dengan fokus pada pengalaman pengguna dan performa, dibangun dengan teknologi terbaru.",
    img: "/ProLearn.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/js.svg"],
  },
  {
    id: 4,
    title: "Surf Lesson - Website untuk Kursus Selancar",
    des: "Platform yang menghubungkan instruktur selancar dengan siswa untuk kursus di Bali.",
    img: "/surf.png",
    iconLists: ["wordpress.svg", "/css.svg"],
  },

  {
    id: 5,
    title: "WhosThat - Game Berbasis Website",
    des: "Website berbasis game yang memungkinkan pengguna bermain game Undercover yang populer secara offline bersama teman.",
    img: "/wt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://whos-that.vercel.app/",
  },
  {
    id: 6,
    title: "Tetris - Game Klasik yang Dibuat Ulang",
    des: "Membuat ulang game klasik Tetris menggunakan teknologi web modern, menampilkan animasi yang halus dan desain yang responsif.",
    img: "/tetris.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/firebase.svg"],
    link: "https://tetris-azure-nine.vercel.app/",
  },
  {
    id: 7,
    title: "Desain Website E-commerce",
    des: "Membuat desain website e-commerce untuk Android dari Figma dengan mempertimbangkan antarmuka dan pengalaman pengguna (UI/UX).",
    img: "/ecommerce.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/edtLCrYg7azM20nioXcmRi/Hairunn?node-id=2-3&starting-point-node-id=2%3A3&t=rAF1Uj5cd0gPCUc3-1",
  },
  {
    id: 8,
    title: "UPTPTKK - Desain Ulang Website",
    des: "Mendesain ulang website. Mempertimbangkan palet warna, tata letak, dan struktur desain.",
    img: "/upt.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/60m6rZ460kyJsbHb5i9kcD/Tugas-Akhir---Hairunisa-asanti?node-id=110-222&t=iDo1usSVqZ29h3Er-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

export const certificates = [
  {
    quote: "/sertifikat_AI.jpg",
    name: "Peserta Lomba AI Tingkat Provinsi",
    title:
      "Penghargaan atas partisipasi dalam kategori Artificial Intelligence pada Lomba Kompetensi Siswa (LKS) Tingkat Provinsi ke-33 di Jawa Timur, yang diselenggarakan oleh Dinas Pendidikan Provinsi Jawa Timur.",
  },
  {
    quote: "/sertifikat2.jpg",
    name: "Peserta Workshop COBIT 2019",
    title:
      "Berpartisipasi dalam workshop 'COBIT 2019: Strategi TI Membangun Kepercayaan Direksi dan Perusahaan Melalui Tata Kelola Sumber Daya Terukur,' yang diselenggarakan di Yogyakarta (2 Jam Pelajaran).",
  },
  {
    quote: "/sertifikat_WD.jpg",
    name: "Sertifikasi Web Designer (Level IV KKNI)",
    title:
      "Secara resmi diakui kompeten dalam Web Design (Level IV Kerangka Kualifikasi Nasional Indonesia) oleh Badan Nasional Sertifikasi Profesi (BNSP) bidang Teknologi Informasi dan Komunikasi.",
  },
  {
    quote: "/Data_Visualization.png",
    name: "Penyelesaian Kursus Data Visualization",
    title:
      "Berhasil menyelesaikan kursus 'Data Visualization' di Kaggle, menguasai teknik untuk menyajikan insight data secara efektif.",
  },
  {
    quote: "/MachineLearning.png",
    name: "Penyelesaian Kursus Intermediate Machine Learning",
    title:
      "Menyelesaikan kursus 'Intermediate Machine Learning' dari Kaggle, mencakup topik lanjutan mengenai evaluasi model, feature engineering, dan pipelines.",
  },
  {
    quote: "/ubig.jpg",
    name: "Workshop Chatbot AI & Kunjungan Industri",
    title:
      "Berpartisipasi dalam Workshop Pengembangan Chatbot NoBox AI dan kunjungan industri di PT Universal Big Data (UBIG), mendapatkan pengalaman langsung dalam aplikasi AI.",
  },
  {
    quote: "/wd1.jpg",
    name: "Sertifikasi Akselerasi Web Design Nasional",
    title:
      "Penghargaan atas penyelesaian program sertifikasi akselerasi Web Design (Standar Nasional KKNI) yang diselenggarakan oleh Unit Pelaksana Teknis Pelatihan Kerja (UPTPK) Provinsi Jawa Timur.",
  },
  {
    quote: "/wd2.jpg",
    name: "Program Inkubator Rekayasa Perangkat Lunak/Web Design",
    title:
      "Diakui atas partisipasi dalam Angkatan ke-3 Program Pengembangan Kompetensi SMK/SMA (Inkubator) bidang Rekayasa Perangkat Lunak/Web Design oleh Unit Pelaksana Teknis Pelatihan Kerja Jawa Timur.",
  },
];

export const companies = [
  { id: 1, name: "html5", img: "/html5.svg" },
  { id: 2, name: "css", img: "/css.svg" },
  { id: 3, name: "JavaScript", img: "/js.svg" },
  { id: 4, name: "TypeScript", img: "/ts.svg" },
  { id: 5, name: "PHP", img: "/php.svg" },
  { id: 6, name: "Java", img: "/java.svg" },
  { id: 7, name: "Bootstrap", img: "/bs.svg" },
  { id: 8, name: "Tailwind", img: "/tail.svg" },
  { id: 9, name: "React", img: "/re.svg" },
  { id: 10, name: "Laravel", img: "/laravel.svg" },
  { id: 11, name: "MySQL", img: "/mysql.svg" },
  { id: 12, name: "WordPress", img: "/wordpress.svg" },
  { id: 13, name: "Figma", img: "/figma.svg" },
  { id: 14, name: "Firebase", img: "/firebase.svg" },
  { id: 15, name: "HOSTINGER", img: "/host.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Magang Frontend & Game Engineer",
    desc: "Berperan dalam membangun platform web React.js interaktif, meningkatkan interaktivitas dan kegunaan.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Website WordPress untuk Klien",
    desc: "Merancang dan mengembangkan website WordPress yang responsif, memastikan navigasi yang lancar dan kustomisasi sesuai kebutuhan klien.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Sertifikasi Web Design Nasional",
    desc: "Menyelesaikan Sertifikasi Nasional Berbasis KKNI dengan peringkat atas di bidang Web Design, menunjukkan keterampilan desain dan implementasi tingkat lanjut.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Pelatihan Lomba: Web Design & AI",
    desc: "Menyelesaikan pelatihan intensif selama satu tahun dalam bidang Web Design dan AI untuk Lomba LKS, meraih juara 2 di tingkat kabupaten dan Top 10 di tingkat provinsi dalam bidang AI, sekaligus mengembangkan keterampilan teknis dan pemecahan masalah tingkat lanjut.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/edgrce",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hairunisa-asanti-asanti-9a5a2b34b/",
  },
];

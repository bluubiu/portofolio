export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificate" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaboration that delivers results",
    description:
      "I believe in open, iterative communication with clients throughout every stage of the project.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seamless collaboration across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly strive to grow and improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by curiosity, powered by code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Build a website tailored just for you",
    description: " ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to create something extraordinary together?",
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
    title: "MediUKS – School Health Equipment Loan Management System",
    des: "MediUKS is a web app that digitizes health equipment borrowing at SMKN 1 Kepanjen's school health unit, replacing the old paper-based system. It features borrowing request workflows, return tracking, user authentication, and an admin dashboard for inventory management.",
    img: "/management_peminjaman_uks.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mysql.svg",
      "/laravel.svg",
    ],
    link: "https://github.com/bluubiu/Frontend-UKK.git",
  },
  {
    id: 2,
    title: "Tiga Warna – Paint Sales Point-of-Sale (POS) Web Application",
    des: "Tiga Warna is a web-based POS system designed to modernize paint store operations. It supports role-based access for cashiers and admins, with features including product catalog management, real-time stock updates, sales reporting, and invoice generation.",
    img: "/management_system_printing.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/firebase.svg"],
    // link: "https://github.com/bluubiu/trigara.git",
  },
  {
    id: 3,
    title: "ProLearn – Modern Online Learning Platform",
    des: "ProLearn is a modern online learning platform built with a focus on user experience and performance. It features an intuitive course catalog, progress tracking, and a responsive layout that makes self-paced learning efficient and enjoyable.",
    img: "/ProLearn.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/js.svg"],
  },
  {
    id: 4,
    title: "Surf Lesson – Surfing Course Booking Platform",
    des: "Surf Lesson is a surf course booking website connecting instructors with students in Bali. Users can browse available courses, view instructor profiles, and book sessions online — all through a clean and visually engaging interface.",
    img: "/surf.png",
    iconLists: ["wordpress.svg", "/css.svg"],
  },

  {
    id: 5,
    title: "WhosThat – Browser-Based Social Deduction Game",
    des: "WhosThat is a browser-based multiplayer game that brings the popular Undercover social deduction experience online. Players can create or join rooms, get role assignments, and play with friends instantly — no app required.",
    img: "/wt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://whos-that.vercel.app/",
  },
  {
    id: 6,
    title: "Tetris – Classic Game Reimagined with Modern Web Tech",
    des: "A polished browser-based reimagining of the classic Tetris game built with modern web technologies. It features smooth animations, responsive controls, dynamic scoring, and increasing difficulty — all wrapped in a clean dark-themed UI.",
    img: "/tetris.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/firebase.svg"],
    link: "https://tetris-azure-nine.vercel.app/",
  },
  {
    id: 7,
    title: "E-Commerce Mobile App UI/UX Design",
    des: "A UI/UX design for an Android e-commerce app, built in Figma with a focus on usability and visual consistency. Key screens include the product catalog, search and filter, product detail, cart, and checkout — designed for a seamless shopping experience.",
    img: "/ecommerce.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/edtLCrYg7azM20nioXcmRi/Hairunn?node-id=2-3&starting-point-node-id=2%3A3&t=rAF1Uj5cd0gPCUc3-1",
  },
  {
    id: 8,
    title: "UPTPTKK – Government Website Redesign",
    des: "A full UI/UX redesign of the UPTPTKK government website, aimed at modernizing its visual identity and improving usability. The new design features a refreshed color palette, restructured information architecture, and a more professional aesthetic.",
    img: "/upt.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/60m6rZ460kyJsbHb5i9kcD/Tugas-Akhir---Hairunisa-asanti?node-id=110-222&t=iDo1usSVqZ29h3Er-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

export const certificates = [
  {
    quote: "/sertifikat_AI.jpg",
    name: "Provincial AI Competition Participant",
    name_id: "Peserta Lomba AI Tingkat Provinsi",
    title:
      "Awarded for participation in the Artificial Intelligence category at the 33rd Provincial-level LKS competition in East Java, organized by the East Java Provincial Education Department.",
    title_id:
      "Penghargaan atas partisipasi dalam kategori Artificial Intelligence pada Lomba Kompetensi Siswa (LKS) Tingkat Provinsi ke-33 di Jawa Timur, yang diselenggarakan oleh Dinas Pendidikan Provinsi Jawa Timur.",
  },
  {
    quote: "/sertifikat2.jpg",
    name: "COBIT 2019 Workshop Participant",
    name_id: "Peserta Workshop COBIT 2019",
    title:
      "Participated in the 'COBIT 2019: IT Strategy for Building Board and Corporate Trust through Measurable Resource Governance' workshop held in Yogyakarta (2 class hours).",
    title_id:
      "Berpartisipasi dalam workshop 'COBIT 2019: Strategi TI Membangun Kepercayaan Direksi dan Perusahaan Melalui Tata Kelola Sumber Daya Terukur,' yang diselenggarakan di Yogyakarta (2 Jam Pelajaran).",
  },
  {
    quote: "/sertifikat_WD.jpg",
    name: "Web Designer Certification (KKNI Level IV)",
    name_id: "Sertifikasi Web Designer (Level IV KKNI)",
    title:
      "Officially recognized as competent in Web Design (KKNI Level IV) by the National Professional Certification Agency (BNSP) in Information and Communication Technology.",
    title_id:
      "Secara resmi diakui kompeten dalam Web Design (Level IV Kerangka Kualifikasi Nasional Indonesia) oleh Badan Nasional Sertifikasi Profesi (BNSP) bidang Teknologi Informasi dan Komunikasi.",
  },
  {
    quote: "/Data_Visualization.png",
    name: "Data Visualization Course Completion",
    name_id: "Penyelesaian Kursus Data Visualization",
    title:
      "Successfully completed the 'Data Visualization' course on Kaggle, mastering techniques for presenting data insights effectively.",
    title_id:
      "Berhasil menyelesaikan kursus 'Data Visualization' di Kaggle, menguasai teknik untuk menyajikan insight data secara efektif.",
  },
  {
    quote: "/MachineLearning.png",
    name: "Intermediate Machine Learning Course Completion",
    name_id: "Penyelesaian Kursus Intermediate Machine Learning",
    title:
      "Finished the Kaggle 'Intermediate Machine Learning' course, covering advanced topics in model evaluation, feature engineering, and pipelines.",
    title_id:
      "Menyelesaikan kursus 'Intermediate Machine Learning' dari Kaggle, mencakup topik lanjutan mengenai evaluasi model, feature engineering, dan pipelines.",
  },
  {
    quote: "/ubig.jpg",
    name: "AI Chatbot Workshop & Industry Visit",
    name_id: "Workshop Chatbot AI & Kunjungan Industri",
    title:
      "Participated in the NoBox AI Chatbot development workshop and an industry visit at PT Universal Big Data (UBIG), gaining practical experience in AI applications.",
    title_id:
      "Berpartisipasi dalam Workshop Pengembangan Chatbot NoBox AI dan kunjungan industri di PT Universal Big Data (UBIG), mendapatkan pengalaman langsung dalam aplikasi AI.",
  },
  {
    quote: "/wd1.jpg",
    name: "National Web Design Acceleration Certification",
    name_id: "Sertifikasi Akselerasi Web Design Nasional",
    title:
      "Awarded for completing the National KKNI-standard Web Design acceleration certification program organized by the UPTPK East Java.",
    title_id:
      "Penghargaan atas penyelesaian program sertifikasi akselerasi Web Design (Standar Nasional KKNI) yang diselenggarakan oleh Unit Pelaksana Teknis Pelatihan Kerja (UPTPK) Provinsi Jawa Timur.",
  },
  {
    quote: "/wd2.jpg",
    name: "Software Engineering / Web Design Incubator Program",
    name_id: "Program Inkubator Rekayasa Perangkat Lunak/Web Design",
    title:
      "Recognized for participation in the 3rd cohort of the SMK/SMA Competency Development Incubator Program in Software Engineering/Web Design by UPTPK East Java.",
    title_id:
      "Diakui atas partisipasi dalam Angkatan ke-3 Program Pengembangan Kompetensi SMK/SMA (Inkubator) bidang Rekayasa Perangkat Lunak/Web Design oleh Unit Pelaksana Teknis Pelatihan Kerja Jawa Timur.",
  },
  {
    quote: "/AI2.jpeg",
    name: "Second Place – AI Competition",
    name_id: "Juara II Lomba AI",
    title:
      "Awarded for second place in the Artificial Intelligence category of the LKS DIKMEN competition at Kabupaten Malang, 2025.",
    title_id:
      "Penghargaan juara II kategori Artificial Intelligence dalam Lomba Kompetensi Siswa (LKS) DIKMEN tingkat Kabupaten Malang, 2025.",
  },
  {
    quote: "/festika.jpeg",
    name: "First Runner-up – Web Application",
    title:
      "Awarded to Ahmad Syarifudin Najihul Widad & Hairunisa Asanti for first runner-up in the Festika Jawa Timur 2025 web application category.",
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
    title: "Frontend & Game Engineering Internship",
    desc: "Contributed to building interactive React.js web platforms, significantly improving overall interactivity and usability across multiple features.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "WordPress Website Development for Clients",
    desc: "Designed and developed fully responsive WordPress websites, ensuring smooth navigation and customized solutions tailored to each client's unique business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "National Web Design Certification",
    desc: "Completed the National KKNI-based Certification with top ranking in the Web Design field, demonstrating advanced design and implementation skills recognized at the national level.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Competition Training: Web Design & AI",
    desc: "Completed an intensive one-year training program in Web Design and AI for the LKS competition, achieving 2nd place at the district level and Top 10 at the provincial level in AI — while developing advanced technical and problem-solving skills throughout.",
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

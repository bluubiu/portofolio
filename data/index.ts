import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificate", link: "#certificate" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaboration that sparks results",
    description: "I believe in open, iterative communication with clients.",
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
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by curiosity, fueled by code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Create a website that suits you",
    description: " ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to craft something extraordinary together?",
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
    title: "ProLearn - Online Learning Platform",
    des: "A modern online learning platform with a focus on user experience and performance, built with the latest technologies.",
    img: "/ProLearn.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/js.svg"],
  },
  {
    id: 2,
    title: "Surf Lesson - Website for Surf Lessons",
    des: "A platform connecting surf instructors with students for lessons in Bali.",
    img: "/surf.png",
    iconLists: ["wordpress.svg", "/css.svg"],
  },
  {
    id: 3,
    title: "WhosThat - Game Based On Website",
    des: "A game-based website that allows users to play the popular Undercover game offline with friends.",
    img: "/whosThat.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://whos-that.vercel.app/",
  },
  {
    id: 4,
    title: "Tetris - Classic Game Reimagined",
    des: "Recreated the classic Tetris game using modern web technologies, featuring smooth animations and responsive design.",
    img: "/tetris.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/firebase.svg"],
    link: "https://tetris-azure-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Basketball - Website created In Native Language",
    des: "Recreated the classic Basketball website using native language web technologies, featuring smooth animations and responsive design.",
    img: "/basket.png",
    iconLists: ["/html5.svg", "/css.svg", "/js.svg"],
    link: "https://baskeball.vercel.app/",
  },
  {
    id: 6,
    title: "The D-seven - E-commerce Website",
    des: "Recreated the classic Donut & Drink website using native language web technologies, featuring smooth animations and satisfying user interface.",
    img: "/dseven.png",
    iconLists: ["/html5.svg", "/css.svg", "/js.svg"],
    link: "https://product-pi-two.vercel.app/",
  },
  {
    id: 7,
    title: "E-commerce Website Design",
    des: "create an e-commerce website design for android from figma by considering user interface and experience.",
    img: "/ecommerce.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/edtLCrYg7azM20nioXcmRi/Hairunn?node-id=2-3&starting-point-node-id=2%3A3&t=rAF1Uj5cd0gPCUc3-1",
  },
  {
    id: 7,
    title: "UPTPTKK - Recreate Website Design",
    des: "Redesigning the website. Considering color palette, layout, and design structure",
    img: "/upt.png",
    iconLists: ["/figma.svg"],
    link: "https://www.figma.com/proto/60m6rZ460kyJsbHb5i9kcD/Tugas-Akhir---Hairunisa-asanti?node-id=110-222&t=iDo1usSVqZ29h3Er-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

export const certificates = [
  {
    quote: "/sertifikat_AI.jpg",
    name: "Provincial AI Competition Participant",
    title:
      "Awarded for participation in the Artificial Intelligence category at the 33rd Provincial Level Student Competency Competition (LKS) in East Java, organized by the East Java Provincial Education Office.",
  },
  {
    quote: "/sertifikat2.jpg",
    name: "COBIT 2019 Workshop Attendee",
    title:
      "Participated in the workshop 'COBIT 2019: IT Strategies to Build Trust with Directors and Companies Through Measurable Resource Governance,' held in Yogyakarta (2 JPL hours).",
  },
  {
    quote: "/sertifikat_WD.jpg",
    name: "Certified Web Designer (Level IV IQF)",
    title:
      "Officially recognized as competent in Web Design (Level IV of the Indonesian Qualification Framework) by the Competency Certification Board of Information and Communication Technologies.",
  },
  {
    quote: "/Data_Visualization.png",
    name: "Data Visualization Course Completion",
    title:
      "Successfully completed the 'Data Visualization' course on Kaggle, mastering techniques to present data insights effectively.",
  },
  {
    quote: "/MachineLearning.png",
    name: "Intermediate Machine Learning Course Completion",
    title:
      "Completed Kaggle's 'Intermediate Machine Learning' course, covering advanced topics in model evaluation, feature engineering, and pipelines.",
  },
  {
    quote: "/ubig.jpg",
    name: "Chatbot AI Workshop & Industrial Visit",
    title:
      "Participated in a NoBox AI Chatbot Development Workshop and industrial visit at PT Universal Big Data (UBIG), gaining hands-on experience in AI applications.",
  },
  {
    quote: "/wd1.jpg",
    name: "National Accelerated Web Design Certification",
    title:
      "Awarded for completing the accelerated Web Design certification program (KKNI National Standard) organized by the East Java Provincial Technical and Vocational Development Unit.",
  },
  {
    quote: "/wd2.jpg",
    name: "Software Engineering/Web Design Incubator Program",
    title:
      "Recognized for participation in the 3rd Cohort of the SMK/SMA Competency Development Program (Incubator) in Software Engineering/Web Design by East Java's Vocational Development Unit.",
  },
];


export const companies = [
  {
    id: 1,
    name: "html5",
    img: "/html5.svg",
  },
  {
    id: 2,
    name: "css",
    img: "/css.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/js.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "/ts.svg",
  },
  {
    id: 5,
    name: "PHP",
    img: "/php.svg",
  },
  {
    id: 6,
    name: "Java",
    img: "/java.svg",
  },
  {
    id: 7,
    name: "Bootstrap",
    img: "/bs.svg",
  },
  {
    id: 8,
    name: "Tailwind",
    img: "/tail.svg",
  },
  {
    id: 9,
    name: "React",
    img: "/re.svg",
  },
  {
    id: 10,
    name: "Laravel",
    img: "/laravel.svg",
  },
  {
    id: 11,
    name: "MySQL",
    img: "/mysql.svg",
  },
  {
    id: 12,
    name: "WordPress",
    img: "/wordpress.svg",
  },
  {
    id: 13,
    name: "Figma",
    img: "/figma.svg",
  },
  {
    id: 14,
    name: "Firebase",
    img: "/firebase.svg",
  },
  {
    id: 15,
    name: "HOSTINGER",
    img: "/host.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend & Game Engineer Intern",
    desc: "Played a role in building an interactive React.js web platform, boosting interactivity and usability",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "WordPress Website For client",
    desc: "Designed and developed a responsive WordPress website, ensuring seamless navigation and client-specific customization",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "National Web Design Certification",
    desc: "Completed the National KKNI-Based Certification with top ranking in Web Design, demonstrating advanced design and implementation skills.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Competition Training: Web Design & AI",
    desc: "Completed a year-long intensive training in Web Design and AI for LKS Competition, earning 2nd place at the district level and Top 10 at the provincial level in AI, while developing advanced technical and problem-solving skills.",
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

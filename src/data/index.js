const projects = [
  {
    id: 1,
    img: "./images/exam-app.png",
    url: "https://github.com/ekialfani/exam-app.git",
    title: "Exam App",
    description:
      "An online exam app utilizing a randomization algorithm to improve security and fairness.",
    techStack: ["Tailwind", "React Native", "Go"],
    repository: "https://github.com/ekialfani/exam-app.git",
  },
  {
    id: 2,
    img: "./images/blipedia.png",
    url: "https://blipedia.netlify.app/",
    title: "blipedia",
    description:
      "Blipedia is an e-commerce app for buying and selling products online. It is a group project for the React & React Native course at Hacktiv8.",
    techStack: ["Tailwind", "Reactjs"],
    repository: "https://github.com/Hacktiv8-Project2/ecommerce-project2.git",
  },
  {
    id: 3,
    img: "./images/staydors.png",
    url: "https://github.com/FinalProject03-Kel04-Hacktiv8/Kel04-FP03-Hacktiv8-Hotel-Reservation-MobileApp.git",
    title: "stayDors",
    description:
      "StayDors is a hotel booking app, developed as a group project for the React & React Native course at Hacktiv8.",
    techStack: ["Tailwind", "React native"],
    repository:
      "https://github.com/FinalProject03-Kel04-Hacktiv8/Kel04-FP03-Hacktiv8-Hotel-Reservation-MobileApp.git",
  },
  {
    id: 4,
    img: "./images/buletin.png",
    url: "https://buletin-news.vercel.app/",
    title: "buletin",
    description:
      "The Buletin is a news app that displays articles by categories like Indonesia, programming, and COVID-19. It’s a group project for the React & React Native course at Hacktiv8.",
    techStack: ["Tailwind", "Flowbite", "Next.js"],
    repository: "https://github.com/hacktiv8-fp-1/news-web-api.git",
  },
  {
    id: 5,
    img: "./images/movlix.png",
    url: "https://movlix-fp.netlify.app/",
    title: "movlix",
    description:
      "Movlix is a web app that lets users search and create a list of their favorite movies. It’s a group project for the React & React Native course at Hacktiv8.",
    techStack: ["Tailwind", "Flowbite", "Reactjs"],
    repository: "https://github.com/Hacktiv8-Final-Project-4/movie-app.git",
  },
  {
    id: 6,
    img: "./images/resto.png",
    url: "https://jovial-clafoutis-41cfc0.netlify.app/",
    title: "resto",
    description:
      "Resto is an app that helps users find the best restaurants based on criteria like location, food type, rating, and more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/ekialfani/resto",
  },
  {
    id: 7,
    img: "./images/movie-info.png",
    url: "https://ekialfani.github.io/movie-info/",
    title: "movie info",
    description:
      "A web-app to find detailed information about movies. This website is built using TMDB (The Movie Database) API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/ekialfani/movie-info",
  },
  {
    id: 8,
    img: "./images/rak-buku.png",
    url: "https://ekialfani.github.io/rak-buku/",
    title: "rak buku",
    description:
      "Rak Buku is a web application to store reading books. We can add, update, delete, and move books between shelves.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/ekialfani/rak-buku",
  },
  {
    id: 9,
    img: "./images/lombok-profile.png",
    url: "https://ekialfani.github.io/lombok-profile/",
    title: "lombok profile",
    description:
      "Displays information about Lombok Island, including its history, geography, culture, and popular tourist attractions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/ekialfani/lombok-profile",
  },
  {
    id: 10,
    img: "./images/web-calculator.png",
    url: "https://ekialfani.github.io/web-calculator/",
    title: "web calculator",
    description:
      "Web Calculator is a web app for performing basic arithmetic operations like addition, subtraction, and multiplication.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/ekialfani/web-calculator",
  },
];

export default function getProjects() {
  return projects;
}

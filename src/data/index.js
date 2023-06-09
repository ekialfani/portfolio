const projects = [
  {
    id: 1,
    img: "./images/blipedia.png",
    url: "https://blipedia.netlify.app/",
    title: "blipedia",
    description: "Blipedia is an e-commerce application that allows users to buy and sell their products online. It is one of the group-based final projects completed to fulfill the requirements of the React & React Native course at Hacktiv8.",
    techStack: ["tailwind", "reactjs"],
    repository: "https://github.com/Hacktiv8-Project2/ecommerce-project2.git",
  },
  {
    id: 2,
    img: "./images/staydors.png",
    url: "https://github.com/FinalProject03-Kel04-Hacktiv8/Kel04-FP03-Hacktiv8-Hotel-Reservation-MobileApp.git",
    title: "stayDors",
    description: "StayDors is a hotel booking application. It is one of the group-based final projects completed to fulfill the requirements of the React & React Native course at Hacktiv8.",
    techStack: ["tailwind", "react native"],
    repository: "https://github.com/FinalProject03-Kel04-Hacktiv8/Kel04-FP03-Hacktiv8-Hotel-Reservation-MobileApp.git",
  },
  {
    id: 3,
    img: "./images/buletin.png",
    url: "https://buletin-news.vercel.app/",
    title: "buletin",
    description: "The Buletin is a news application that displays news based on categories such as Indonesia, programming, and COVID-19. It is one of the group-based final projects completed to fulfill the requirements of the React & React Native course at Hacktiv8.",
    techStack: ["tailwind", "flowbite", "next.js"],
    repository: "https://github.com/hacktiv8-fp-1/news-web-api.git",
  },
  {
    id: 4,
    img: "./images/movlix.png",
    url: "https://movlix-fp.netlify.app/",
    title: "movlix",
    description: "Movlix is a web application that allows users to search for their favorite movies and create a list of their preferred movies. It is one of the group-based final projects completed to fulfill the requirements of the React & React Native course at Hacktiv8.",
    techStack: ["tailwind", "flowbite", "reactjs"],
    repository: "https://github.com/Hacktiv8-Final-Project-4/movie-app.git",
  },
  {
    id: 5,
    img: "./images/resto.png",
    url: "https://jovial-clafoutis-41cfc0.netlify.app/",
    title: "resto",
    description: "Resto is an application that allows users to search and find their best restaurants based on specific criteria such as location, type of food, rating, and more.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/resto",
  },
  {
    id: 6,
    img: "./images/movie-info.png",
    url: "https://ekialfani.github.io/movie-info/",
    title: "movie info",
    description: "A web-app to find detailed information about movies. This website is built using TMDB (The Movie Database) API.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/movie-info",
  },
  {
    id: 7,
    img: "./images/rak-buku.png",
    url: "https://ekialfani.github.io/rak-buku/",
    title: "rak buku",
    description: 'Rak Buku is a web application to store reading books. We can add, update, delete, and move books between shelves.',
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/rak-buku",
  },
  {
    id: 8,
    img: "./images/lombok-profile.png",
    url: "https://ekialfani.github.io/lombok-profile/",
    title: "lombok profile",
    description: "Displays information about the Island of Lombok, ranging from history, geography, culture and some of the famous tourist attractions on the Island of Lombok.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/lombok-profile",
  },
  {
    id: 9,
    img: "./images/web-calculator.png",
    url: "https://ekialfani.github.io/web-calculator/",
    title: "web calculator",
    description: 'Web Calculator is a web-based application that allows us to perform simple arithmetic operations such as addition, subtraction, multiplication, and others.',
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/web-calculator",
  },
];

export default function getProjects() {
  return projects;
}

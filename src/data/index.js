import lombokProfieImg from '../assets/images/lombok-profile.png';
import restoImg from '../assets/images/resto.PNG';
import rakBukuImg from '../assets/images/rak-buku.PNG';
import movieInfoImg from '../assets/images/movie-info.PNG';
import sportStoreImg from '../assets/images/sport-store.PNG';
import webCalculatorImg from '../assets/images/web-calculator.png';

const projects = [
  {
    id: 1,
    img: lombokProfieImg,
    url: "https://ekialfani.github.io/lombok-profile/",
    title: "lombok profile",
    description: "Displays information about the Island of Lombok, ranging from history, geography, culture and some of the famous tourist attractions on the Island of Lombok.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/lombok-profile",
  },
  {
    id: 2,
    img: restoImg,
    url: "https://jovial-clafoutis-41cfc0.netlify.app/",
    title: "resto",
    description: "Resto is an application that allows users to search and find their best restaurants based on specific criteria such as location, type of food, rating, and more. With this application, users can view information about the restaurant such as menu, photos, and reviews from previous visitors.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/resto",
  },
  {
    id: 3,
    img: movieInfoImg,
    url: "https://ekialfani.github.io/movie-info/",
    title: "movie info",
    description: "A web-app to find detailed information about movies. This website is built using TMDB (The Movie Database) API.",
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/movie-info",
  },
  {
    id: 4,
    img: rakBukuImg,
    url: "https://ekialfani.github.io/rak-buku/",
    title: "rak buku",
    description: 'Rak Buku is a web application to store reading books, we can add a new book and move books between shelves by marking them as "selesai dibaca (finished)" or "belum selesai (unfinished)". We can also remove the book from the bookshelf by pressing the "hapus buku (deleted book)" button and edit the book by pressing the edit icon.',
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/rak-buku",
  },
  {
    id: 5,
    img: webCalculatorImg,
    url: "https://ekialfani.github.io/web-calculator/",
    title: "web calculator",
    description: 'Web Calculator is a web-based application that allows us to perform simple arithmetic operations such as addition, subtraction, multiplication, and others. When we do the calculation process, the history will be saved automatically into web storage and will be displayed in tabular form.',
    techStack: ["html", "css", "javaScript"],
    repository: "https://github.com/ekialfani/web-calculator",
  },
  {
    id: 6,
    img: sportStoreImg,
    url: "https://ekialfani.github.io/sport-store/",
    title: "sport store",
    description: 'A simple marketplace website that displays items, prices, categories, and more.',
    techStack: ["html", "tailwindcss", "javaScript"],
    repository: "https://github.com/ekialfani/sport-store",
  },
];

export default function getProjects() {
  return projects;
}

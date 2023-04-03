import lombokProfieImg from '../assets/images/lombok-profile.png';
import restoImg from '../assets/images/resto.PNG';
import rakBukuImg from '../assets/images/rak-buku.PNG';
import movieInfoImg from '../assets/images/movie-info.PNG';
import sportStoreImg from '../assets/images/sport-store.PNG';
import webCalculatorImg from '../assets/images/web-calculator.png';

function Projects() {
  return (
    <div>
      <h2 
        className="capitalize text-4xl font-bold mt-10 mb-10 text-custom-shadow text-center">
        projects
      </h2>
      <div
        className="grid grid-cols-3 gap-8">
        <div
          className="shadow-md rounded-sm relative overflow-hidden">
          <a
            className="inline-block w-full h-[150px]"
            href="https://ekialfani.github.io/lombok-profile/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={lombokProfieImg} 
              alt="lombok profile" />
          </a>
          <div
            className="p-4 mb-10">
            <h4 
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a 
                href="https://ekialfani.github.io/lombok-profile/"
                target="_blank"
                rel="noreferrer">
                lombok profile
              </a>
            </h4>
            <p 
              className="limit-sentences text-sm text-slate-500">
              Displays information about the Island of Lombok, ranging from history, geography, culture and some of the famous tourist attractions on the Island of Lombok.
            </p>
          </div>
          <div 
            className="absolute left-0 w-full bottom-0 flex items-center justify-between px-4 py-2">
            <div
              className="flex gap-2 font-medium text-custom-shadow">
              <span 
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                html
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                css
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700"
              href="https://github.com/ekialfani/lombok-profile"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div
          className="shadow-md rounded-sm relative overflow-hidden">
          <a
            className="inline-block h-[150px] w-full"
            href="https://jovial-clafoutis-41cfc0.netlify.app/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={restoImg}
              alt="resto" />
          </a>
          <div className="p-4 mb-10">
            <h4
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a href="https://jovial-clafoutis-41cfc0.netlify.app/" target="_blank"
          rel="noreferrer">
                resto
              </a>
            </h4>
            <p className="limit-sentences text-sm text-slate-500">Resto is an application that allows users to search and find their best restaurants based on specific criteria such as location, type of food, rating, and more. With this application, users can view information about the restaurant such as menu, photos, and reviews from previous visitors.</p>
          </div>
          <div 
            className="absolute w-full bottom-0 flex items-center px-4 py-3 justify-between">
            <div 
              className="flex gap-2 font-medium text-custom-shadow">
              <span
                className="text-custom-xs px-2 border border-custom-shadow rounded-full uppercase">
                  html
              </span>
              <span
                className="text-custom-xs px-2 border border-custom-shadow rounded-full uppercase">
                css
              </span>
              <span
                className="text-custom-xs px-2 border border-custom-shadow rounded-full capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700"
              href="https://github.com/ekialfani/resto"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div
          className="shadow-md rounded-sm  overflow-hidden relative">
          <a
            className="inline-block w-full h-[150px]"
            href="https://ekialfani.github.io/movie-info/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={movieInfoImg}
              alt="movie info" />
          </a>
          <div className="p-4 mb-10">
            <h4
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a href="https://ekialfani.github.io/movie-info/" target="_blank" rel="noreferrer">
                movie info
              </a>
            </h4>
            <p 
              className="limit-sentences text-sm text-slate-500">
              A web-app to find detailed information about movies. This website is built using TMDB (The Movie Database) API.
            </p>
          </div>
          <div
            className="absolute w-full bottom-0 flex items-center px-4 py-3 justify-between">
            <div
              className="flex gap-2 font-medium text-custom-shadow">
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                html
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                css
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700" 
              href="https://github.com/ekialfani/movie-info"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div
          className="shadow-md rounded-sm relative overflow-hidden">
          <a
            className="inline-block w-full h-[150px]"
            href="https://ekialfani.github.io/rak-buku/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={rakBukuImg}
              alt="rak buku" />
          </a>
          <div
            className="p-4 mb-10">
            <h4
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a href="https://ekialfani.github.io/rak-buku/" target="_blank" rel="noreferrer">
                rak buku
              </a>
            </h4>
            <p
              className="limit-sentences text-sm text-slate-500">
              Rak Buku is a web application to store reading books, we can add a new book and move books between shelves by marking them as "selesai dibaca (finished)" or "belum selesai (unfinished)". We can also remove the book from the bookshelf by pressing the "hapus buku (deleted book)" button and edit the book by pressing the edit icon.
            </p>
          </div>
          <div
            className="absolute left-0 w-full bottom-0 flex items-center justify-between px-4 py-2">
            <div
              className="flex gap-2 font-medium text-custom-shadow">
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                html
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                css
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700"
              href="https://github.com/ekialfani/rak-buku"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div
          className="shadow-md rounded-sm relative overflow-hidden">
          <a
            className="inline-block w-full h-[150px]"
            href="https://ekialfani.github.io/web-calculator/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={webCalculatorImg}
              alt="web calculator" />
          </a>
          <div
            className="p-4 mb-10">
            <h4
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a
                href="https://ekialfani.github.io/web-calculator/"
                target="_blank"
                rel="noreferrer">
                web calculator
              </a>
            </h4>
            <p
              className="limit-sentences text-sm text-slate-500">
              Web Calculator is a web-based application that allows us to perform simple arithmetic operations such as addition, subtraction, multiplication, and others. When we do the calculation process, the history will be saved automatically into web storage and will be displayed in tabular form.
            </p>
          </div>
          <div
            className="absolute left-0 w-full bottom-0 flex items-center justify-between px-4 py-2">
            <div
              className="flex gap-2 font-medium text-custom-shadow">
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                html
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                css
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700"
              href="https://github.com/ekialfani/web-calculator"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div
          className="shadow-md rounded-sm relative overflow-hidden">
          <a
            className="inline-block w-full h-[150px]"
            href="https://ekialfani.github.io/sport-store/"
            target="_blank"
            rel="noreferrer">
            <img
              className="w-full h-full object-cover"
              src={sportStoreImg}
              alt="sport store" />
          </a>
          <div
            className="p-4 mb-10">
            <h4
              className="capitalize font-semibold mb-2 text-slate-700 hover:text-custom-shadow active:text-slate-700">
              <a 
                href="https://ekialfani.github.io/sport-store/"
                target="_blank"
                rel="noreferrer">
                sport store
              </a>
            </h4>
            <p 
              className="limit-sentences text-sm text-slate-500">
              A simple marketplace website that displays items, prices, categories, and more.
            </p>
          </div>
          <div
            className="absolute left-0 w-full bottom-0 flex items-center justify-between px-4 py-2">
            <div
              className="flex gap-2 font-medium text-custom-shadow">
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs uppercase">
                html
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                tailwind
              </span>
              <span
                className="border border-custom-shadow px-2 rounded-full text-custom-xs capitalize">
                javaScript
              </span>
            </div>
            <a
              className="text-2xl text-slate-700"
              href="https://github.com/ekialfani/sport-store"
              target="_blank"
              rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

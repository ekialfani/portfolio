import lombokProfieImg from '../assets/images/lombok-profile.png';
import restoImg from '../assets/images/resto.PNG';
import rakBukuImg from '../assets/images/rak-buku.PNG';
import movieInfoImg from '../assets/images/movie-info.PNG';
import sportStoreImg from '../assets/images/sport-store.PNG';
import webCalculatorImg from '../assets/images/web-calculator.png';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <div>
          <div>
            <a href="https://ekialfani.github.io/lombok-profile/" target="_blank"
            rel="noreferrer">
              <img src={lombokProfieImg} alt="lombok profile" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://ekialfani.github.io/lombok-profile/" target="_blank"
              rel="noreferrer">
                lombok profile
              </a>
            </h4>
            <p>Displays information about the Island of Lombok, ranging from history, geography, culture and some of the famous tourist attractions on the Island of Lombok.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/lombok-profile" target="_blank"
          rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div>
            <a href="https://jovial-clafoutis-41cfc0.netlify.app/" target="_blank" rel="noreferrer">
              <img src={restoImg} alt="resto" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://jovial-clafoutis-41cfc0.netlify.app/" target="_blank"
          rel="noreferrer">
                resto
              </a>
            </h4>
            <p>Resto is an application that allows users to search and find their best restaurants based on specific criteria such as location, type of food, rating, and more. With this application, users can view information about the restaurant such as menu, photos, and reviews from previous visitors.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/resto" target="_blank"
          rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div>
            <a href="https://ekialfani.github.io/movie-info/" target="_blank" rel="noreferrer">
              <img src={movieInfoImg} alt="movie info" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://ekialfani.github.io/movie-info/" target="_blank" rel="noreferrer">
                movie info
              </a>
            </h4>
            <p>A web-app to find detailed information about movies. This website is built using TMDB (The Movie Database) API.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/movie-info" target="_blank"
          rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div>
            <a href="https://ekialfani.github.io/rak-buku/" target="_blank" rel="noreferrer">
              <img src={rakBukuImg} alt="rak buku" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://ekialfani.github.io/rak-buku/" target="_blank" rel="noreferrer">
                rak buku
              </a>
            </h4>
            <p>Rak Buku is a web application to store reading books, we can add a new book and move books between shelves by marking them as "selesai dibaca (finished)" or "belum selesai (unfinished)". We can also remove the book from the bookshelf by pressing the "hapus buku (deleted book)" button and edit the book by pressing the edit icon.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/rak-buku" target="_blank"
          rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div>
            <a href="https://ekialfani.github.io/web-calculator/" target="_blank" rel="noreferrer">
              <img src={webCalculatorImg} alt="web calculator" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://ekialfani.github.io/web-calculator/" target="_blank" rel="noreferrer">
                web calculator
              </a>
            </h4>
            <p>Web Calculator is a web-based application that allows us to perform simple arithmetic operations such as addition, subtraction, multiplication, and others. When we do the calculation process, the history will be saved automatically into web storage and will be displayed in tabular form.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/web-calculator" target="_blank"
          rel="noreferrer">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div>
          <div>
            <a href="https://ekialfani.github.io/sport-store/" target="_blank" rel="noreferrer">
              <img src={sportStoreImg} alt="sport store" />
            </a>
          </div>
          <div>
            <h4>
              <a href="https://ekialfani.github.io/sport-store/" target="_blank" rel="noreferrer">
                sport store
              </a>
            </h4>
            <p>A simple marketplace website that displays items, prices, categories, and more.</p>
          </div>
          <div>
            <div>
              <span>html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <a href="https://github.com/ekialfani/sport-store" target="_blank"
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

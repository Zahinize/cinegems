import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import PopularityBar from "./components/PopularityBar/PopularityBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="root-container d-flex d-column">
      <header className="d-flex d-x-center d-y-center mb-30">
        <h1 className="playfair-display-bold t-center fs-xlarge sm">
          🎥 CineGems
        </h1>
      </header>
      <p className="t-center fs-large sm pl-10 mb-20">
        Discover the best movies and tv shows.
      </p>
      <div className="component-wrapper">
        <div className="d-flex mb-20">
          <button className="btn active fs-normal sm mr-20">Movies</button>
          <button disabled className="btn fs-normal sm mr-20">
            TV Shows
          </button>
          <button disabled className="btn fs-normal sm mr-20">
            Songs
          </button>
        </div>
        <div className="d-flex d-wrap mb-20">
          {/** First movie card **/}
          <section className="card d-flex mb-20 mr-20">
            <div className="card-img d-flex d-x-center d-y-center">
              <img
                src="https://image.tmdb.org/t/p/w342/pHpq9yNUIo6aDoCXEBzjSolywgz.jpg"
                alt="Movie Poster"
              />
            </div>
            <div className="card-desc d-flex d-flex-1 d-column p-10">
              <div className="d-flex d-y-center d-x-between mb-5">
                <h2 className="playfair-display-500 fs-large sm">
                  Predator: Badlands
                </h2>
                <PopularityBar filledBars={4} />
              </div>
              <div className="d-flex mb-30">
                <p className="fs-small sm">
                  2025 ‧ ⭐ 7.8 ‧ Drama/Crime ‧ 2h 22m
                </p>
              </div>
              <div className="d-flex mb-30">
                <p className="fs-normal sm">
                  Cast out from his clan, a young Predator finds an unlikely
                  ally in a damaged android and embarks on a treacherous journey
                  in search of the ultimate adversary.
                </p>
              </div>
              <div className="d-flex">
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  Share
                </button>
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  + Watchlist
                </button>
              </div>
            </div>
          </section>

          {/** Second movie card **/}
          <section className="card d-flex mb-20 mr-20">
            <div className="card-img d-flex d-x-center d-y-center">
              <img
                src="https://image.tmdb.org/t/p/w342/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg"
                alt="Movie Poster"
              />
            </div>
            <div className="card-desc d-flex d-flex-1 d-column p-10">
              <div className="d-flex d-y-center d-x-between mb-5">
                <h2 className="playfair-display-500 fs-large sm">
                  Avatar: Fire and Ash
                </h2>
                <PopularityBar filledBars={3} />
              </div>
              <div className="d-flex mb-30">
                <p className="fs-small sm">
                  2025 ‧ ⭐ 7.3 ‧ Drama/Crime ‧ 2h 22m
                </p>
              </div>
              <div className="d-flex mb-30">
                <p className="fs-normal sm">
                  In the wake of the devastating war against the RDA and the
                  loss of their eldest son, Jake Sully and Neytiri face a new
                  threat on Pandora: the Ash People, a violent and power-hungry
                  Na'vi tribe led by the ruthless Varang. Jake's family must
                  fight for their survival and the future of Pandora in a
                  conflict that pushes them to their emotional and physical
                  limits.
                </p>
              </div>
              <div className="d-flex">
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  Share
                </button>
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  + Watchlist
                </button>
              </div>
            </div>
          </section>

          {/** Third movie card **/}
          <section className="card d-flex mb-20 mr-20">
            <div className="card-img d-flex d-x-center d-y-center">
              <img
                src="https://image.tmdb.org/t/p/w342/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                alt="Movie Poster"
              />
            </div>
            <div className="card-desc d-flex d-flex-1 d-column p-10">
              <div className="d-flex d-y-center d-x-between mb-5">
                <h2 className="playfair-display-500 fs-large sm">Zootopia 2</h2>
                <PopularityBar filledBars={3} />
              </div>
              <div className="d-flex mb-30">
                <p className="fs-small sm">
                  2025 ‧ ⭐ 7.6 ‧ Drama/Crime ‧ 2h 22m
                </p>
              </div>
              <div className="d-flex mb-30">
                <p className="fs-normal sm">
                  After cracking the biggest case in Zootopia's history, rookie
                  cops Judy Hopps and Nick Wilde find themselves on the twisting
                  trail of a great mystery when Gary De'Snake arrives and turns
                  the animal metropolis upside down. To crack the case, Judy and
                  Nick must go undercover to unexpected new parts of town, where
                  their growing partnership is tested like never before.{" "}
                </p>
              </div>
              <div className="d-flex">
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  Share
                </button>
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  + Watchlist
                </button>
              </div>
            </div>
          </section>

          {/** Fourth movie card **/}
          <section className="card d-flex mb-20 mr-20">
            <div className="card-img d-flex d-x-center d-y-center">
              <img
                src="https://image.tmdb.org/t/p/w342/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg"
                alt="Movie Poster"
              />
            </div>
            <div className="card-desc d-flex d-flex-1 d-column p-10">
              <div className="d-flex d-y-center d-x-between mb-5">
                <h2 className="playfair-display-500 fs-large sm">
                  One Battle After Another
                </h2>
                <PopularityBar filledBars={1} />
              </div>
              <div className="d-flex mb-30">
                <p className="fs-small sm">
                  2025 ‧ ⭐ 7.4 ‧ Drama/Crime ‧ 2h 22m
                </p>
              </div>
              <div className="d-flex mb-30">
                <p className="fs-normal sm">
                  Washed-up revolutionary Bob exists in a state of stoned
                  paranoia, surviving off-grid with his spirited, self-reliant
                  daughter, Willa. When his evil nemesis resurfaces after 16
                  years and she goes missing, the former radical scrambles to
                  find her, father and daughter both battling the consequences
                  of his past.
                </p>
              </div>
              <div className="d-flex">
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  Share
                </button>
                <button className="btn-sm btn-primary fs-normal sm mr-10">
                  + Watchlist
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;

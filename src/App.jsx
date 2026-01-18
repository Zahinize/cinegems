import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="root-container d-flex d-column">
      <header className="d-flex d-x-center d-y-center mb-30">
        <h1 className="playfair-display-bold t-center fs-xlarge sm">
          🎥 CineGems
        </h1>
      </header>
      <p className="t-center fs-large sm pl-10 mb-20">
        Discover the best movies and tv shows.
      </p>

      <div className="component-wrapper">
        <div className="d-flex">
          <button className="btn fs-normal sm mr-20">Movies</button>
          <button disabled className="btn fs-normal sm mr-20">
            TV Shows
          </button>
          <button disabled className="btn fs-normal sm mr-20">
            Songs
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

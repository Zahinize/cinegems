function PopularityBar({ filledBars = 0 }) {
  return (
    <div className="popularity-container d-flex">
      <div
        className={`popularity-bar ${filledBars >= 1 ? "filled" : ""}`}
      ></div>
      <div
        className={`popularity-bar ${filledBars >= 2 ? "filled" : ""}`}
      ></div>
      <div
        className={`popularity-bar ${filledBars >= 3 ? "filled" : ""}`}
      ></div>
      <div
        className={`popularity-bar ${filledBars >= 4 ? "filled" : ""}`}
      ></div>
      <div
        className={`popularity-bar ${filledBars >= 5 ? "filled" : ""}`}
      ></div>
    </div>
  );
}

export default PopularityBar;

import React from "react";
import * as MdIcons from "react-icons/md";

function HomeIntro() {
  return (
    <div className="titlepage">
      <header>
        <h1 style={{ fontSize: "75px" }}>🌟 Movie-Rater 🌟</h1>
      </header>
      <br />
      <main className="home">
        <img
          style={{ height: "50rem", width: "70rem" }}
          src="https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80"
          alt="home logo"
          className="homeImg"
        ></img>
      </main>
    </div>
  );
}

export default HomeIntro;

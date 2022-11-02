import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <main>
      <section className="about-section">
        <h1>About me</h1>
        <p class="about-content">
          Hi! My name is Olena and I'm from Lviv. I'v worked in the restaurant
          business for 10 years of my life, the last 4 years as a restaurant
          manager. I was emotionally burnt out and chose frontend as a new
          direction of my career.
        </p>
      </section>
      <section className="langueges_section">
        <h2 class="sections-header">Languages</h2>
        <div class="courses-section languges_content">
          <h3>English</h3>
          <p> - A2</p>
        </div>
      </section>
      <section className="courses_section">
        <h2 className="sections-header">Courses</h2>
        <ul className="courses-section">
          <li>
            <h3>Softserve IT academy</h3>
            <div className="about-li">
              <p>
                HTML5/ CSS3/ <br /> JAVASCRIPT FUNDAMENTALS{" "}
              </p>
              <p>
                <i className="fa-solid fa-calendar-days"></i> April-May 2022
              </p>
            </div>
          </li>
          <li>
            <hr />
            <h3>Shecodes coding courses</h3>
            <div className="about-li">
              <p>
                SheCodes Basic, SheCodes Plus,
                <br /> SheCodes Responsive.{" "}
              </p>
              <p>
                <i className="fa-solid fa-calendar-days"></i> April-July 2022
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;

import React from "react";
import google from './images/google.jpg';
function App() {
  return (
    <div className="Page">
      <header>
        <div class="Section Section--zircon">
          <div class="Section-content">
            <nav className="SiteNavigation">
              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Search
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Cortacts
                  </a>
                </li>
              </ul>

              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Examples
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link SiteNavigation-link--button" href="#">
                    Sign In
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="Page-content">
          <a href="#" className="logo">
          </a>

          <input type="text" className="search" />

          <div className="flexbox">
            <button className="google__search__btn">Google Seacrh</button>

            <button className="random__search__btn">I'm Feelling Lucky</button>
          </div>

          <p className="google__text">Google offered in:</p>
      </main>
      <footer>
        <div className="Section Section--zircon">
          <div className="Section-content">
            <div className="PageFooter">
              <p>
                Created by{" "}
                <a className="Link" href="https://github.com">
                  goshakri
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

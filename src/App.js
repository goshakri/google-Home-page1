import React from "react";
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
      <div className="Page-content">
        <a href="#" className="logo">
          <img src="assets/images/logog.png" />
        </a>

        <input type="text" className="search" />

        <div className="flexbox">
          <button className="google__search__btn">Google Seacrh</button>

          <button className="random__search__btn">I'm Feelling Lucky</button>
        </div>

        <p className="google__text">Google offered in:</p>
      </div>
      <footer>
        <div class="Section Section--zircon">
          <div class="Section-content">
            <div className="PageFooter">
              <p>Created by <a className="Link"href="https://github.com">goshakri</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

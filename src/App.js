import React from "react";
function App() {
  return (
    <div className="Page">
      <header>
        <div class="Section">
          <div class="Section-content">
            <nav className="SiteNavigation">
              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    About
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Store
                  </a>
                </li>
              </ul>

              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Gmail
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Images
                  </a>
                </li>
                <li className="SiteNavigation-item SiteNavigation-item--button">
                  <a className="SiteNavigation-link" href="#">
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
      <div className="Page-footer">
        <a href="#">Adveristing</a>
        <a href="#">Business</a>
        <a href="#">How Search works</a>
        <a href="#">Privacy</a>
        <a href="#">Tems</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
}
export default App;

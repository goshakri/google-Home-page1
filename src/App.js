import React from "react";
import google from "./images/google.jpg";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="Page">
      <header>
        <div className="Section Section--zircon">
          <div className="Section-content">
            <nav className="SiteNavigation">
              <div className="HeaderPage-picture">
                <img className="HeaderPage-pictureItem" src="images/logogo.jpg" alt="" />
              </div>
              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/">
                    HOME
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/aboutus">
                    ABOUT US
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/contacts">
                    PORTFOLIO
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/contacts">
                    OUR BLOGS
                  </a>
                </li>
              </ul>

              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/">
                    SERVICES
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/contacts">
                    CONTACTS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">
            <div className="SearchPage">
              <div className="SearchPage-picture">
                <img className="SearchPage-pictureItem" src={google} alt="" />
              </div>

              <div className="SearchPage-input">
                <input type="text" className="Field Field--search"/>
              </div>

              <div className="SearchPage-actions">
                <button className="Button Button--spaced">Google Seacrh</button>
                <button className="Button">I'm Feelling Lucky</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default App;

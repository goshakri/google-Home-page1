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
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-fonts">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-fonts">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-fonts">
                    <i class="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="Section Section--slider">
          <div className="Section-content">
            <div className="SliderSection">
              <div className="SliderSection-name">
                <h1 className="SliderSection-text SliderSection-text--one">GOOD <basefont className="SliderSection-text SliderSection-text--red"> BUSINNES </basefont> INSIDE YOU </h1>
                <h1 className="SliderSection-text">FIMILIA <basefont className="SliderSection-text SliderSection-text--red"> STUDIO </basefont></h1>
              </div>
              <div className="SliderSection-item">
                <a className="Button Button--spaced">BUY NOW</a>
                <a className="Button">START A PROJECT</a>
              </div>


              <div className="SliderSection-radio">
                <div className="">
                  <input className="" type="radio" value="male" name="gender" checked/>
                  <input className="" type="radio" value="female" name="gender" />
                  <input className="" type="radio" value="female" name="gender" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default App;

import React from "react";
import logo from "./images/logo.png";
import iconone from "./images/iconone.png";
import icontoo from "./images/icontoo.png";
import iconthree from "./images/iconthree.png";
import noneimage from "./images/noneimage.png";
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
                <img src={logo} alt="" />
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
            <div className="Slider">
              <div className="Slider-content">
                <div className="Slider-item isActive">
                  <div className="Slider-title">
                    <h1 className="Slider-title Slider-title--one">GOOD <basefont className="Slider-title Slider-title--red"> BUSINNES </basefont> INSIDE YOU </h1>
                    <h1 className="Slider-title  Slider-title--too">FIMILIA <basefont className="Slider-title Slider-title--red"> STUDIO </basefont></h1>
                  </div>

                  <div className="Slider-btn">
                    <a className="Button Button--spaced">BUY NOW</a>
                    <a className="Button">START A PROJECT</a>
                  </div>
                </div>
              </div>
              <ul className="Slider-navigation">
                <li className="Slider-navigationItem">
                  <input className="Form-input" id="radio-1" type="radio" name="radio" value="1" checked />
                </li>
                <li className="Slider-navigationItem isActive">
                  <input className="Form-input" id="radio-2" type="radio" name="radio" value="2" checked />
                </li>
                <li className="Slider-navigationItem">
                  <input className="Form-input" id="radio-3" type="radio" name="radio" value="3" checked />
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">
            <div className="AboutSection">
              <div className="AboutSection-content">
                <div className="AboutSection-item">
                  <div className="AboutSection-title">
                    <h2 className="AboutSection-title">WHO WE ARE</h2>
                    <h2 className="AboutSection-title AboutSection-title--text"> <basefont className="Slider-title Slider-title--red"> Fimilia </basefont> Studio</h2>
                  </div>

                  <div className="AboutSection-wrappers u-pt-100">
                    <div className="AboutSection-blocknews">
                      <img src={iconone} alt="" />
                      <h2 className="AboutSection-blocknews AboutSection-blocknews--text">GRAPHIC DESIGN</h2>
                      <p className="AboutSection-textp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
                    </div>
                    <div className="AboutSection-blocknews">
                      <img src={icontoo} alt="" />
                      <h2 className="AboutSection-blocknews AboutSection-blocknews--text">DEVELOPMENT</h2>
                      <p className="AboutSection-textp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
                    </div>
                    <div className="AboutSection-blocknews">
                      <img src={iconthree} alt="" />
                      <h2 className="AboutSection-blocknews AboutSection-blocknews--text">MARKETING</h2>
                      <p className="AboutSection-textp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section Section--bgimage u-pt-490">
          <div className="Section-content">
            <div className="AboutSection">
              <div className="AboutSection-content">
                <div className="AboutSection-item">
                  <div className="AboutSection-photo">
                    <img src={noneimage} alt="" />
                  </div>

                  <div className="">
                    <h2>Fimilia Studio is Creative PSD Theme Design & Development</h2>
                    <p></p>
                  </div>
                </div>
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

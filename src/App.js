import React from "react";
import logo from "./images/logo.png";
import iconone from "./images/iconone.png";
import icontoo from "./images/icontoo.png";
import iconthree from "./images/iconthree.png";
import noneimage from "./images/noneimage.png";
import blackone from "./images/blackone.png";
import graytwoo from "./images/graytwoo.png";
import grayblackthree from "./images/grayblackthree.png";
import whitefour from "./images/whitefour.png";
import graygrayfive from "./images/graygrayfive.png";
import whiregray from "./images/whiregray.png";
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

        <div className="Section Section--bgimage ">
          <div className="Section-content">
            <div className="Row">
              <div className="Row-item">
                <div className="u-pb-50">
                  <img class="Row-images" src={noneimage} alt=""/>
                </div>

                <p className="Text-familiastuido u-pb-90">
                <basefont className="Text-familiastuido Text-familiastuido--red" >Fimilia </basefont> Studio is Creative PSD Theme
                Design & <basefont className="Text-familiastuido Text-familiastuido--red"> Development</basefont>
                </p>
              </div>

              <div className="Row-item u-pl-10">
                <h3 className="Text-aboutstudio u-pt-80 u-pb-30">
                  <basefont className="Text-aboutstudio Text-aboutstudio--red"> About </basefont> Fimilia Studio
                </h3>

                <p className="Text-familiastudiop u-pb-40">
                  Duis molestie sapien et nunc blandit elementum. Nunc in mi sit amet mi molestie sodales. Etiam a porta nisi, vel vulputate felis. Nulla tincidunt sagittis dui eget sodales.
                </p>

                <p className="Text-familiastudiop u-pb-40">
                  Nam volutpat est eu mollis pharetra. Vestibulum ultrices venenatis dolor a ornare. Sed et metus risus. Sed sagittis, nulla porta ultricies aliquet, sem lorem convallis arcu, id egestas libero libero et libero. Vivamus at eros in libero gravida mollis a eget odio. Quisque mattis molestie urna, eget bibendum neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Section Section--bgstats">
          <div className="Section-content">
            <div className="AboutSection">
              <div className="AboutSection-itemstats u-pt-100">
                <div className="AboutSection-blockstats">
                  <p className="Text-number u-pb-40">
                    402
                  </p>

                  <h3 className="Text-statsh3 u-pb-100">
                    Completed Projects
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="Text-number u-pb-40">
                    122
                  </p>

                  <h3 className="Text-statsh3 u-pb-100">
                    Happy Clients
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="Text-number u-pb-40">
                    5471
                  </p>

                  <h3 className="Text-statsh3 u-pb-100">
                    Working Hours
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="Text-number u-pb-40">
                    395
                  </p>

                  <h3 className="Text-statsh3 u-pb-100">
                    Cups Of Coffee
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PortfolioSection u-pt-130 u-pb-130">
          <div className="PortfolioSection-title">
            <h3 className="Text-ourportfolio u-pb-20">Our Portfolio</h3>

            <h3 className="Text-recentworks u-pb-100"> <basefont className=" Text Text--red"> Recent </basefont> Works</h3>
          </div>

          <div className="PortfolioSection-item u-w-100">
            <div className="PortfolioSection-item u-w-50">
              <div className="PortfolioSection-item u-w-100">
                <div className="PortfolioSection-item u-w-50">
                  <div className="u-w-100">
                    <img className="PortfolioSection-images" src={blackone} alt="" />
                  </div>
                </div>

                <div className="PortfolioSection-item flex-column u-w-50">
                  <div className="PortfolioSection-item u-w-100 u-h-50">
                    <img className="PortfolioSection-images" src={graytwoo} alt="" />

                    <div className="PortfolioSection-text">
                      <h3 className="Text-ourportfolio Text-ourportfolio--color u-pb-20">Project Title</h3>
                      <p className="Text-design">Design, Branding & Development</p>
                    </div>
                  </div>
                  <div className="d-flex u-w-100 u-h-50">
                    <img className="PortfolioSection-images" src={grayblackthree} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="PortfolioSection-item u-w-50 flex-column">
              <div className="PortfolioSection-item u-w-100 u-h-50">
                <div className="PortfolioSection-item u-w-50">
                  <img className="PortfolioSection-images" src={graygrayfive} alt="" />
                </div>
                <div className="PortfolioSection-item u-w-50">
                  <img className="PortfolioSection-images" src={whitefour} alt="" />
                </div>
              </div>

              <div className="PortfolioSectionu-item u-w-100 u-h-50">
                <div className="PortfolioSection-item u-w-100">
                  <img className="PortfolioSection-images" src={whiregray} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section Section--bgprice">
          <div className="Section-content">
            <div className="PricingSection u-pt-130">
              <div className="PricingSection-title u-pb-100">
                <h2 className="Text-pricingtable u-pb-20">Pricing Table</h2>

                <h2 className="Text-suitableplan"><basefont className="Text--red">Suitable</basefont> Plan</h2>
              </div>

              <div className="PricingSection-pricingtable">
                <div className="PricingSection-pricingcard">
                  <div className="u-pb-40">
                    <h3 className="Text-prcietext">Basic</h3>
                  </div>

                  <div className="Figure">
                    <p className="Text-numeral">$19</p>
                    <p className="Text-number Text-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingSection-column">
                    <li className="PricingSection-item">1 Website</li>
                    <li className="PricingSection-item">1 GB Storage</li>
                    <li className="PricingSection-item">10GB Bandwidth</li>
                    <li className="PricingSection-item">3 Month Support</li>
                    <li className="PricingSection-item">Unlimited Sub-Domains</li>
                    <li className="PricingSection-item">5 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingSection-pricingcard">
                  <div className="u-pb-40">
                    <h3 className="Text-prcietext" >Standard</h3>
                  </div>

                  <div className="Figure">
                    <p className="Text-numeral">$49</p>
                    <p className="Text-numeral Text-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingSection-column">
                    <li className="PricingSection-item">5 Website</li>
                    <li className="PricingSection-item">5 GB Storage</li>
                    <li className="PricingSection-item">500GB Bandwidth</li>
                    <li className="PricingSection-item">6 Month Support</li>
                    <li className="PricingSection-item">Unlimited Sub-Domains</li>
                    <li className="PricingSection-item">10 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingSection-pricingcard">
                  <div className="u-pb-40">
                    <h3 className="Text-prcietext" >Premium</h3>
                  </div>

                  <div className="Figure">
                    <p className="Text-numeral">$69</p>
                    <p className="Text-numeral Text-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingSection-column">
                    <li className="PricingSection-item">20 Website</li>
                    <li className="PricingSection-item">20 GB Storage</li>
                    <li className="PricingSection-item">200GB Bandwidth</li>
                    <li className="PricingSection-item">9 Month Support</li>
                    <li className="PricingSection-item">Unlimited Sub-Domains</li>
                    <li className="PricingSection-item">50 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingSection-pricingcard">
                  <div className="u-pb-40">
                    <h3 className="Text-prcietext" >Professional</h3>
                  </div>

                 <div className="Figure">
                   <p className="Text-numeral">$99</p>
                   <p className="Text-numeral Text-numeral--mo">/mo</p>
                 </div>

                  <ul className="PricingSection-column">
                    <li className="PricingSection-item">Unlimited Website</li>
                    <li className="PricingSection-item">100 GB Storage</li>
                    <li className="PricingSection-item">Unlimited Bandwidth</li>
                    <li className="PricingSection-item">1 Year Support</li>
                    <li className="PricingSection-item">Unlimited Domains</li>
                    <li className="PricingSection-item">Unlimited Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
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

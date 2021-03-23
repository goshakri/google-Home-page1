import React from "react";
import logologo from "./images/logologo.png";
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
import imageourteam from "./images/imageourteam.png";
import sizars from "./images/sizars.png";
import globus from "./images/globus.png";
import sintezator from "./images/sintezator.png";
import iphone from "./images/iphone.png";
import telegram from "./images/telegram.png";
import safari from "./images/safari.png";
import logoone from "./images/logoone.png";
import logotoo from "./images/logotoo.png";
import logothree from "./images/logothree.png";
import logofor from "./images/logofor.png";
import logofive from "./images/logofive.png";
import logosix from "./images/logosix.png";
import logofamilia from "./images/logofamilia.png";
import location from "./images/location.png";
import email from "./images/email.png";
import phone from "./images/phone.png";
import twitter from "./images/twitter.png";
import square from "./images/square.png";

import textbg from "./images/textbg.png";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="Page">
      <header>
        <div className="Section Section--zircon">
          <div className="Section-content">
            <nav className="SiteNavigation">
              <img src={logologo} alt="" />

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
                    CONTACT US
                  </a>
                </li>
                <li className="SiteNavigation-item ">
                  <a className="SiteNavigation-fonts">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-fonts">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-fonts">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="Page-content">
        <div className="Section Section--slider">
          <div className="Section-content">
            <div className="Slider">
              <div className="Slider-item isActive">
                <div className="Slider-title">
                  <h1 className="Slider-title Slider-title--one">GOOD<span className="u-color-red u-pl-20">BUSINESS</span> INSIDE YOU </h1>
                  <h2 className="Slider-title Slider-title--too">FIMILIA<span className="u-color-red u-pl-20">STUDIO</span></h2>
                </div>

                <div className="Slider-btn">
                  <a className="Button Button--slider">BUY NOW</a>
                  <a className="Button Button--slider">START A PROJECT</a>
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

        <div className="Section">
          <div className="Section-content">
            <div className="InfoSection u-pt-130 u-pb-130 u-pt-md-0 u-pb-md-0">
              <div className="InfoSection-content u-pt-md-100">
                <div className="InfoSection-item u-pb-120">
                  <div className="Text">
                    <h2 className="Text--title u-pb-20">WHO WE ARE</h2>
                    <p className="Text--smallTitle"><span className="u-color-red">Fimilia</span> Studio</p>
                  </div>

                  <div className="InfoSection-wrappers u-pt-100">
                    <div className="InfoSection-blockNews u-pr-40">
                      <img className="InfoSection-images u-pb-30" src={iconone} alt="" />
                      <h3 className="InfoSection-text u-pb-30">GRAPHIC DESIGN</h3>
                      <p className="Text--verdana">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
                    </div>

                    <div className="InfoSection-blockNews ">
                      <img className="InfoSection-images u-pb-30" src={icontoo} alt="" />
                      <h3 className="InfoSection-text u-pb-30">DEVELOPMENT</h3>
                      <p className="Text--verdana">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
                    </div>

                    <div className="InfoSection-blockNews u-pl-40">
                      <img className="InfoSection-images u-pb-30" src={iconthree} alt="" />
                      <h3 className="InfoSection-text u-pb-30">MARKETING</h3>
                      <p className="Text--verdana">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices, enim dolor commodo nulla, fringilla egestas.</p>
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
                  <img className="Row-images" src={noneimage} alt=""/>
                </div>

                <div className="Text">
                  <p className="Text--nonameFimilia u-text-center u-pb-90">
                  <span className="u-color-red " >FIMILIA </span> STUDIO IS CREATIVE PSD THEME
                  DESIGN & <span className="u-color-red"> DEVELOPMENT</span>
                  </p>
                </div>
              </div>

              <div className="Row-item u-pl-30">
                <div className="Text">
                  <h2 className="Text--noName u-pt-80 u-pb-30">
                    <span className="u-color-red"> ABOUT </span> FIMILIA STUDIO
                  </h2>

                  <p className="Text-familiastudiop u-pb-40">
                    Duis molestie sapien et nunc blandit elementum. Nunc in mi sit amet mi molestie sodales. Etiam a porta nisi, vel vulputate felis. Nulla tincidunt sagittis dui eget sodales.
                  </p>

                  <p className="Text-familiastudiop">
                    Nam volutpat est eu mollis pharetra. Vestibulum ultrices venenatis dolor a ornare. Sed et metus risus. Sed sagittis, nulla porta ultricies aliquet, sem lorem convallis arcu, id egestas libero libero et libero. Vivamus at eros in libero gravida mollis a eget odio. Quisque mattis molestie urna, eget bibendum neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section Section--bgstats">
          <div className="Section-content">
            <div className="AboutSection u-pt-100 u-pb-100 u-pt-md-0 u-pb-md-0">
              <div className="AboutSection-itemstats u-pb-md-70 u-pt-md-70">
                <div className="AboutSection-blockstats">
                  <p className="AboutSection--number u-pb-40 u-pb-md-0">
                    402
                  </p>

                  <h3 className="AboutSection--text u-pt-md-20">
                    Completed Projects
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="AboutSection--number u-pb-40 u-pb-md-0">
                    122
                  </p>

                  <h3 className="AboutSection--text u-pt-md-20">
                    Happy Clients
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="AboutSection--number u-pb-40 u-pb-md-0">
                    5471
                  </p>

                  <h3 className="AboutSection--text u-pt-md-20">
                    Working Hours
                  </h3>
                </div>

                <div className="AboutSection-blockstats">
                  <p className="AboutSection--number u-pb-40 u-pb-md-0">
                    395
                  </p>

                  <h3 className="AboutSection--text u-pt-md-20">
                    Cups Of Coffee
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PortfolioSection u-pt-130 u-pb-130 u-pb-md-0 u-pt-md-0">
          <div className="PortfolioSection-title u-pt-md-100">
            <div className="Text">
              <h2 className="Text-ourportfolio u-pb-20">Our Portfolio</h2>
              <p className="Text-recentworks u-pb-100"><span className=" Text Text--red"> Recent </span> Works</p>
            </div>
          </div>

          <div className="PortfolioSection-item u-pb-md-100 u-w-100">
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
                      <div className="Text">
                        <h3 className="Text-projecttitile u-pb-20">Project Title</h3>
                        <p className="Text-design">Design, Branding & Development</p>
                      </div>
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
            <div className="PricingSection u-pt-130 u-pt-md-0 u-pb-130 u-pb-md-0">
              <div className="PricingSection-title u-pt-md-100 u-pb-100 u-pb-md-50">
                <div className="Text">
                  <h2 className="Text-pricingtable u-pb-20">Pricing Table</h2>
                  <p className="Text-suitableplan"><span className="u-color-red">Suitable</span> Plan</p>
                </div>
              </div>

              <div className="PricingSection-pricingtable u-pb-md-100">
                <div className="PricingCard">
                  <div className="u-pb-40">
                    <h3 className="PricingCard-text">Basic</h3>
                  </div>

                  <div className="PricingCard-figure">
                    <p className="PricingCard-numeral">$19</p>
                    <p className="PricingCard-numeral PricingCard-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingCard-column">
                    <li className="PricingCard-item">1 Website</li>
                    <li className="PricingCard-item">1 GB Storage</li>
                    <li className="PricingCard-item">10GB Bandwidth</li>
                    <li className="PricingCard-item">3 Month Support</li>
                    <li className="PricingCard-item">Unlimited Sub-Domains</li>
                    <li className="PricingCard-item">5 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingCard">
                  <div className="u-pb-40">
                    <h3 className="PricingCard-text" >Standard</h3>
                  </div>

                  <div className="PricingCard-figure">
                    <p className="PricingCard-numeral">$49</p>
                    <p className="PricingCard-numeral PricingCard-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingCard-column">
                    <li className="PricingCard-item">5 Website</li>
                    <li className="PricingCard-item">5 GB Storage</li>
                    <li className="PricingCard-item">500GB Bandwidth</li>
                    <li className="PricingCard-item">6 Month Support</li>
                    <li className="PricingCard-item">Unlimited Sub-Domains</li>
                    <li className="PricingCard-item">10 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingCard">
                  <div className="u-pb-40">
                    <h3 className="PricingCard-text">Premium</h3>
                  </div>

                  <div className="PricingCard-figure">
                    <p className="PricingCard-numeral">$69</p>
                    <p className="PricingCard-numeral PricingCard-numeral--mo">/mo</p>
                  </div>

                  <ul className="PricingCard-column">
                    <li className="PricingCard-item">20 Website</li>
                    <li className="PricingCard-item">20 GB Storage</li>
                    <li className="PricingCard-item">200GB Bandwidth</li>
                    <li className="PricingCard-item">9 Month Support</li>
                    <li className="PricingCard-item">Unlimited Sub-Domains</li>
                    <li className="PricingCard-item">50 Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>

                <div className="PricingCard">
                  <div className="u-pb-40">
                    <h3 className="PricingCard-text">Professional</h3>
                  </div>

                 <div className="PricingCard-figure">
                   <p className="PricingCard-numeral">$99</p>
                   <p className="PricingCard-numeral PricingCard-numeral--mo">/mo</p>
                 </div>

                  <ul className="PricingCard-column">
                    <li className="PricingCard-item">Unlimited Website</li>
                    <li className="PricingCard-item">100 GB Storage</li>
                    <li className="PricingCard-item">Unlimited Bandwidth</li>
                    <li className="PricingCard-item">1 Year Support</li>
                    <li className="PricingCard-item">Unlimited Domains</li>
                    <li className="PricingCard-item">Unlimited Database</li>
                  </ul>
                  <a className="Button Button--price" href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section">
          <div className="Section-content">
            <div className="OurteamSection u-pt-130 u-pb-130 u-pb-md-0 u-pt-md-0">
              <div className="OurteamSection-title u-pt-md-100">
                <div className="Text">
                  <h2 className="Text-pricingtable u-pb-20">Our Team</h2>
                  <p className="Text-suitableplan"><span className="u-color-red">Fimilia </span> Plan</p>
                </div>
              </div>

              <div className="OurteamSection-cardflex u-pt-100 u-pb-md-100">
                <div className="MemberCard">
                  <img src={imageourteam} alt="" />

                  <div className="MemberCard-overlay ">
                    <div className="MemberCard-content">
                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-behance" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="MemberCard-text">
                    <div className="Text">
                      <h3 className="Text-timjones u-pb-15"><span className="u-color-red">TIM </span> JONES</h3>
                      <p className="Text-develover">Html Developer</p>
                    </div>
                  </div>
                </div>

                <div className="MemberCard">
                  <img src={imageourteam} alt="" />

                  <div className="MemberCard-overlay">
                    <div className="MemberCard-content">
                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-behance" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="MemberCard-text">
                    <div className="Text">
                      <h3 className="Text-timjones u-pb-15"><span className="u-color-red">Johnathan </span> Doe</h3>
                      <p className="Text-develover">Front End Developer</p>
                    </div>
                  </div>
                </div>

                <div className="MemberCard">
                  <img src={imageourteam} alt="" />

                  <div className="MemberCard-overlay">
                    <div className="MemberCard-content">
                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-behance" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="MemberCard-text">
                    <div className="Text">
                      <h3 className="Text-timjones u-pb-15"><span className="u-color-red">Nina </span> Adams</h3>
                      <p className="Text-develover">Marketing Manager</p>
                    </div>
                  </div>

                </div>

                <div className="MemberCard">
                  <img src={imageourteam} alt="" />

                  <div className="MemberCard-overlay">
                    <div className="MemberCard-content">
                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-behance" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div className="MemberCard-item">
                        <a className="MemberCard-fonts" href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="MemberCard-text">
                    <div className="Text">
                      <h3 className="Text-timjones u-pb-15"><span className="u-color-red">Alexia </span> Doe</h3>
                      <p className="Text-develover">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section">
          <div className="Section-content">
            <div className="ServiceSection u-pb-130 u-pb-md-130">
              <div className="ServiceSection-title u-pb-100">
                <div className="Text">
                  <h3 className="Text-pricingtable u-pb-30">Why Choose Us</h3>
                  <p className="Text-suitableplan"><span className="u-color-red">Our </span> Services</p>
                </div>
              </div>

              <div className="Services u-pb-80">
                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={sizars} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">Print </span> Design
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={globus} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">Web </span> Design
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={sintezator} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">Wed </span> Videos
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Services">
                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={iphone} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">Online </span> Support
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={telegram} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">Hosting  </span> Services
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Services-item">
                  <div className="Services-figure">
                    <img className="Services-images" src={safari} alt="" />
                  </div>

                  <div className="Services-textposition">
                    <div className="Text">
                      <h3 className="Text-services u-pb-20">
                        <span className="u-color-red">SEO </span> Services
                      </h3>

                      <p className="Text-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, nisl nec interdum ultrices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section Section--bgprice">
          <div className="Section-content">
            <div className="TestimonialsSection u-pt-130 u-pb-100 u-pt-md-50 u-pt-md-0">
              <div className="TestimonialsSection-title u-pt-md-100">
                <div className="Text">
                  <h3 className="Text-pricingtable u-pb-30">Testimonials</h3>
                  <p className="Text-suitableplan"><span className="u-color-red">What</span> Client Says</p>
                </div>
              </div>
            </div>

            <div className="Row u-pb-130 u-pb-md-0">
              <div className="Row-item">
                <div className="u-pb-75">
                  <img className="u-mb-40 u-mr-md-30" src={logoone} alt="" />
                  <img className="u-ml-60 u-mb-40 u-ml-md-0" src={logotoo} alt="" />
                  <img className="u-ml-60 u-mb-40 u-ml-md-0 u-mr-md-30" src={logothree} alt="" />
                  <img className="u-ml-md-0" src={logofor} alt="" />
                  <img className="u-ml-65 u-mt-40 u-ml-md-0 u-mr-md-70" src={logofive} alt="" />
                  <img className="u-ml-90 u-mt-40 u-ml-md-0" src={logosix} alt="" />
                </div>
              </div>

              <div className="Row-item">
                <div className="TestimonialsSection-flex u-pb-20">
                  <div className="u-pr-25">
                    <div className="TestimonialsSection-figure TestimonialsSection-figure--size"></div>
                  </div>

                  <div className="u-pr-25">
                    <div className="TestimonialsSection-figure"></div>
                  </div>

                  <div>
                    <div className="TestimonialsSection-figure TestimonialsSection-figure--size"></div>
                  </div>
                </div>

                <div className="TestimonialsSection-text">
                  <div className="Text">
                    <h3 className="Text-nametom u-pb-10">
                      Tom Smith
                    </h3>

                    <p className="Text-webdisigner u-color-red u-pb-30">
                      Web Designer
                    </p>

                    <p className="Text-loremt u-pb-45">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra velit non dolor congue mollis. Sed efficitur diam eget eleifend venenatis. Cum sociis natoque penatibus et magnis.
                    </p>
                  </div>

                  <ul className="TestimonialsSection-navigation">
                    <li className="TestimonialsSection-navigationItem">
                      <input className="Form-input" id="radio-1" type="radio" name="radio" value="1" checked />
                    </li>
                    <li className="TestimonialsSection-navigationItem isActive">
                      <input className="Form-input" id="radio-2" type="radio" name="radio" value="2" checked />
                    </li>
                    <li className="TestimonialsSection-navigationItem">
                      <input className="Form-input" id="radio-3" type="radio" name="radio" value="3" checked />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section">
          <div className="Section-content">
            <div className="BlogsSection u-pt-130 u-pb-130 u-pt-md-0 u-pb-md-0">
              <div className="BlogsSection-title u-pt-md-100 u-pb-100 ">
                <div className="Text">
                  <h3 className="Text-pricingtable u-pb-30">Our Blogs</h3>
                  <p className="Text-suitableplan"><span className="u-color-red">Latest </span> News</p>
                </div>
              </div>

              <div className="BlogsSection-column u-pb-md-100">
                <div className="BlogsSection-blog">
                  <div className="BlogsSection-text">
                    <div className="Text">
                      <h3 className="Text-post u-pb-20">
                        Post With Static Image
                      </h3>

                      <p className="Text-month u-pb-35">
                        <span className="u-color-red">FEBRUARY 27, 2016 </span>| 6 Comments
                      </p>
                    </div>
                  </div>

                  <div className="BlogsSection u-pb-30">
                    <video className="BlogsSection-video" controls>
                      <source src="movie.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>
                  </div>

                  <div className="Text">
                    <p className="Text-proin u-pb-25">
                      Proin metus diam, euismod a enim ac, gravida sodales mi. Donec varius ex nec pharetra sagittis. Ut vehicula, enim eget posuere semper.
                    </p>
                  </div>

                  <a className="Button--readmore" href="#">
                    Read More
                  </a>
                </div>

                <div className="BlogsSection-blog">
                  <div className="BlogsSection-text">
                    <div className="Text">
                      <h3 className="Text-post u-pb-20">
                        Post With A Slider Gallery
                      </h3>

                      <p className="Text-month u-pb-35">
                        <span className="u-color-red">MARCH 21, 2016 </span> | 2 Comments
                      </p>
                    </div>
                  </div>

                  <div className="BlogsSection u-pb-30">
                    <video className="BlogsSection-video" controls>
                      <source src="movie.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>
                  </div>

                  <div className="Text">
                    <p className="Text-proin u-pb-25">
                      Proin metus diam, euismod a enim ac, gravida sodales mi. Donec varius ex nec pharetra sagittis. Ut vehicula, enim eget posuere semper.
                    </p>
                  </div>

                  <a className="Button--readmore" href="#">
                    Read More
                  </a>
                </div>

                <div className="BlogsSection-blog">
                  <div className="BlogsSection-text">
                    <div className="Text">
                      <h3 className="Text-post u-pb-20">
                        POST WITH A YOUTUBE VIDEO
                      </h3>

                      <p className="Text-month u-pb-35">
                        <span className="u-color-red">FAPRIL 8, 2016 </span>| 3 Comments
                      </p>
                    </div>
                  </div>

                  <div className="BlogsSection u-pb-30">
                    <video className="BlogsSection-video" controls>
                      <source src="movie.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>
                  </div>

                  <div className="Text">
                    <p className="Text-proin u-pb-25">
                      Proin metus diam, euismod a enim ac, gravida sodales mi. Donec varius ex nec pharetra sagittis. Ut vehicula, enim eget posuere semper.
                    </p>
                  </div>

                  <a className="Button--readmore" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="Section Section--bgprice">
          <div className="Section-content">
            <div className="PageFooter u-pt-85 u-pb-80 u-pb-md-60">
              <div className="PageFooter-item">
                <div className="PageFooter-contactblock u-pr-40 u-pr-md-20">
                  <div className="u-pb-30 u-pb-md-15">
                    <img className="PageFooter-logo" src={logofamilia} alt="" />
                  </div>

                  <div className="PageFooter-content">
                    <div className="PageFooter-images u-pb-30 u-pb-md-15 =">
                      <div> <img className="PageFooter-img u-pr-25 u-pr-md-15" src={location} alt="" /></div>
                      <p className="Text-adress">795 Folsom Ave, Suite 600, San Francisco, CA 94107</p>
                    </div>

                    <div className="PageFooter-images u-pb-30 u-pb-md-15">
                      <div><img className="PageFooter-img u-pr-15 u-pr-md-15" src={email} alt="" /></div>
                      <p className="Text-email">fimiliastudio@example.com</p>
                    </div>

                    <div className="PageFooter-images">
                      <div><img className="PageFooter-img u-pr-20" src={phone} alt="" /></div>
                      <p className="Text-phonenumber">(123) 456-7890</p>
                    </div>
                  </div>
                </div>

                <div className="PageFooter-twitterblock">
                  <div className="u-pb-40 u-pb-md-20">
                    <h3 className="Text-footerh">TWITTER FEED</h3>
                  </div>

                  <div className="PageFooter-content">
                    <div className="PageFooter-images u-pb-40 u-pb-md-20">
                      <span><img className="PageFooter-img u-pr-15 u-pr-md-10" src={twitter} alt="" /></span>
                      <p className="Text-link">RT <a href="#" className="u-color-blue Text-information">@no1son:</a> Now this <a href="#" className="u-color-blue Text-information">http://t.co/TSfMW1qMAW</a> Awesome work guys <a href="#" className="u-color-blue Text-information">@AIRNAUTS</a></p>
                    </div>

                    <div className="PageFooter-images">
                      <span> <img className="PageFooter-img u-pr-15 u-pr-md-10" src={twitter} alt="" /> </span>
                      <p className="Text-link">Check out the wordpress version of Tucson - <a href="" className="u-color-blue Text-information">http://t.co/sBlU3GbapT</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="PageFooter-item">
                <div className="PageFooter-pictureblock">
                  <div className="u-pb-40 u-pb-md-20">
                    <h3 className="Text-footerh">PHOTOSTREAM</h3>
                  </div>

                  <div className="PageFooter-blocks">
                    <div className="PageFooter-position u-pb-15">
                      <img className="PageFooter-cub u-mr-15" src={square} alt="" />
                      <img className="PageFooter-cub u-mr-15" src={square} alt="" />
                      <img className="PageFooter-cub" src={square} alt="" />
                    </div>

                    <div className="PageFooter-position">
                      <img className="PageFooter-cub u-mr-15" src={square} alt="" />
                      <img className="PageFooter-cub u-mr-15" src={square} alt="" />
                      <img className="PageFooter-cub" src={square} alt="" />
                    </div>
                  </div>
                </div>

                <div className="PageFooter-newsletterblock u-pl-30">
                  <div className="Text u-pb-40 u-pb-md-20">
                    <h3 className="Text-footerh">NEWSLETTER</h3>
                  </div>

                  <div className="Text">
                    <p className="Text-subscribe u-pb-20">
                      Subscribe to our newsletter to receive <br /> our latest news and updates. We do not <br />spam.
                    </p>
                  </div>

                  <form action="Form">
                    <div className="u-pb-15">
                      <input className="Field Field--regular" type="text" placeholder="Enter Your Email Address" />
                    </div>

                    <div>
                      <a className="Button Button--subscribe" href="#">Subscribe</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PageFooter">
          <div className="PageFooter-bgsection u-pb-30 u-pt-30">
            <div className="Text">
              <p className="Text-studio"><span className="u-color-red">Fimilia</span> Studio © All Rights Reserved 2016</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function Contacts() {
  return (
    <div className="Page">
      <header>
        <div className="Section Section--zircon">
          <div className="Section-content">
            <nav className="SiteNavigation">
              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/">
                    HOME
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link isActive" href="/contacts">
                    Contacts
                  </a>
                </li>
              </ul>

              <ul className="SiteNavigation-column">
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/">
                    Examples
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/signin">
                    Sign In
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
            <div className="Row">
              <div className="Row-item u-pt-50 u-pb-50 u-pl-10">
                <p>Please fill the form to make it filled.</p>
              </div>

              <div className="Row-item u-pt-50 u-pb-50 u-pr-10">
                <form className="Form">
                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="name">Name:</label>
                    <input className="Field Field--regular" type="text" id="name" name="username" />
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="email">Email:</label>
                    <input className="Field Field--regular" type="email" id="email" name="email" />
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="city">City:</label>
                    <select className="Field Field--regular" name="city" id="city">
                      <option>
                        123
                      </option>

                      <option>
                        312
                      </option>
                    </select>
                  </div>

                  <div className="u-pb-20">
                    <p className="Form-label">Sex:</p>
                    <div className="Form-gender">
                      <input id="male" className="Form-control" type="radio" value="male" name="gender" checked/>
                      <label className="Form-sex" htmlFor="male">Male</label>

                      <input id="female" className="Form-control" type="radio" value="female" name="gender" />
                      <label className="Form-sex" htmlFor="female">Female</label>
                    </div>
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="massage">Message:</label>
                    <textarea rows="5" className="Field Field--regular Field--textarea" id="massage" name="massage" ></textarea>
                  </div>

                  <div className="Form-blockbutton">
                    <div className="Form-agree">
                      <input className="Form-control" type="checkbox" id="agree" name="agree" value="agree" />
                      <label htmlFor="agree">Agree</label>
                    </div>

                    <button className="Button">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default Contacts;

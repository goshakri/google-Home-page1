import React from "react";
import google from "./images/google.jpg";

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
                    Search
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="/">
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
                  <a className="Button" href="/">
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
            <div className="ContactsPage">
              <div className="Row">
                <div className="Row-item">
                  <p className="Text">Please fill the form to make it filled.</p>
                </div>

                <div className="Row-item">
                  <form className="Form">
                    <div className="Form-name">
                      <label className="Form-indent" htmlFor="name">Name:</label>
                      <input className="Field-test" type="text" id="name" name="username" />
                    </div>

                    <div className="Form-name">
                      <label className="Form-indent" htmlFor="email">Email:</label>
                      <input className="Field-test" type="email" id="email" name="email" />
                    </div>

                    <div className="Form-name">
                      <label className="Form-indent" htmlFor="city">City:</label>
                      <select className="Field-test" name="city" id="city"></select>
                    </div>

                    <div className="Form-name">
                      <p>Sex:</p>
                      <input type="radio" value="male" name="gender" />
                      <label className="Form-sex" htmlFor="male">Male:</label>
                      <input type="radio" value="female" name="gender" />
                      <label className="Form-sex" htmlFor="female">Female:</label>
                    </div>

                    <div className="Form-massage">
                      <label className="Form-indent" htmlFor="massage">Massage:</label>
                      <textarea rows="7" className="Field-area" id="massage" name="massage" ></textarea>
                    </div>

                    <div className="Form-blockbutton">
                      <div className="Form-agree">
                        <input type="checkbox" id="agree" name="agree" value="agree" />
                        <label  htmlFor="agree"> Agree</label>
                      </div>

                      <button className="Button Button--send">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default Contacts;

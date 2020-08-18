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
                  <a className="SiteNavigation-link" href="#">
                    Search
                  </a>
                </li>
                <li className="SiteNavigation-item">
                  <a className="SiteNavigation-link" href="#">
                    Contacts
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
                  <a className="Button" href="#">
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
              <div className="ContactsPage-textblock">
                <p>Please fill the from to make it filled.</p>
              </div>

              <div className="ContactsPage-formblock">
                <form className="Form">
                  <div className="Form-name">
                    <label for="name">Name:</label>
                    <input className="Field-test" type="text" id="name" name="username" />
                  </div>

                  <div className="Form-name">
                    <label for="email">Email:</label>
                    <input className="Field-test" type="email" id="email" name="email" />
                  </div>

                  <div className="Form-name">
                    <label for="city">City:</label>
                    <select className="Field-test" name="city" id="city"></select>
                  </div>

                  <div className="Form-name">
                    <p>Sex:</p>
                    <input type="radio" value="male" name="gender" />
                    <label for="male">Male:</label>
                    <input type="radio" value="female" name="gender" />
                    <label for="female">Female:</label>
                  </div>

                  <div className="Form-massage">
                    <label for="massage">Massage:</label>
                    <textarea className="Field-area" id="massage" name="massage"></textarea>
                  </div>

                  <div className="Form-blockbtn">
                    <div className="Form-agree">
                      <input type="checkbox" id="agree" name="agree" value="agree" />
                      <label for="agree"> Agree</label>
                    </div>

                    <div className="Form-btn">
                      <button className="Button Button-send">Send</button>
                    </div>
                  </div>
                </form>
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

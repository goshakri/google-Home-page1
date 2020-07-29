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

              <div className="ContactsPage-text">
                <p>Please fill the from to make it filled.</p>
              </div>

              <form className="Form">
                <div className="ContactsPage-block">
                  <div className="ContactsPage-one">
                    <label className="ContactsPage-pizza" for="name">
                      Name:
                    </label>
                    <br />
                    <input className="ContactsPage-test" type="text" id="name" name="username" />
                    <br />
                    <label className="ContactsPage-pizza" for="gmail">
                      Email:
                    </label>
                    <br />
                    <input className="ContactsPage-test" type="gmail" id="gmail" name="email" />
                    <br />
                    <label className="ContactsPage-pizza" for="city">
                      City:
                    </label>
                    <br />
                    <input className="ContactsPage-test" type="city" id="city" name="city" />
                    <br />
                  </div>

                  <div className="ContactsPage-two">
                    <label className="ContactsPage-pizza" for="sex">
                      Sex:
                    </label>
                    <br />
                    <input className="ContactsPage ContactsPage--" type="radio" id="sex" name="sex" />
                    <input className="ContactsPage ContactsPage--" type="radio" id="sex" name="sex" />
                    <br />

                    <label className="" for="massage">
                      Massage:
                    </label>
                    <br />
                    <textarea className="" id="massage" name="massage"></textarea>
                    <br />
                    <label for="agree"> Agree
                    </label>
                    <br />
                    <input type="checkbox" id="agree" name="agree" value="agree" />
                    <br />
                  </div>

                  <div className="ContactsPage-btn">
                    <button className="Button Button-send">Send</button>
                  </div>

                </div>
              </form>
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

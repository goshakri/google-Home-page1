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
                <div className="ContactsPage-text">
                  <p>Please fill the from to make it filled.</p>
                </div>
              </div>

              <div className="ContactsPage-formblock">
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
                      <select className="ContactsPage-test" name="city" id="city"></select>
                      <br />
                    </div>

                    <div className="ContactsPage-two">
                      <p>Sex:</p>
                      <input type="radio" value="male" name="gender" />
                      <label for="male">Male:</label>
                      <input type="radio" value="female" name="gender" />
                      <label for="female">Female:</label>
                      <br />

                      <label for="massage">Massage:</label>
                      <br />
                      <textarea className="ContactsPage ContactsPage--area" id="massage" name="massage"></textarea>
                      <br />

                      <div className="ContactsPage-blockbtn">
                        <div className="ContactsPage-agree">
                          <label for="agree"> Agree</label>
                          <br />
                          <input type="checkbox" id="agree" name="agree" value="agree" />
                          <br />
                        </div>

                        <div className="ContactsPage-btn">
                          <button className="Button Button-send">Send</button>
                        </div>
                      </div>
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

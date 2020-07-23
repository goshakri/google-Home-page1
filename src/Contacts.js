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

              <form className="ContactsPage-block">
                <label className="" for="name">Name:</label>
                <br />
                <input className="ContactsPage-zalupa" type="text" id="name" name="username" />
                <br />
                <label className="" for="gmail">Email:</label>
                <br />
                <input className="ContactsPage-zalupa" type="gmail" id="gmail" name="email" />
                <br />
                <label className="" for="city">City:</label>
                <br />
                <input className="ContactsPage-zalupa" type="city" id="city" name="city" />
                <br />
                <label className="" for="massage">Massage:</label>
                <br />
                <input className="ContactsPage-zalupa" type="massage" id="massage" name="massage" />
                <br />
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

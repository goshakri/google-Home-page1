import React from "react"; import google from "./images/google.jpg"; function Contacts() { return (
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

        <div className="Text">
          <h1>Please fill the from to make it filled.</h1>
        </div>

        <div className="SearchPage">
          <form className="SearchPage-region">
            <label for="name">Name:</label><br />
            <input className="" type="text" name="username" /><br />
            <label for="gmail">Email:</label><br />
            <input className="" type="gmail" name="email" /><br />
            <label for="city">City:</label><br />
            <input className="" type="city" name="city" /><br />
            <label for="massage">Massage:</label><br />
            <input className="" type="massage" name="massage" /><br />
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
); } export default Contacts;

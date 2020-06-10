import React from "react";
function App() {
  return (
    <div className="Page">
      <header className="Page-header">
        <nav>
          <ul className="SiteNavigation">
            <li className="SiteNavigation-item">
              <a href="#">About</a>
            </li>
            <li className="SiteNavigation-item">
              <a href="#">Store</a>
            </li>
          </ul>

          <ul className="SiteNavigation">
            <li className="SiteNavigation-item">
              <a href="#">Gmail</a>
            </li>
            <li className="SiteNavigation-item">
              <a href="#">Images</a>
            </li>
            <li className="SiteNavigation-item SiteNavigation-item--button">
              <a href="#">Sign In</a>
            </li>
          </ul>

        </nav>
      </header>

      <div className="Page-content">
        <a href="#" className="logo">
          <img src="assets/images/logog.png" />
        </a>

        <input type="text" className="search" />

        <div className="flexbox">
          <button className="google__search__btn">Google Seacrh</button>

          <button className="random__search__btn">I'm Feelling Lucky</button>
        </div>

        <p className="google__text">Google offered in:</p>
      </div>
      <div className="Page-footer">
        <a href="#">Adveristing</a>
        <a href="#">Business</a>
        <a href="#">How Search works</a>
        <a href="#">Privacy</a>
        <a href="#">Tems</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
}
export default App;

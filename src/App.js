import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="Page">
      <div className="Page-header">
        <div className="SiteNavigation">
          <div className="SiteNavigation-item"></div>
          <div className="SiteNavigation-item">
            <a href="#">About</a>
          </div>
          <div className="SiteNavigation-item">
            <a href="#">Store</a>
          </div>
        </div>
        <div className="SiteNavigation">
          <div className="SiteNavigation-item">
            <a href="#">Gmail</a>
          </div>
          <div className="SiteNavigation-item">
            <a href="#">Images</a>
          </div>
          <div className="SiteNavigation-item">
            <a href="#"></a>
            <img src="assets/images/bar.png" height="30px" width="30px" />
          </div>
          <div className="SiteNavigation-item SiteNavigation-item--button">
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
      <div className="Page-content">
        <a href="#" className="logo">
          <img src="assets/images/logog.png" />
        </a>

        <input type="text" className="search" />

        <div className="flexbox">
          <button className="google__search__btn">Google Seacrh</button>

          <button className="random__search__btn">I'm Feelling Lucky</button>
        </div>

        <p className="google__text">
          Google offered in:
        </p>
      </div>
      <div className="Page-footer">
        <a href="#" className="advertising">
          Adveristing
        </a>
        <a href="#" className="business">
          Business
        </a>
        <a href="#" className="allgoogle">
          How Search works
        </a>
        <a href="#" className="privacy">
          Privacy
        </a>
        <a href="#" className="nouname">
          Tems
        </a>
        <a href="#" className="settings">
          Settings
        </a>
      </div>
    </div>
  );
}

export default App;

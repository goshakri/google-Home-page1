import React from "react";
import google from "./images/google.jpg";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="Page">
      <Header />

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">
            <div className="SearchPage">
              <div className="SearchPage-picture">
                <img className="SearchPage-pictureItem" src={google} alt="" />
              </div>

              <div className="SearchPage-input">
                <input type="text" className="Field Field--search"/>
              </div>

              <div className="SearchPage-actions">
                <button className="Button Button--spaced">Google Seacrh</button>
                <button className="Button">I'm Feelling Lucky</button>
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
export default App;

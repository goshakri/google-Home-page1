import React from "react";
import google from "./images/google.jpg";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

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

              <i className="fa fa-500px" />

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

      <Footer />
    </div>
  );
}
export default App;

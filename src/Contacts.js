import React from "react";
import Header from "./components/Header.js";

function Contacts() {
  return (
    <div className="Page">
      <Header />

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">
            <div className="ContactsPage">
              <div className="Row">
                <div className="Row-item">
                  <p className="ContactsPage-description">Please fill the form to make it filled.</p>
                </div>

                <div className="Row-item">
                  <form className="Form">
                    <div className="Form-group">
                      <label className="Form-label" htmlFor="name">Name:</label>
                      <input className="Field Field--regular" type="text" id="name" name="username" />
                    </div>

                    <div className="Form-group">
                      <label className="Form-label" htmlFor="email">Email:</label>
                      <input className="Field Field--regular" type="email" id="email" name="email" />
                    </div>

                    <div className="Form-group">
                      <label className="Form-label" htmlFor="city">City:</label>
                      <select className="Field Field--regular" name="city" id="city">
                        <option>
                          123
                        </option>

                        <option>
                          312
                        </option>
                      </select>
                    </div>

                    <div className="Form-group">
                      <p className="Form-label">Sex:</p>
                      <div className="Form-gender">
                        <input id="male" className="Form-control" type="radio" value="male" name="gender" checked/>
                        <label className="Form-sex" htmlFor="male">Male</label>

                        <input id="female" className="Form-control" type="radio" value="female" name="gender" />
                        <label className="Form-sex" htmlFor="female">Female</label>
                      </div>
                    </div>

                    <div className="Form-group">
                      <label className="Form-label" htmlFor="massage">Message:</label>
                      <textarea rows="5" className="Field Field--regular Field--textarea" id="massage" name="massage" ></textarea>
                    </div>

                    <div className="Form-blockbutton">
                      <div className="Form-agree">
                        <input className="Form-control" type="checkbox" id="agree" name="agree" value="agree" />
                        <label htmlFor="agree">Agree</label>
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

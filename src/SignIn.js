import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function SignIn() {
  return (
    <div className="Page">
      <Header />

      <main className="Page-content">
        <div className="Section">
          <div className="Section-content">
            <div className="Register">
              <div className="Register">

                <form className="Form">

                  <div className="Register-text u-pb-50">
                    <h1 className="Text">Welcome</h1>
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="email">Email</label>
                    <input className="Field Field--regular"type="email" id="email" name="email" />
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="email">Password</label>
                    <input className="Field Field--line" type="password" id="password" name="password" />
                  </div>

                  <button> LOGIN </button>

                  <p>Don't have an account? Sign In</p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
export default SignIn;

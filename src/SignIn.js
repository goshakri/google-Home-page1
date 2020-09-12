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
              <div className="Register u-pt-50 u-pb-50 u-pl-10">

                <h1>Welcome</h1>

                <form className="Form">
                  <div className="">
                    <label className="Form-label" htmlFor="email">Email</label>
                    <input className="Field Field--regular"type="email" id="email" name="email" />
                  </div>

                  <div className="">
                    <label className="Form-label" htmlFor="email">Password</label>
                    <input className="Field Field--regular" type="password" id="password" name="password" />
                  </div>

                  <button> LOGIN </button>

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

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

              <div className="">
                <h1 className="Text">Welcome</h1>
              </div>

                <form className="Form">

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="email">Email</label>
                    <input className="Field"type="email" id="email" name="email" />
                  </div>

                  <div className="u-pb-20">
                    <label className="Form-label" htmlFor="email">Password</label>
                    <input className="Field" type="password" id="password" name="password" />
                  </div>

                  <div className="u-pb-20">
                    <button>LOGIN</button>
                  </div>

                  <p>Don't have an account? Sign In</p>

                </form>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
export default SignIn;

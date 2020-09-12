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
            <div className="Row">
              <div className="Row-eddition u-pt-50 u-pb-50 u-pr-10">

                <h1>Welcome</h1>

                <form>
                  <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                  </div>

                  <div className="">
                    <label htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" />
                  </div>

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

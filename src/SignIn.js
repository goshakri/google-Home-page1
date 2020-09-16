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
                <p>Don't have an account? Sign In</p>
              </div>

                <form className="Form-supplement">
                  <div className="Form-possition">

                      <input className="Field-line"type="email" placeholder="Email" required />
                      <input className="Field-line" type="password" placeholder="Password" required />

                    <div className="u-pb-20">
                      <button>LOGIN</button>
                    </div>

                  </div>
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

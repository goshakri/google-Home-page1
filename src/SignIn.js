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

              <form className="Form">

                <div className="Text">
                  <h1>Welcome</h1>
                </div>

                <div className="Form-supplement">
                  <input className="Field-line"type="email" placeholder="Email" required />
                  <input className="Field-line" type="password" placeholder="Password" required />

                  <div className="">
                    <button>LOGIN</button>
                  </div>

                  <div className="">
                    <p>Don't have an account? Sign In</p>
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

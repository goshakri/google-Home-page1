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
            <div className="WrapLogin u-pt-90">
              <form className="Form">
                <span className="Text Text--login u-pb-40">Login</span>

                <div className="u-pt-5">
                  <a href="#">Login with Facebook</a>
                </div>

                <div className="u-pt-5">
                  <a href="#">Login with Twitter</a>
                </div>

                <div className="Input">
                  <input className="Field Field--register" type="text" name="email" placeholder="Email" ></input>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default SignIn;

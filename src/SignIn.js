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

                <div className="Register-rh1">
                  <h1 className="Logo">Welcome</h1>
                </div>

                <div className="">
                  <input className="Field Field--email" type="text" placeholder="Email" required></input>
                </div>

                <div className="">
                  <input className="Field Field--password" type="text" placeholder="Password" required></input>
                </div>

                <div className="">
                  <button>LOGIN</button>
                </div>

                <div className="">
                  <p>
                    Don't have an accoutn? <a href="#">Sign Up</a>
                  </p>
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

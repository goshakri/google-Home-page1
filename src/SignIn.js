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
            <div className="WrapLogin u-pt-60">
              <form className="Form">
                <span className="Text Text--login u-pb-40">Login</span>

                <div className="u-pt-5">
                  <a className="Button Button--linkbgone" href="#">
                  <span className="FontAwesome FontAwesome--socialnetwork">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </span>
                  Login with Facebook</a>
                </div>

                <div className="u-pt-10">
                  <a className="Button Button--linkbgtwo" href="#">
                  <span className="FontAwesome FontAwesome--socialnetwork">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                  Login with Twitter
                  </a>
                </div>

                <span className="Text Text--loginwithemail u-pt-50">Login with email</span>

                <div className="Input u-pt-20">
                  <input className="Field Field--register" type="text" name="email" placeholder="Email" ></input>
                </div>

                <div className="Input u-pt-10">
                  <span className="FontAwesome FontAwesome--eye">
                    <input className="Field Field--register" type="password" name="password" placeholder="Password"></input>
                    <button className="Button Button--fontawesome"><i class="fa fa-eye" aria-hidden="true"></i></button>
                  </span>
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

import "./styles/login.css";
export const LoginSignUp = () => {
  return (
    <div className="login-sign-up-container">
      <div className="login-sign-up-box">
        <div className="login-sign-up-header">
          <div className="login-sign-up-header-content">
            <div className="login-sign-up-header-content1">
              PERSONAL ACCOUNT
            </div>
            <div className="login-sign-up-header-content2">MYBIZ ACCOUNT</div>
          </div>
        </div>
        <div className="login-sign-up-word">Login/Signup</div>
        <div className="login-sign-up-email_mobile">
          <div className="login-sign-up-email-mobile-word">
            <label htmlFor="username">Email or Mobile Number</label>
          </div>
          <div className="login-sign-up-email-mobile-input">
            <input type="text" placeholder="Enter email or mobile number" />
          </div>
        </div>
        <div className="login-sign-up-email-mobile-continue_btn">
          <button>CONTINUE</button>
        </div>
        <p className="login-sign-up-email-mobile-option_word">
          <span>Or Login/Signup With</span>
        </p>
        <div className="login-sign-up-email-mobile-google_signup_btn">
          <div className="login-sign-up-email-mobile-google_logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </div>
          {/* <span>Login with Google</span> */}
          
          <div className="login-sign-up-email-mobile-google_login_word"><a href="">Login with Google</a></div>
        </div>
        <div className="login-sign-up-terms_conditions">By proceeding, you agree to MakeMyTrip's  Privacy Policy, User Agreement and T&Cs</div>
      </div>
    </div>
  );
};

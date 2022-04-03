import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSignUp } from "../../LoginSignup";
import { HomePageBookings } from "../HomePageBookings/HomePageBookings";
import "./HomeNavbar.css"
export const HomeNavbar = () => {
  const navigate = useNavigate();
  const [islogin, setisLogin] = useState(false);
  return (
     <div className="home-navbar">
        <div className="home-upper-navbar">
      <div className="home-upper-navbar-logo">
        <img
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          alt="Make My Trip logo"
        />
      </div>
      <div className="home-upper-navbar-menu">
        <button className="home-upper-navbar-myBizz">
          <div>
              <img src="" alt="" />
          </div>
          <div>
            <p>
              Introducing myBiz <br />
              Business Travel Solution
            </p>
          </div>
        </button>
        <button className="home-upper-navbar-myTrip">
        <div>
              <img src="" alt="" />
          </div>
          <div>
            <p>
              My Trips <br />
              Manage your bookings
            </p>
          </div>
        </button>
        <div className="home-upper-navbar-login">
            <button onClick={()=>setisLogin(true)}>Login or Create Account <i class="fa fa-angle-down" aria-hidden="true"></i></button>
        </div>
        <div className="home-upper-navbar-language">
          <button>IN | ENG | INR</button>
        </div>
      </div>
    </div>
    <div>
      <HomePageBookings/>
    </div>

    
    {
      islogin && <LoginSignUp setisLogin={()=>setisLogin(false)}/>
    }
     </div>
   
  );
};

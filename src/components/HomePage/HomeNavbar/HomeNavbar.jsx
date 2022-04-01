import "./HomeNavbar.css"
export const HomeNavbar = () => {
  return (
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
            <select name="" id="">
                <option value="">Login or Create Account</option>
            </select>
        </div>
        <div className="home-upper-navbar-language">
        <select name="" id="">
                <option value="">IN|ENG|INR</option>
            </select>
        </div>
      </div>
    </div>
  );
};
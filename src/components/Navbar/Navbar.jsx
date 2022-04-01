import "./Navbar.css"
export const Navbar=()=>{
   return(
       <div className="Container-Navbar">
        <div className="Navbar-header">
            <div className="logo"><img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" alt="" /></div>
            <div className="Navbar-header-right">
                <li>Introduction myBizMake<br></br> My Trip For Bussiness</li>
                <li>My Tips</li>
                <li>Login or create Account</li>
                <li>
                    currncy
                </li>
            </div>
        </div>
        <div className="Booking-options">
            <div className="booking-icons">
                <li className="booking-icon">Flight</li>
                <li className="booking-icon">Hotels</li>
                <li className="booking-icon">HomeStay</li>
                <li className="booking-icon">Holiday Package</li>
                <li className="booking-icon">Train</li>
                <li className="booking-icon">Buses</li>
                <li className="booking-icon">Cabs</li>
                <li className="booking-icon">Visa</li>
                <li className="booking-icon"Charter Flights></li>
                <li className="booking-icon">Activities</li>
            </div>
        </div>
       </div>
   )
}
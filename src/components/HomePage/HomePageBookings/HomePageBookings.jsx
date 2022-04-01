import "./HomePageBookings.css"
export const HomePageBookings = ()=>{
    const today = new Date();
    let date = today.getDate()+'-' + new Date().toLocaleString("en-US", { month: "long" }) + '-'+today.getFullYear();
    return <div>
        <div className="homepage-bookings-component">
        <div className="homepage-bookings-icons-div">
            <div className="homepage-bookings-icon-holder">
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Flights</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Hotels</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Homestays</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Holiday Packages</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Trains</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Buses</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Cabs</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Visa</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Chattered Flights</p>
            </div>
            <div className="homepage-bookings-icon">
                <img src="" alt="" />
                <p>Acitivites</p>
            </div>
            </div>     
        </div>
        <div className="homepage-bookings-flights">
            <div></div>
            <div className="homepage-bookings-type">
                <div className="homepage-bookings-type-radio-button">
                    <div>
                        <h3><input type="radio" />ONEWAY</h3>
                    </div>
                    <div>
                        <h3><input type="radio" />ROUND TRIP</h3>
                    </div>
                    <div>
                        <h3><input type="radio" />MULTI CITY</h3>
                    </div>
                </div>
                <div>
                    <p>Book International and Domestic Flights</p>
                </div>
            </div>
            <div className="homepage-bookings-search">
                <div className="homepage-booking-search-source">
                    <h3>FROM</h3>
                    <h2>Mumbai</h2>
                    <h3>BOM, Chhatrapati Shivaji International</h3>
                    <h3>Airport</h3>
                </div>
                <div className="homepage-booking-search-destination">
                    <h3>TO</h3>
                    <h2>New Delhi</h2>
                    <h3>DEL, Indira Gandhi International Airport</h3>
                </div>
                <div className="homepage-booking-search-departure">
                    <h3>DEPARTURE</h3>
                    <h4>{date}</h4>
                </div>  
                <div className="homepage-booking-search-return">
                    <h3>RETURN</h3>
                    <h4>
                        Tap to add a return date for bigger discounts
                    </h4>
                </div>
                <div className="homepage-booking-search-travellers-class">
                    <h3>TRAVELLERS & CLASS</h3>
                    <h2>1 Traveller</h2>
                    <h4>Economy/Premium Economy</h4>
                    <h4>Group Booking Now Available !</h4>
                </div>
            </div>
            <div className="homepage-bookings-fair-type">
                <div>
                    <p>Select A Fare Type:</p>
                </div>
                <div>
                    <h5><input type="radio" />Regular Fares</h5>
                </div>
                <div>
                <h5><input type="radio" />Armed Forces Fares <span>NEW</span></h5>
                </div>
                <div>
                <h5><input type="radio"/>Student Fares</h5>
                </div>
                <div>
                <h5><input type="radio" />Senior Citizen Fares</h5>
                </div>
                <div>
                <h5><input type="radio" />Double Seat Fares</h5>
                </div>
            </div>
        </div>
        <div className="homepage-bookings-search-button">
                <button>Search</button>
                <p>Explore More</p>
            </div>
        </div>
    </div>
}
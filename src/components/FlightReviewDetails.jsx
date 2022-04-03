import { useNavigate } from "react-router-dom";
import "./styles/flight-review-details.css";
export const FlightReviewDetails = () => {
  const today = new Date();
    let date = today.getDate()+1+'-' + new Date().toLocaleString("en-US", { month: "short" }) + '-'+today.getFullYear();
    const navigate = useNavigate();
  return (
    <div>
      <div id="flight-review-details-header">
        <div id="flight-review-details-header-container">
          <div id="complete-your-booking">
            <h2>Complete your booking</h2>
          </div>
          <div id="header-options">
            <ul>
              <li>Flights Summary</li>
              <li>Travel Insurance</li>
              <li>Travel Details</li>
              <li>Seat&Meals</li>
              <li>Add-ons</li>
            </ul>
          </div>
        </div>
      </div>
      <span class="bgGradient"></span>
      <div id="body-container">
        <div id="body-container-middle">
          <div id="body-container-left">
            <div id="body-container-left-div1">
              <div id="journey-section">
                <div class="componentContainer padding20 appendBottom20">
                  <div class="appendBottom20">
                    <section id="flight-from-to-container">
                      <div id="flight-from-to-names">
                        <div>
                          <h2>
                            <b>New Delhi - Bengaluru</b>
                          </h2>
                          <p>
                            <span>{date}</span>
                            <span>Non Stop · 2h 55m</span>
                          </p>
                        </div>
                        <div class="makeflexcolumn">
                          <p>Cancellation Fees Apply</p>
                          <p>View Rules</p>
                        </div>
                      </div>
                      <div id="flight-details-airport">
                        <div id="plane-details">
                          <div id="plane-details-left">
                            <span></span>
                            <p>SpiceJet SG-191</p>
                          </div>
                          <div id="plane-details-right">Economy</div>
                        </div>
                        {/* <div id="flight-details-itenary">
                          <div id="flex-one">
                            <div id="flight-details-from">
                              <div></div>
                              <div></div>
                            </div>
                            <div></div>
                            <div></div>
                          </div>
                          <div></div>
                        </div> */}
                        <div class="flightItenary">
                          <div class="flexOne">
                            <div class="itenaryLeft">
                              <div class="makeFlex gap-x-10 ">
                                <div class="makeFlex time-info-ui">
                                  <span class="fontSize14 blackFont">
                                    06:05
                                  </span>
                                  <span class="layoverCircle"></span>
                                </div>
                                <div>
                                  <span class="fontSize14 blackFont">
                                    New Delhi{" "}
                                  </span>
                                  <span class="fontSize14">
                                    . Indira Gandhi International Airport,
                                    Terminal 1D
                                  </span>
                                </div>
                              </div>
                              <div class="layover">
                                <span class="fontSize14">2h 55m</span>
                              </div>
                              <div class="makeFlex gap-x-10 overideBg">
                                <div class="makeFlex time-info-ui">
                                  <span class="fontSize14 blackFont">
                                    09:00
                                  </span>
                                  <span class="layoverCircle"></span>
                                </div>
                                <div>
                                  <span class="fontSize14 blackFont">
                                    Bengaluru{" "}
                                  </span>
                                  <span class="fontSize14">
                                    . Bengaluru International Airport, Terminal
                                    1
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="itenaryRight">
                            <ul class="itenaryList">
                              <li>
                                <span class="fontSize12">Baggage</span>
                                <span class="fontSize12">Check-in</span>
                                <span class="fontSize12">Cabin</span>
                              </li>
                              <li>
                                <span class="fontSize12 blackFont">ADULT</span>
                                <span class="fontSize12 blackFont">
                                  15 Kgs (1 piece only)
                                </span>
                                <span class="fontSize12 blackFont">
                                  7 Kgs (1 piece only)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="appendTop20"></div>
                </div>
              </div>

              <div id="IMP_INFO" class="oneCard-element">
                <div class="componentContainer paddingTop20">
                  <div class="importantInfoTop">
                    <h2 class="fontSize18 blackFont appendBottom12">
                      Important Information
                    </h2>
                  </div>
                  <p class="blackFont fonSize makeFlex hrtlCenter appendLeft20">
                    Check travel guidelines issued by Karnataka below:
                  </p>
                  <ul class="infoList">
                    <li>
                      {" "}
                      <b> COVID test/vaccination rules </b> : Travellers from
                      Maharashtra, Kerala and Goa, entering Karnataka must
                      either carry a final vaccination certificate (both doses
                      done) or a negative RT-PCR report with a sample taken
                      within 72 hours before arrival. RT-PCR test timeline
                      starts from the swab collection time. Travellers might not
                      be allowed to board their flights if they are not carrying
                      a valid test report/vaccination certificate. Travellers
                      from all states will have to undergo thermal screening at
                      the airport. Following category of travellers are exempted
                      from the above-mentioned requirement: Constitutional
                      functionaries and healthcare professionals, children below
                      the age of 2 years, travellers arriving in emergency
                      situations such as a death in the family, medical
                      treatment might have to take an on-arrival test and
                      further action will be decided basis the test result,
                      short term travellers (2 days or less) from Maharashtra do
                      not need to carry a negative test report as long as they
                      have a return ticket and vaccination certificate (all
                      doses done).
                    </li>
                    <li>
                      {" "}
                      <b> Quarantine rules </b> : All students arriving from
                      Kerala must undergo mandatory 7 days of institutional
                      quarantine before they start their studies. No quarantine
                      for other travellers arriving in Karnataka.
                    </li>
                    <li>
                      {" "}
                      <b> Pre-registration or e-pass rules </b> : Download and
                      update the Aarogya Setu app.{" "}
                    </li>
                    <li>
                      For the complete list of travel guidelines issued by
                      Indian States and UTs,
                      <a
                        class="appendLeft3"
                        href="https://www.makemytrip.com/promos/mysafety-state-guidelines.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {" "}
                        click here
                      </a>
                    </li>
                    <li>
                      If you have arrived on any international flight and are
                      taking a connecting domestic flight,{" "}
                      <a href="https://www.makemytrip.com/flights/international-travel-guidelines.html">
                        {" "}
                        click here{" "}
                      </a>
                      . Please check the ‘Travelling to India’ tab.
                    </li>
                    <li>
                      Since guidelines are dynamic and might change regularly,
                      we strongly recommend that you check the full text of the
                      guidelines issued by the Government before travelling. We
                      accept no liability in this regard.
                    </li>
                    <li>
                      Remember to web check-in before arriving at the airport;
                      carry a printed or soft copy of the boarding pass.
                    </li>
                    <li>
                      Please reach at least 2 hours prior to flight departure.
                    </li>
                    <li>
                      <u>
                        <b>
                          The latest DGCA guidelines state that it is compulsory
                          to wear a mask that covers the nose and mouth properly
                          while at the airport and on the flight. Any lapse
                          might result in de-boarding.
                        </b>
                      </u>
                      <a
                        class="appendLeft3"
                        href="https://twitter.com/DGCAIndia/status/1370634419430584320"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {" "}
                        Know More
                      </a>
                    </li>
                    <li>
                      Remember to download the baggage tag(s) and affix it on
                      your bag(s).
                    </li>
                  </ul>
                  <p class="blackFont fonSize makeFlex hrtlCenter appendLeft20">
                    Baggage information
                  </p>
                  <ul class="infoList">
                    <li>
                      Carry no more than 1 check-in baggage and 1 hand baggage
                      per passenger. Additional pieces of Baggage will be
                      subject to additional charges per piece in addition to the
                      excess baggage charges.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="insurance"></div>
              <div id="traveller-detail">
                <div class="componentContainer appendTop15 appendBottom20">
                  <div>
                    <div class="bookingDetailsForm">
                      <p class="bookingDetails-ptag">
                        Booking details will be sent to
                      </p>
                      <div id="adultitem">
                        <div className="flexitems">
                          <label htmlFor="">Country Code</label>
                          <div id="India">India(91)</div>
                        </div>
                        <div className="flexitems">
                          <label htmlFor="">Mobile No.</label>
                          <input type="number" placeholder="Mobile No" />
                        </div>
                        <div className="flexitems">
                          <label htmlFor="">Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fare-lock"></div>
              <div id="continue-btn">
                <div class="makeFlex hrtlCenter spaceBetween appendTop15">
                  <button class="lato-black button buttonPrimary extraPadBtn fontSize16 " onClick={()=>{
                    alert(`Your flight is booked \nThankyou for booking`);
                    navigate("/");
                  }}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div id="body-container-left-div2"></div>
            <div id="body-container-left-div3"></div>
          </div>
          <div id="body-container-right">
            <div id="FARE_SUMMARY">
              <section class="fareSummary">
                <div>
                  <p class="fontSize18 blackFont">Fare Summary</p>
                </div>
                <div class="fareTypeWrap">
                  <div class="fareRow">
                    <div class="makeFlex hrtlCenter pointer">
                      <span class="appendRight10 appendTop5">
                        <span
                          class="iconPlusImg bgProperties"
                          // style='background-image: url("//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png");'
                        ></span>
                      </span>
                      <span class="fareHeader">Base Fare</span>
                    </div>
                    <span class="fontSize14 darkText">₹ 4,575</span>
                  </div>
                </div>
                <div class="fareTypeWrap">
                  <div class="fareRow">
                    <div class="makeFlex hrtlCenter pointer">
                      <span class="appendRight10 appendTop5">
                        <span
                          class="iconPlusImg bgProperties"
                          // style='background-image: url("//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png");'
                        ></span>
                      </span>
                      <span class="fareHeader">Fee &amp; Surcharges</span>
                    </div>
                    <span class="fontSize14 darkText">₹ 748</span>
                  </div>
                </div>
                <div class="fareTypeWrap">
                  <div class="fareRow">
                    <div class="makeFlex hrtlCenter pointer">
                      <span class="appendRight10 appendTop5">
                        <span
                          class="iconMinusImg bgProperties"
                          // style='background-image: url("//jsak.mmtcdn.com/flights/assets/media/ic_collapse.83c3e92a.png");'
                        ></span>
                      </span>
                      <span class="fareHeader">Other Services</span>
                    </div>
                  </div>
                  <div class="fareContentWrap">
                    <div class="fareSubList">
                      <p class="fareRow appendTop5">
                        <span class="makeFlex bottom">
                          <span class="fontSize14 darkText ">Charity</span>
                        </span>
                        <span class="fontSize14 darkText ">
                          <span>₹ 10</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="fareFooter">
                  <p class="fareRow">
                    <span class="fontSize16 blackFont">Total Amount</span>
                    <span class="fontSize16 blackFont">₹ 5,333</span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

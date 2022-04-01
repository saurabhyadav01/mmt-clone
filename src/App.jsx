import logo from './logo.svg';
import './App.css';
import {HomeNavbar} from "./components/HomePage/HomeNavbar/HomeNavbar"
import { HomePageBookings } from './components/HomePage/HomePageBookings/HomePageBookings';
import { Footer } from './components/HomePage/Footer/Footer';
import { SecondFooter } from './components/HomePage/Footer/SecondFooter';
import { MainContentFooter } from './components/HomePage/MainContentFooter/MainContentFooter';
import { MainContent } from './components/HomePage/MainContent/MainContent';
import {Flight} from "./components/HomePage/Flight/Flight";
import {ReviewBookingHeader} from "./components/HomePage/Booking/ReviewBookingHeader"
function App() {
  return (
    <div>
      
      <HomeNavbar/>
      <MainContent/>
      <SecondFooter/>
      <Footer/>
      {/* <Flight/> */}
      {/* <ReviewBookingHeader /> */}
    </div>
  );
}

export default App;

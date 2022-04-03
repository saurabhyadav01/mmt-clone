import logo from './logo.svg';
import './App.css';
import {HomeNavbar} from "./components/HomePage/HomeNavbar/HomeNavbar"
import { HomePageBookings } from './components/HomePage/HomePageBookings/HomePageBookings';
import { Footer } from './components/HomePage/Footer/Footer';
import { SecondFooter } from './components/HomePage/Footer/SecondFooter';
import { MainContentFooter } from './components/HomePage/MainContentFooter/MainContentFooter';
import { MainContent } from './components/HomePage/MainContent/MainContent';
import {ReviewBookingHeader} from "./components/HomePage/Booking/ReviewBookingHeader"
import { Route, Routes } from 'react-router-dom';
import { SearchFlights } from './components/Search/SearchFlights';
function App() {
  return (
    <div>
      
      <HomeNavbar/>

      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/search" element={<SearchFlights />} />

      </Routes>
      <SecondFooter/>
      <Footer/>
      {/* <Flight/> */}
      {/* <ReviewBookingHeader /> */}
    </div>
  );
}

export default App;

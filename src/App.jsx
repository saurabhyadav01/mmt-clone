import logo from './logo.svg';
import './App.css';
import {HomeNavbar} from "./components/HomePage/HomeNavbar/HomeNavbar"
import { HomePageBookings } from './components/HomePage/HomePageBookings/HomePageBookings';
import { Footer } from './components/HomePage/Footer/Footer';
import { SecondFooter } from './components/HomePage/Footer/SecondFooter';
function App() {
  return (
    <div className="App">
      <HomeNavbar/>
      <HomePageBookings/>
      <SecondFooter/>
      <Footer/>
    </div>
  );
}

export default App;

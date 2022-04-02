import { MainContentFooter } from "../MainContentFooter/MainContentFooter"
import { MainContentAppDownload } from "./MainContentAppDownload/MainContentAppDownload"
import { MainContentTrip } from "./MainContentTrip/MainContentTrip"
import {MainContentCites} from "./MainContentCities/MainContentCites"
import {CarouselApplication} from "../carousel/carousel";
import ExploreSearch from "./ExploreSearch/ExploreSearch";
import "./MainContent.css";
export const MainContent = ()=>{
    return (
    <div className="homepage-main-content-body">
    <div className="homepage-main-content">
        <ExploreSearch/>
        {/* <CarouselApplication/> */}
        <MainContentAppDownload/>
        <MainContentTrip/>
        <MainContentCites/>
        <MainContentFooter/>
    </div>
    </div>
    )
}
import { MainContentFooter } from "../MainContentFooter/MainContentFooter"
import { MainContentAppDownload } from "./MainContentAppDownload/MainContentAppDownload"
import { MainContentTrip } from "./MainContentTrip/MainContentTrip"
import {MainContentCites} from "./MainContentCities/MainContentCites"
import {CarouselApplication} from "../carousel/carousel";
import ExploreSearch from "./ExploreSearch/ExploreSearch";
import {MainContentOffers} from "./MainContentOffers/MainContentOffers";
import "./MainContent.css";
import {MainContentHandpicked} from "./MainContentHandpicked/MainContentHandpicked"
export const MainContent = ()=>{
    return (
    <div className="homepage-main-content-body">
    <div className="homepage-main-content">
        <ExploreSearch/>
        {/* <MainContentOffers/> */}
        {/* <CarouselApplication/> */}
        <MainContentHandpicked/>
        <MainContentAppDownload/>
        <MainContentTrip/>
        <MainContentCites/>
        <MainContentFooter/>
    </div>
    </div>
    )
}
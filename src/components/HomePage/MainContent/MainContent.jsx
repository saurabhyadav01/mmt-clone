import { MainContentFooter } from "../MainContentFooter/MainContentFooter"
import { MainContentAppDownload } from "./MainContentAppDownload/MainContentAppDownload"
import { MainContentTrip } from "./MainContentTrip/MainContentTrip"
import {MainContentCites} from "./MainContentCities/MainContentCites"
import {CarouselApplication} from "../carousel/carousel"
export const MainContent = ()=>{
    return <div>
        <MainContentAppDownload/>
        <MainContentTrip/>
        <MainContentCites/>
        <MainContentFooter/>
        <CarouselApplication/>
    </div>
}
import { MainContentFooter } from "../MainContentFooter/MainContentFooter"
import { MainContentAppDownload } from "./MainContentAppDownload/MainContentAppDownload"
import { MainContentTrip } from "./MainContentTrip/MainContentTrip"

export const MainContent = ()=>{
    return <div>
        <MainContentAppDownload/>
        <MainContentTrip/>
        <MainContentFooter/>
    </div>
}
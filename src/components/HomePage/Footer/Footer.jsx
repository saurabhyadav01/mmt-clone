import "./Footer.css";
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
export const Footer = ()=>{
    return <div className="homepage-footer">
        <div>
            <div>
            <FaTwitter/>
            </div>
            <div>
            <FaFacebookF/>
            </div>
        </div>
        <div>
            <h3>© 2022 MAKEMYTRIP PVT. LTD.</h3>
            <h3>Country India USA UAE</h3>
        </div>
    </div>
}
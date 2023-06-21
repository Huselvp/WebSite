import Logo from "../../assets/LOGO.jpg"
import "./NavBar.css"
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
function Navbar(){
    return(
    <div className="Navbar">
    
        <img src={Logo} className="Navbar-logo" />
        <span className="Navbar-text">DOCTORS HUMANITARIAN AID CHARITY ORGANIZATION</span>
    <div className="Navbar-buttons">
            <ul>
                <li>Home</li>
                <li>Donate</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
        <div>
      <FaFacebook className="icon"/>
      <FaInstagram className="icon"/>
      <MdEmail className="icon" />
    </div>
    </div>

    )
}
export default Navbar;

// FOOTER.jsx
import "./Footer.css";
import logo1 from "../../assets/images/LOGO(1).png";


const Footer = () => {
    return (
        <footer> 
            <div className="logo1">
                <img src={logo1} alt="Logo blanc" />
            </div>
            <p>© 2020 Kasa.<span className="break-point"></span> All rights reserved</p>
        </footer>
    )
}

export default Footer 
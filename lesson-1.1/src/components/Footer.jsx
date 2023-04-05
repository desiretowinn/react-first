import img3 from "../assets/images/insta.svg"

const Footer = () => {
    return (
        <>

            {/* ----- footer start ----- */} 
    
    <footer>
    
    <div className="footer">
    <a href="#" className="footer-link"><img src={img3} alt="" className="footer-img" /></a>
    <a href="#" className="footer-link"><img src={img3} alt="" className="footer-img" /></a>
    <a href="#" className="footer-link"><img src={img3} alt="" className="footer-img" /></a>
    <a href="#" className="footer-link"><img src={img3} alt="" className="footer-img" /></a>
    </div>
    
    <a href="#" className="footer-liink">Copyright ©2020 All rights reserved</a>
    
    </footer>
    
    {/* ----- footer end ----- */} 

        </>
    )
}

export default Footer;
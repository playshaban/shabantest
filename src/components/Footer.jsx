import logo2 from '../images/logo2.png';

const Footer = ()=>
{
    return(
        <footer>
        <div className="Details" >
          <div className="Left">
            <img src={logo2} alt="logo White"></img>
            <p> <i class="fas fa-map-marker-alt"></i> Bankok , Thailand 184000 </p>
            <p><i class="fas fa-headset"></i> +00 0000 00000</p>
            <p><i class="fas fa-envelope"></i> contact@conqt.com</p>
            <p><i class="fas fa-clock"></i> Open time 9:00AM to 6:00PM</p>
          </div>
          <div className = "Right">
            <div className="Links">
              <h2>
                  ABOUT CONQT 
              </h2>
              <ul>
                <li> About Us</li>
                <li>Contact Us</li>
                <li>Find Us</li>
                <li>Find Vendor</li>
                <li>Find Customer</li>
                <li>ConsQT University</li>
              </ul>
            </div>

            <div className="Links">
              <h2>
                  FOR BUSINESS
              </h2>
              <ul>
                <li>FAQs</li>
                <li>Write With Us</li>
                <li>Sell With Us</li>

              </ul>
            </div>

            <div className="Links">
              <h2>
                  SERVICES
              </h2>
              <ul>
                <li>Call Expert </li>
                <li>Cal Customer Service </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="Payments" >
          <div className="Icons">
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-paypal"></i>
            <i class="fab fa-cc-jcb"></i>
            <i class="fab fa-cc-discover"></i>
          </div>
       
        </div>
        <div className="Copyright" >
          <p><strong>Ⓒ2022 ConQt All Right Reserved. Design By Tech Curve AI & Innovation Co., Ltd </strong> </p>
          <p>Built on React <i class="fab fa-react"></i> By Shaban Khan</p>
        </div>
      </footer>
    )
}

export default Footer;
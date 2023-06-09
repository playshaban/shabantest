import logo from '../images/logo.png';

const Header = ()=>
{
    return (
        <header>
        <div className="HeadL1" >
          <div className="HeadL1Left">
            <img src={logo} alt="logo"></img>
            <div>
              <button>
                Find Vendor
              </button>
              <button>
                Find Customer
              </button>
            </div>
          </div>
          <div className="HeadL1Right">
            <button>
              <i class="fas fa-phone    "></i> Call Expert
            </button>
            <div className="UserAction">
              <i class="fa fa-list" aria-hidden="true"></i>
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="HeadL2" >
          <nav>
            <a href="/">All Catagories <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
            <a href="/">By Industry <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <a href="/">By Department <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <a href="/">Compare Products</a>
            <a href="/">Sell Your Products</a>
            <a href="/">Offer</a>
          </nav>
          <div className="HeadL2Right">
            <a href="/">Write a review</a>
            <a href="/"> Need Help <i class="fa fa-question-circle" aria-hidden="true"></i></a>
          </div>
        </div>
      </header>
    )
}

export default Header;
const SpecialOffers = () =>
{
    return(
        <div className="SpecialOffer">
          
          <a href="#FirstSO">
            <button>
              <i class="fas fa-angle-left    "></i>
            </button>
          </a>

          <div className="Box">

         

            <div className="Boxes">
                1
            </div>

            <div className="Boxes">
              2
            </div>

            <div className="Boxes">
              3
            </div>

            <div className="Boxes">
              4
            </div>

            <div className="Boxes">
              5
            </div>

            <div className="Boxes" id="#lastSO">
              6
            </div>

          </div>

          <a href="#last">
            <button>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </a>
      </div>
    )
}

export default SpecialOffers;
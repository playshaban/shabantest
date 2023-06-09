import image from '../images/1080.png';

const FlashSale =()=>
{
    return (
        <div className="Content FlashSale">
            <div className="Title">
              <h1>FLASH SALE 🔥</h1>
              <p>ENDING IN <span>00</span> : <span>00</span> : <span>00</span> </p>
            </div>
            <div className="Box">
              <div className="Boxes">
                <img src={image} alt="visual of product"></img>
                <h3>Product Name</h3>
                <div class="Stars" style={{"--rating": "4.4", "aria-label":"Rating of this product is 4.4 out of 5."}}>(4.4)</div>
                <div className = "Tag"> 
                  <span className="KeyWord">Feature </span>
                  <span className="KeyWord">Plan </span>
                  <span className="KeyWord">Write Review </span>
                </div>
              </div>
              <div className="Boxes">
                <img src={image} alt="visual of product"></img>
                <h3>Product Name</h3>
                <div class="Stars" style={{"--rating": "5", "aria-label":"Rating of this product is 5 out of 5."}}>(5)</div>
                <div className = "Tag"> 
                  <span className="KeyWord">Feature </span>
                  <span className="KeyWord">Plan </span>
                  <span className="KeyWord">Write Review </span>
                </div>
              </div>
              <div className="Boxes">
                <img src={image} alt="visual of product"></img>
                <h3>Product Name</h3>
                <div class="Stars" style={{"--rating": "4.5", "aria-label":"Rating of this product is 4.5 out of 5."}}>(4.5)</div>
                <div className = "Tag"> 
                  <span className="KeyWord">Feature </span>
                  <span className="KeyWord">Plan </span>
                  <span className="KeyWord">Write Review </span>
                </div>
              </div>
            </div>
          </div>
    )
}
export default FlashSale;
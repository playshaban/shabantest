import image from '../images/1080.png';


const SpecialOffer = ()=>
{
    return(
      <div className="Content SpecialOffers">
            <div className="Title">
              <h1>SPECIAL OFFERS FOR YOU</h1>
            </div>
            <div className="Box">
            <div className="Boxes">
                <img src={image} alt="product"></img>
                <div className="Info">
                <h4>Product Name</h4>
                  <div class="Stars" style={{"--rating": "4.5", "aria-label":"Rating of this product is 4.5 out of 5."}}>(4.5)</div>
                  <div>
                    <span style={{"display":"flex",'width':'100%','justify-content':'space-between','padding':'0','font-size':'10px'}}> 
                      <p>Available:200 </p> 
                      <p>Sold:10</p>
                    </span>
                    <progress value="95" max="100" style={{'width':'100%'}}> 32% </progress>
                  </div>
                  <div className="GetPrice" style={{'width':'50%'}}>Get Price </div>
                </div>
              </div>
              <div className="Boxes">
                <img src={image} alt="product"></img>
                <div className="Info">
                <h4>Product Name</h4>
                  <div class="Stars" style={{"--rating": "4.5", "aria-label":"Rating of this product is 4.5 out of 5."}}>(4.5)</div>
                  <div>
                    <span style={{"display":"flex",'width':'100%','justify-content':'space-between','padding':'0','font-size':'10px'}}> 
                      <p>Available:200 </p> 
                      <p>Sold:10</p>
                    </span>
                    <progress value="95" max="100" style={{'width':'100%'}}> 32% </progress>
                  </div>
                  <div className="GetPrice" style={{'width':'50%'}}>Get Price </div>
                </div>
              </div>
              <div className="Boxes">
                <img src={image} alt="product"></img>
                <div className="Info">
                <h4>Product Name</h4>
                  <div class="Stars" style={{"--rating": "4.5", "aria-label":"Rating of this product is 4.5 out of 5."}}>(4.5)</div>
                  <div>
                    <span style={{"display":"flex",'width':'100%','justify-content':'space-between','padding':'0','font-size':'10px'}}> 
                      <p>Available:200 </p> 
                      <p>Sold:10</p>
                    </span>
                    <progress value="95" max="100" style={{'width':'100%'}}> 32% </progress>
                  </div>
                  <div className="GetPrice" style={{'width':'50%'}}>Get Price </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}

// soes 
// cc jasprit || 

// //soes@gdgu.org // kritika.nagpal@gdgu.org

// not even 

export default SpecialOffer;
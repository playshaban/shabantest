import image from '../images/1080.png';

const Services  = () =>
{
    return (
        <div className="Services">
          <div className="Box">
            <img src={image} alt="service"></img>
            <h2>15000+ <br></br>SOFTWARES</h2>
          </div>
          <div className="Box">
            <img src={image} alt="service"></img>
            <h2>BEST PRICE  <br></br>GUARANTEED </h2>
          </div>
          <div className="Box">
            <img src={image} alt="service"></img>
            <h2>FREE EXPERT <br></br>CONSULTATION</h2>
          </div>
          
      </div>
    )
}

export default Services;
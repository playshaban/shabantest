import FlashSale from './FlashSale';
import NewArrivals from './NewArrivals';
import SpecialOffer from './SpecialOffer';
import DealOfDay from './DealOfDay';
// import EndingOffers from './EndingOffers';

const Container = () =>
{
    return (
        <div className="Container" >
        <div className="ContainerAside">
          This is Nav Section
        </div>
        <div className="ContainerMain">
          
          <FlashSale />
          <NewArrivals />
          <SpecialOffer />
          <DealOfDay />
          {/* <EndingOffers /> */}
          

        </div>
      </div>
      
    )
}

export default Container;
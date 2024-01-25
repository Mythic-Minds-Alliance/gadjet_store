import './HomePage.scss';
import { Slider } from '../../components/Slider/Slider';
import { MainPageTitle } from '../../components/MainPageTitle';
import { Carusel } from '../../components/Carusel';
import { ShopByCategory } from '../../components/ShopByCategory';

export const HomePage = () => {
  return (
    <>
      <div className="mainPageContainer">
        <MainPageTitle />
      </div>

      <Slider />

      <div className="mainPageContainer">
        <Carusel
          products={[]}
          title="New models"
        />
        <ShopByCategory />
        <Carusel
          products={[]}
          title="Hot prices"
        />
      </div>
    </>
  );
};

import './HomePage.scss';
import { Slider } from '../../components/Slider/Slider';
import { MainPageTitle } from '../../components/MainPageTitle';
import { NewModelsSlider } from '../../components/newModelsSlider';
import { HotPricesSlider } from '../../components/HotPricesSlider';
import { ShopByCategory } from '../../components/ShopByCategory';

export const HomePage = () => {
  return (
    <>
      <div className="mainPageContainer">
        <MainPageTitle />
      </div>

      <Slider />

      <div className="mainPageContainer">
        <NewModelsSlider />
        <ShopByCategory />
        <HotPricesSlider />
      </div>
    </>
  );
};

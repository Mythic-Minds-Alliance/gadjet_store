import './HomePage.scss';
import { Slider } from '../../components/MainPage/Slider/Slider';
import { MainPageTitle } from '../../components/MainPage/MainPageTitle';
import { NewModelsSlider } from '../../components/MainPage/newModelsSlider';
import { HotPricesSlider } from '../../components/MainPage/HotPricesSlider';
import { ShopByCategory } from '../../components/MainPage/ShopByCategory';

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

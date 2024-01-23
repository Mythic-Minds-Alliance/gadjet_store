// import { useContext } from 'react';
// import { DataContext } from '../../App';
// import { Loader } from '../../components/Loader';
import './HomePage.scss';
// import { Card } from '../../components/Card/Card';
import { Slider } from '../../components/MainPage/Slider/Slider';
import { MainPageTitle } from '../../components/MainPage/MainPageTitle';
import { NewModelsSlider } from '../../components/MainPage/newModelsSlider';
import { HotPricesSlider } from '../../components/MainPage/HotPricesSlider';
import { ShopByCategory } from '../../components/MainPage/ShopByCategory';

export const HomePage = () => {
  // const { productList, isLoading } = useContext(DataContext);

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

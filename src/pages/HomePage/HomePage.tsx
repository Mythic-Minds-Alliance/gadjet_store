// import { useContext } from 'react';
// import { DataContext } from '../../App';
// import { Loader } from '../../components/Loader';
import TabletImg from '../../images/tablets.png';
import PhoneImg from '../../images/mobilePhones.png';
import Accesories from '../../images/accesorise.png';

import './HomePage.scss';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  // const { productList, isLoading } = useContext(DataContext);

  return (
    <>
      <div className="mainPageContainer">
        <h1 className="mainTitle">Welcome to Nice Gadgets store!</h1>

        <div className="slider">slider</div>
        <img src="../../images/sliderPhoneImg1.png" alt="khj" />

        <section className="section newModels">
          <h3 className="sectionTitle">Brand new models</h3>

          <div className="card">card</div>
        </section>

        <section className="section shopByCategory">
          <h3 className="sectionTitle">Shop by category</h3>

          <div className="categoriesContainer">
            <div className="categoryItem">
              <img
                src={PhoneImg}
                alt="Iphone 14 in black color"
                className="categoryImg"
              />
              <h4 className="categoryTitle">Mobile phones</h4>
              <p className="categorySubtitle">95 models</p>
            </div>

            <div className="categoryItem">
              <img
                src={TabletImg}
                alt="Ipad in black, grey and white color"
                className="categoryImg"
              />
              <h4 className="categoryTitle">Tablets</h4>
              <p className="categorySubtitle">24 models</p>
            </div>

            <div className="categoryItem">
              <img
                src={Accesories}
                alt="Iphone cases"
                className="categoryImg"
              />
              <h4 className="categoryTitle">Accessories</h4>
              <p className="categorySubtitle">100 models</p>
            </div>
          </div>
        </section>

        <section className="section hotPrices">
          <h3 className="sectionTitle">Hot prices</h3>
        </section>
      </div>

      <Footer />
    </>
  );
};

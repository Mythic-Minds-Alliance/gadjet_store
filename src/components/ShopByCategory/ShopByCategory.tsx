import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import TabletImg from '../../images/tablets.png';
import Accessories from '../../images/accesorise.png';
import PhonesImg from '../../images/mobilePhones.png';
import { scrollToTop } from '../../utils/helpers';
import { RootState } from '../../redux/store/store';

export const ShopByCategory = () => {
  const productList = useSelector((state: RootState) => state.products.list);
  const numberOfPhones = productList
    .filter(product => product.categoryId === 1).length;
  const numberOfTablets = productList
    .filter(product => product.categoryId === 2).length;
  const numberOfAccessories = productList
    .filter(product => product.categoryId === 3).length;

  return (
    <section className={`${styles.section} ${styles.shopByCategory}`}>
      <h3 className={styles.sectionTitle}>Shop by category</h3>

      <div className={styles.categoriesContainer}>
        <div className={styles.categoryItem}>

          <NavLink
            to="/phones"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={PhonesImg}
              alt="Iphone 14 in black color"
              className={styles.categoryImg}
            />
            Mobile phones
          </NavLink>
          <p className={styles.categorySubtitle}>{`${numberOfPhones} models`}</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/tablets"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={TabletImg}
              alt="Ipad in black, grey and white color"
              className={styles.categoryImg}
            />
            Tablets
          </NavLink>
          <p className={styles.categorySubtitle}>{`${numberOfTablets} models`}</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/accessories"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={Accessories}
              alt="Iphone cases"
              className={styles.categoryImg}
            />
            Accessories
          </NavLink>
          <p className={styles.categorySubtitle}>{`${numberOfAccessories} models`}</p>
        </div>
      </div>
    </section>
  );
};

import { NavLink } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import TabletImg from '../../images/tablets.png';
import Accessories from '../../images/accesorise.png';
import { SERVER_HOST } from '../../utils/helpers';

export const ShopByCategory = () => {
  return (
    <section className={`${styles.section} ${styles.shopByCategory}`}>
      <h3 className={styles.sectionTitle}>Shop by category</h3>

      <div className={styles.categoriesContainer}>
        <div className={styles.categoryItem}>

          <NavLink
            to="/phones"
            onClick={() => { }}
            className={styles.categoryTitle}
          >
            <img
              src={`${SERVER_HOST}/img/phones/apple-iphone-7/black/00.jpg`}
              alt="Iphone 14 in black color"
              className={styles.categoryImg}
            />
            Mobile phones
          </NavLink>
          <p className={styles.categorySubtitle}>95 models</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/tablets"
            onClick={() => { }}
            className={styles.categoryTitle}
          >
            <img
              src={TabletImg}
              alt="Ipad in black, grey and white color"
              className={styles.categoryImg}
            />
            Tablets
          </NavLink>
          <p className={styles.categorySubtitle}>24 models</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/tablets"
            onClick={() => { }}
            className={styles.categoryTitle}
          >
            <img
              src={Accessories}
              alt="Iphone cases"
              className={styles.categoryImg}
            />
            Accessories
          </NavLink>
          <p className={styles.categorySubtitle}>100 models</p>
        </div>
      </div>
    </section>
  );
};

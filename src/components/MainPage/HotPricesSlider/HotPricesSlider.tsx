import styles from './HotPricesSlider.module.scss';

export const HotPricesSlider = () => {
  return (
    <section className={`${styles.section} ${styles.hotPrices}`}>
      <h3 className={styles.sectionTitle}>Hot prices</h3>
      <div>card</div>
    </section>
  );
};

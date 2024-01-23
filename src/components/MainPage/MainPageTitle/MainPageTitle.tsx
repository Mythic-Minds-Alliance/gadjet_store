import styles from './MainPageTitle.module.scss';

export const MainPageTitle = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h1 className={styles.mainTitle}>Welcome to Nice Gadgets store!</h1>
    </div>
  );
};

import styles from './Column.module.css';

const Column = ({ title, className, children }) => {
  return (
    <div className={`${styles.column} ${className || ''}`}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.cardList}>
        {children}
      </div>
    </div>
  );
};

export default Column;
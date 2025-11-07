import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

import landingImage from '../../../../assets/images/hero.png';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Planlar Alt Üst, Yetişememe Hissi Kalıcı mı?</h1>
        <p className={styles.subtitle}>
          Hayat maratonuna hoş geldiniz.
          Maratonu bitirmek için hızlanmaya değil, akıllı bir düzene ihtiyacın var.
          Planla, önceliklendir ve harekete geç.
        </p>
        <Link to="/board" className={styles.ctaButton}>
          Panoya Git →
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <img src={landingImage} alt="Zaman Yönetimi" className={styles.image} />
      </div>

    </section>
  );
};

export default Hero;
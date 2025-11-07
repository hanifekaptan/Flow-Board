import React from 'react';
import styles from './HowItWork.module.css';

import PlanIcon from '../../../../assets/icons/plan.ico';
import FocusIcon from '../../../../assets/icons/focus.ico';
import ProgressIcon from '../../../../assets/icons/progress.ico';
import SecureIcon from '../../../../assets/icons/secure.ico';

const stepsData = [
  {
    icon: PlanIcon, 
    title: '1. Planlamaya Başla', 
    description: 'Yapılacaklar listene yeni görevler ekleyerek ilk adımı at.' 
  },
  {
    icon: FocusIcon, 
    title: '2. Odaklanma Sınırını Belirle', 
    description: 'Aynı anda en fazla 3 göreve odaklanarak aşırı yüklenmeyi önle.'
  },
  {
    icon: ProgressIcon, 
    title: '3. Görevleri İlerlet', 
    description: 'Görevlerini "Yapılacak", "Yapılıyor" ve "Bitti" sütunları arasında sürükle ve bırak kolaylığıyla taşı. Akışını anlık takip et.'
  },
  {
    icon: SecureIcon, 
    title: '4. Verilerini Güvence Altına Al', 
    description: 'Tüm bu akış, sadece senin cihazında saklanır. Rahat ve güvende çalış.'
  }
];

const HowItWork = () => {
  return (
    <section className={styles.howItWorkSection}>
      <h2 className={styles.sectionTitle}>Flow-Board Nasıl Çalışır?</h2>
      <div className={styles.stepsGrid}>
        {stepsData.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.iconContainer}>
              <img src={step.icon} alt={step.title} className={styles.imageIcon} />
            </div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
import { useState, useEffect } from 'react';
import styles from './HelpModal.module.css';

import dragAndDrop from '../../../assets/gifs/drag-and-drop.gif';
import createNewTask from '../../../assets/gifs/create-new-task.gif';
import editTask from '../../../assets/gifs/edit-task.gif';

const steps = [
  {
    title: '1. Görevleri Sürükle & Bırak',
    description: 'Bir görevi farklı bir aşamaya taşımak için, üzerine tıklayıp basılı tutun ve ardından istediğiniz sütuna sürükleyin.',
    image: dragAndDrop
  },
  {
    title: '2. Yeni Bir Görev Ekle',
    description: 'Alttaki "Oluştur" butonuna tıklayarak yeni görevler oluşturabilirsiniz. Başlık girmek zorunludur.',
    image: createNewTask
  },
  {
    title: '3. Bir Görevi Düzenle ve Sil',
    description: 'Mevcut bir görevin detaylarını değiştirmek veya tamamen silmek için kartın üzerindeki düzenleme ikonuna (⋮) tıklayın.',
    image: editTask
  }
];

const HelpModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setCurrentStep(0), 300);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepData = steps[currentStep];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

        <h2>{stepData.title}</h2>

        <div className={styles.imageContainer}>
          <img src={stepData.image} alt={stepData.title} />
        </div>

        <p className={styles.description}>{stepData.description}</p>

        <div className={styles.stepIndicator}>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentStep === index ? styles.activeDot : ''}`}
            />
          ))}
        </div>

        <div className={styles.modalActions}>
          {currentStep > 0 && (
            <button onClick={handleBack} className={styles.backButton}>Geri</button>
          )}

          {currentStep < steps.length - 1 && (
            <button onClick={handleNext} className={styles.nextButton}>İleri</button>
          )}

          {currentStep === steps.length - 1 && (
            <button onClick={onClose} className={styles.closeButton}>Anladım</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
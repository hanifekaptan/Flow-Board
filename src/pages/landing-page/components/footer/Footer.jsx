import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Flow-Board</h4>
                    <p>Görevlerinizi kolayca yönetin, organize olun ve hedeflerinize ulaşın.</p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Takipte Kalın</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/hife.init/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/in/hanifekaptan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/hanifekaptan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© {new Date().getFullYear()} Flow-Board. Tüm Hakları Saklıdır.</p>
                <div className={styles.legalLinks}>
                    <a href="#">Gizlilik Politikası</a>
                    <a href="#">Kullanım Koşulları</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
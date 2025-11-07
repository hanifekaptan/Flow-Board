import styles from './IntroSection.module.css';

import introImage from '../../../../assets/images/intro.png';

const IntroSection = () => {
    return (
        <section className={styles.introSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>

                    <div className={styles.imageContainer}>
                        <img
                            src={introImage}
                            alt="Flow-Board Intro"
                            className={styles.introImage}
                        />
                    </div>

                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>Flow-Board Nedir?</h2>
                        <p className={styles.paragraph}>
                            Kanban, iş akışınızı görselleştirerek kaos yerine akışı ve düzeni sağlayan basit ve güçlü bir metodolojidir.
                            Flow-Board, bu felsefeden ilham alarak tasarlanmış, kullanımı basit ve minimal bir kişisel Kanban aracıdır.
                            Amacımız, hayat maratonunda hızlanmak yerine, önceliklerinizi netleştirerek gerçekten önemli olana odaklanmanızı sağlamaktır.
                            Flow-Board, birkaç adımla tüm iş akışınızı görselleştirmenize olanak tanır ve en önemlisi, tüm verilerinizi güvenli bir şekilde yerel cihazınızda tutar.
                            Sadece yapmanız gerekenlere odaklanın ve hedeflerinize emin adımlarla ulaşın.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntroSection;
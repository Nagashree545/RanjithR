

import styles from '../Styles/Hero.module.css';
import profileImg from '../assets/heroimage.jpeg'; // add your image path

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h1 className={styles.title}>Ranjith Prince</h1>
          <p className={styles.subtitle}>Professional Dancer & Choreographer</p>
          <p className={styles.description}>
            14 years of artistic excellence with 1000+ performances across state-level competitions, 
            events, and film productions. Specializing in fire dance and Tubelight dance.
          </p>
  <div className={styles.stats}>
        <div className={styles.stat}>
          <h3>1000+</h3>
          <p>Performances</p>
        </div>
        <div className={styles.stat}>
          <h3>500+</h3>
          <p>Songs as Dancer</p>
        </div>
        <div className={styles.stat}>
          <h3>100+</h3>
          <p>Competition Level Awards</p>
        </div>
        <div className={styles.stat}>
          <h3>14</h3>
          <p>Years Experience</p>
        </div>
      </div>
          <div className={styles.ctaButtons}>
            <button
              className={styles.btnPrimary}
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </button>

            <button
              className={styles.btnSecondary}
              onClick={() =>
                document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Work
            </button>
          </div>
        </div>

        {/* ✅ PROFILE IMAGE */}
        <div className={styles.imageWrapper}>
          <img src={profileImg} alt="Ranjith Prince" className={styles.profileImg} />
        </div>

      </div>

      {/* RIGHT STATS - Below content on desktop, below image on mobile */}
    
    </section>
  );
}

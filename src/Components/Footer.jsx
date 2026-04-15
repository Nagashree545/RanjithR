import styles from '../Styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>Ranjith Prince</h4>
            <p>Professional Dancer & Choreographer with 14 years of experience in Indian classical and contemporary dance forms.</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' })}>Achievements</button></li>
              <li><button onClick={() => document.getElementById('specializations').scrollIntoView({ behavior: 'smooth' })}>Specializations</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Social Media</h4>
            <p>Follow for updates on performances and upcoming events.</p>
            <div className={styles.socialIcons}>
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#facebook" aria-label="Facebook">👤</a>
              <a href="#youtube" aria-label="YouTube">🎬</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Ranjith Prince. All rights reserved.</p>
          <p>Crafted with passion for dance and artistry.</p>
        </div>
      </div>
    </footer>
  );
}

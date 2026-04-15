import styles from '../Styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>About Ranjith Prince</h2>
          <p>
            With 14 years of dedicated experience in the world of dance and choreography, 
            Ranjith Prince has established himself as a versatile and passionate artist in the Indian dance scene.
          </p>
          <p>
            As a professional dancer, Ranjith has performed over 500 songs, 
            bringing traditional and contemporary movements to life on stage and screen. His journey includes 
            contributions as an assistant choreographer on 100+ productions.
          </p>

          <h3>Professional Highlights</h3>
          <ul className={styles.highlights}>
            <li>100+ competition 1st place wins</li>
            <li>Featured in the film "Mazzer" as an actor</li>
            <li>Written music for "Nansattu Hodaru", "Nan Preethi Sayadu", and "Karunada Veera"</li>
            <li>Over 1000 performances at events and functions</li>
            <li>Specialized expertise in fire dance and Tubelight dance</li>
          </ul>

          <p>
            Ranjith&apos;s passion for dance extends beyond performance—he is committed to preserving 
            traditional dance forms while exploring innovative choreography that resonates with modern audiences.
          </p>
        </div>

        <div className={styles.skills}>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>💃</div>
            <h4>Dancer</h4>
            <p>500+ songs As a Dancer</p>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🔥</div>
            <h4>Fire Dance</h4>
            <p>Specialized expertise</p>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🥁</div>
            <h4>Creative Dance Performance</h4>
            <p>Free Style mastery</p>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🎬</div>
            <h4>Film & Acting</h4>
            <p>Featured in Mazzer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

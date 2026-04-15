import styles from '../Styles/Specilization.module.css';

export default function Specializations() {
  const specialties = [
    {
      name: 'Fire Dance',
      description: 'Master of the dynamic and visually stunning fire dance, combining traditional techniques with contemporary flair. This specialty showcases intense movements and precise control.',
      features: ['Dynamic Movements', 'Visual Impact', 'Traditional Roots', 'Contemporary Style']
    },

    {
      name: 'Professional Dancer',
      description: 'Skilled dancer with experience performing in 500+ songs and 1000+ stage shows. Known for expressive movements, strong stage presence, and versatility across traditional and modern dance styles.',
      features: ['Stage Performance', 'Expressive Movement', 'Versatility', 'Rhythm & Timing']
    },
    {
      name: 'Film & Performance',
      description: 'Professional actor and performer featured in film productions. Experienced in translating dance movements for screen with cinematic precision.',
      features: ['Screen Acting', 'Camera Presence', 'Cinematic Movement', 'Production Experience']
    }
  ];

  return (
    <section id="specializations" className={styles.specializations}>
      <div className={styles.container}>
        <h2>Specializations & Expertise</h2>
        <p className={styles.subtitle}>
          Areas of expertise honed through years of professional practice
        </p>

        <div className={styles.specialtiesGrid}>
          {specialties.map((specialty, index) => (
            <div key={index} className={styles.specialtyCard}>
              <div className={styles.cardHeader}>
                <h3>{specialty.name}</h3>
                <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
              </div>

              <p className={styles.description}>{specialty.description}</p>

              <div className={styles.features}>
                <h4>Key Features</h4>
                <ul>
                  {specialty.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.experienceHighlight}>
          <h3>Performance Statistics</h3>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Songs Choreographed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100+</div>
              <div className={styles.statLabel}>Assistant Roles</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100+</div>
              <div className={styles.statLabel}>Competition Awards</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>1000+</div>
              <div className={styles.statLabel}>Live Performances</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

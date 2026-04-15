import styles from '../Styles/Achievment.module.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'Competitive Excellence',
      description: '100+ competition in dance and got 1st place',
      icon: '🏆',
      stat: '100+'
    },
    {
      title: 'Dancer Portfolio',
      description: '500+ songs performed as a dancer',
      icon: '💫',
      stat: '500+'
    },
    {
      title: 'Assistant Choreographer',
      description: 'Contributed to 100+ productions',
      icon: '👥',
      stat: '100+'
    },
    {
      title: 'Live Performances',
      description: 'Over 1000 performances at events and functions',
      icon: '🎪',
      stat: '1000+'
    },
    {
      title: 'Film Industry',
      description: 'Featured actor in the film "Mazzer"',
      icon: '🎬',
      stat: '1'
    },
    {
      title: 'Musical Compositions',
      description: 'Written songs including traditional and contemporary works',
      icon: '🎵',
      stat: '3+'
    }
  ];

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2>Achievements & Milestones</h2>
        <p className={styles.subtitle}>
          A testament to dedication, creativity, and passion for dance
        </p>

        <div className={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.stat}>{item.stat}</div>
            </div>
          ))}
        </div>

        <div className={styles.featured}>
          <h3>Featured Works</h3>
          <div className={styles.worksList}>
            <div className={styles.work}>
              <h4>Nansattu Hodaru</h4>
              <p>Original composition and choreography</p>
            </div>
            <div className={styles.work}>
              <h4>Nan Preethi Sayadu</h4>
              <p>Traditional piece with contemporary twist</p>
            </div>
            <div className={styles.work}>
              <h4>Karunada Veera</h4>
              <p>Epic dance narrative performance</p>
            </div>
            <div className={styles.work}>
              <h4>Mazzer</h4>
              <p>Film appearance as professional actor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

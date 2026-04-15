import { useState } from 'react';
import styles from '../Styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <p className={styles.subtitle}>
          Ready to collaborate or have a question? Reach out today!
        </p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Connect With Me</h3>
            <p>
              Whether you&apos;re interested in choreography, performances, or collaboration opportunities, 
              I&apos;d love to hear from you. Follow me on social media for updates on upcoming performances and events.
            </p>

            <div className={styles.contactLinks}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Karnataka, Banglore</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <p>ranjusanjudance@gmail.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.icon}>📱</span>
                <div>
                  <h4>Conatct Number</h4>
                  <p>6361201553</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="#instagram" aria-label="Instagram" className={styles.socialLink}>
                📷
              </a>
              <a href="#facebook" aria-label="Facebook" className={styles.socialLink}>
                👤
              </a>
              <a href="#youtube" aria-label="YouTube" className={styles.socialLink}>
                🎬
              </a>
              <a href="#twitter" aria-label="Twitter" className={styles.socialLink}>
                𝕏
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

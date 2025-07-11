import styles from './Footer.module.css'
import Instagram from '../../assets/icons/instagram.svg'
import WhatsApp from '../../assets/icons/whatsapp.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>Contact</h3>

      <div className={styles.aboutUs}>
        <div className={styles.about}>
          <div className={styles.contactOne}>
            <p className={styles.par}>Phone</p>
            <h4>+49 30 915-88492</h4>
          </div>

          <div className={styles.contactTwo}>
            <p className={styles.par}>Socials</p>
            <div className={styles.socialIcon}>
              <img src={Instagram} alt="Instagram" />
              <img src={WhatsApp} alt="WhatsApp" />
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.contactOne}>
            <p className={styles.par}>Address</p>
            <h4>Wallstraße 9-13, 10179 Berlin, Deutschland</h4>
          </div>

          <div className={styles.contactTwo}>
            <p className={styles.par}>Working Hours</p>
            <h4>24 hours a day</h4>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9714.89014999307!2d13.348259370086756!3d52.502261952901094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sde!2sde!4v1751711892558!5m2!1sde!2sde"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Footer

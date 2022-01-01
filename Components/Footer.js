import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import appStore from "../public/Images/appStore.png";
import palyStore from "../public/Images/palyStore.png";
export default function Footer() {
  return (
    <>
      <footer className={styles.app_footer}>
        <h1 className={styles.footer_title}>Get The App</h1>
        <div className={styles.app_available}>
          <Image src={appStore} alt="appStore/img" />
          <Image src={palyStore} alt="playStore/img" />
        </div>
        <p className={styles.copyright}>
          DESIGNED AND DEVELOPED BY &copy; JSSTACK DEVELOPERS 2022
        </p>
      </footer>
    </>
  );
}

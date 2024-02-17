import { FunctionComponent } from "react";
import styles from "./Aus.module.css";

const Aus: FunctionComponent = () => {
  return (
    <div className={styles.aus}>
      <div className={styles.navbar}>
        <button className={styles.homebutton}>
          <img
            className={styles.home4HomeHouseRoofShelteIcon}
            alt=""
            src="/home4homehouseroofshelter.svg"
          />
          <i className={styles.footerInfo}>Austėjos sodyba</i>
        </button>
        <input className={styles.languagebutton} type="checkbox" />
        <div className={styles.findherebutton}>
          <b className={styles.inputLabels}>Sodyboje rasite</b>
        </div>
        <div className={styles.pricesbutton}>
          <b className={styles.pricesnametext}>Kainoraštis</b>
        </div>
        <div className={styles.gallerybutton}>
          <b className={styles.gallerynametext}>Galerija</b>
        </div>
        <div className={styles.aboutbutton}>
          <b className={styles.aboutnametext}>Apie mus</b>
        </div>
        <div className={styles.contactusbutton}>
          <b className={styles.contactusnametext}>Kontaktai</b>
        </div>
      </div>
      <section className={styles.footerFrame}>
        <div className={styles.footerHelpInfoFrame}>
          <div className={styles.footerHelpInfoContainer}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.kontaktai}>Kontaktai</p>
            <p className={styles.p}>
              <a className={styles.a} href="tel:+37065391732" target="_blank">
                <span className={styles.span}>+370 6</span>
              </a>
              *******
            </p>
            <p className={styles.adresas}>Adresas:</p>
            <p className={styles.lingailiG33}>Lingailių g. 33, Rėkyva</p>
          </div>
        </div>
        <div className={styles.googleMapsEmbedHolderFrame}>
          <div className={styles.map}>
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.9107875135855!2d23.31658621353212!3d55.846862773007096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e1e028aa137b%3A0xf62dc2d6953dad87!2sLingaili%C5%B3%20g.%2033%2C%2079241%20%C5%A0iauliai!5e0!3m2!1slt!2slt!4v1708184124529!5m2!1slt!2slt"
      width="600"
      height="450"
      style={{ border: "0"}}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aus;

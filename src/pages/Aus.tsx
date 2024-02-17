import { FunctionComponent } from "react";
import styles from "./Aus.module.css";

const Aus: FunctionComponent = () => {
  return (
    <div className={styles.aus}>
      <div className={styles.findHereGroup}>
        <button className={styles.homebutton}>
          <img
            className={styles.home4HomeHouseRoofShelteIcon}
            alt=""
            src="/home4homehouseroofshelter.svg"
          />
          <i className={styles.footerInfo}>Austėjos sodyba</i>
        </button>
        <img className={styles.languageicon} alt="" src="/languageicon.svg" />
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
        <div className={styles.footerhelpinfonametext}>
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
        <div className={styles.googlemapsembedholderframe} />
      </section>
    </div>
  );
};

export default Aus;

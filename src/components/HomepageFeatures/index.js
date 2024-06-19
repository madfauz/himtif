import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function HomepageFeatures() {
  return (
    <BrowserOnly>
      {() => (
        <section className={styles.member_container} id="bph">
          <h1 className={styles.very_main_title}>Badan Pengurus Harian</h1>
          <h1
            className={styles.main_title}
            style={{ borderBottom: "0.5px dashed" }}
          >
            4 Pilar
          </h1>
          <div className={styles.member_frame}>
            <div className={styles.member_division}>
              <img
                src={useBaseUrl("/img/bph/kamaludin-bg-2.png")}
                alt="Ketua Umum"
              />
              <div className={styles.member_title}>
                <h2>Ketua Umum</h2>
                <h3>Muhamad Kamaludin</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img
                src={useBaseUrl("/img/bph/khoirul-bg-2.png")}
                alt="Wakil Ketua Umum"
              />
              <div className={styles.member_title}>
                <h2>Wakil Ketua Umum</h2>
                <h3>M. Khoirul Mauludi</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img
                src={useBaseUrl("/img/bph/najalia-bg-2.png")}
                alt="Sekretaris"
              />
              <div className={styles.member_title}>
                <h2>Sekretaris</h2>
                <h3>Najalia Malika</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img
                src={useBaseUrl("/img/bph/wulan-bg-2.png")}
                alt="Bendahara"
              />
              <div className={styles.member_title}>
                <h2>Bendahara</h2>
                <h3>Siti Wulandari</h3>
              </div>
            </div>
          </div>
          <h1
            className={styles.main_title}
            style={{ borderBottom: "0.5px dashed" }}
          >
            Divisi
          </h1>
          <div className={styles.member_frame}>
            <div className={styles.member_division}>
              <img src={useBaseUrl("/img/bph/ppo-bg-2.png")} alt="Divisi PPO" />
              <div className={styles.member_title}>
                <h2>PPO</h2>
                <h3>M. Khairul Abror - Retno Dewi A.</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img src={useBaseUrl("/img/bph/ppk-bg-2.png")} alt="Divisi PPK" />
              <div className={styles.member_title}>
                <h2>PPK</h2>
                <h3>Ahmad Fauzi - Tito Tri A.</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img src={useBaseUrl("/img/bph/pmk-bg-2.png")} alt="Divisi PMK" />
              <div className={styles.member_title}>
                <h2>PMK</h2>
                <h3>Faris Abqari - M. Amar Subhan</h3>
              </div>
            </div>
            <div className={styles.member_division}>
              <img src={useBaseUrl("/img/bph/mbk-bg-2.png")} alt="Divisi MBK" />
              <div className={styles.member_title}>
                <h2>MBK</h2>
                <h3>Berhat Sandi S. - Rifan Pamungkas </h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </BrowserOnly>
  );
}

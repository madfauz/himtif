import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import AOS from "aos";
import BrowserOnly from "@docusaurus/BrowserOnly";

import "aos/dist/aos.css";

export default function HomepageHistory() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserOnly>
      {() => (
        <section className={styles.container}>
          <h1 className={styles.title} data-aos="fade-down">
            Sejarah HIMTIF
          </h1>
          <h2 className={styles.content} data-aos="fade-up">
            HIMTIF berdiri pada Tanggal 10 JUNI 2001 karena faktor keresahan
            Mahasiswa akhirnya Mahasiswa itu membuat suatu perkumpulan khususnya
            Mahasiswa-mahasiswa Perguruan Tinggi Raharja dan pada akhirnya
            mereka membuat perkumpulan yang bernama HIMTIF yang bertujuan untuk
            bertukar pikiran, kreatifitas pengembangan TI itu sendiri.
            <br />
            <br />
            HIMTIF ambil andil dalam membentuk KBM RAHARJA, kongres untuk
            pertama kali dan akhirnya KBM RAHARJA terbentuk setelah KBM RAHARJA
            terbentuk anggota HIMTIF mengajukan sebuah pengesahan dan HIMTIF
            disahkan pada Tanggal 10 JUNI 2003 sampai sekarang ini.
            <br />
            <br />
            Perhimpunan Mahasiswa Informatika dan Komputer Nasional yang
            disingkat juga dengan nama “PERMIKOMNAS” yang didirikan dari
            Pertemuan Himpunan Mahasiswa Teknik Informatika dan Komputer
            Nasional yang dilaksanakan pada tanggal 19 - 21 Agustus 2002 yang
            lampau di PUSPIPTEK Serpong Tangerang dan telah mendapat SK DIKTI
            pada tahun 2003.
          </h2>
        </section>
      )}
    </BrowserOnly>
  );
}

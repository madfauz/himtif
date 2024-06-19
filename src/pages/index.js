import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHistory from "../components/HomepageHistory";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import AOS from "aos";
import "aos/dist/aos.css";

function HomepageHeader() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() => (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className={styles.header_container}>
            <h1 style={{ color: "white" }} className={styles.hero_title}>
              {siteConfig.title}
            </h1>
            <p style={{ color: "white" }} className={styles.hero_subtitle}>
              {siteConfig.tagline}
            </p>
            <img
              className={styles.heroImage}
              src={useBaseUrl("/img/logo-himtif.png")}
              alt="HIMTIF"
            />
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--secondary button--lg")}
                to="#bph"
              >
                Badan Pengurus Harian
              </Link>
              <Link
                className={clsx("button button--secondary button--lg")}
                to={useBaseUrl("/docs/belati/intro-belati")}
              >
                Belati
              </Link>
            </div>
          </div>
          <img className={styles.cover} src={useBaseUrl("/img/cover.png")} />
        </header>
      )}
    </BrowserOnly>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageHistory />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomepageFeatures, { FeatureItem } from "../components/HomepageFeatures";

// SVG를 그냥 불러오면 깨져서 이렇게 불러옴
import rawSvg from "!!raw-loader!@site/static/img/ctp_with_text.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // const Svg = require('@site/static/img/ctp_with_text.svg').default;

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        {/* <Svg className={clsx("hero__title", styles.svg)} role="img" /> */}
        <div className={styles.svg} dangerouslySetInnerHTML={{ __html: rawSvg }} />

        <div className={styles.buttons}>
          <Link className="button custom-button button--secondary button--lg" to="/docs/handbook/intro">
            CTP 핸드북 페이지로
          </Link>
          <Link className="button button--secondary custom-button rainbow-button button--lg" to="/recruit/2025">
            25-1 CTP 신규모집 페이지로
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: "IUPC 개최",
    img: () => <img src={require("@site/static/img/lending/iupc.jpg").default} alt="IUPC" />,
    description: (
      <>
        <b>
          <a href="./docs/handbook/haengsa/iupc" className={styles.link}>
            인하대학교 프로그래밍 경진대회(IUPC)
          </a>
        </b>
        를 개최합니다.
      </>
    ),
  },
  {
    title: "CTP의 밤 개최",
    img: () => <img src={require("@site/static/img/lending/cbam.jpg").default} alt="cbam" />,
    description: (
      <>
        홈커밍데이인{" "}
        <b>
          <a href="./docs/handbook/haengsa/cbam" className={styles.link}>
            CTP의 밤
          </a>
        </b>
        을 개최합니다.
      </>
    ),
  },
  {
    title: "CCC 개최",
    img: () => <img src={require("@site/static/img/lending/ccc.png").default} alt="ccc" />,
    description: (
      <>
        알고리즘 공부 독려를 위해{" "}
        <b>
          <a href="./docs/handbook/haengsa/ccc" className={styles.link}>
            CCC
          </a>
        </b>
        를 개최합니다.
      </>
    ),
  },
];

const Activities: FeatureItem[] = [
  {
    title: "스터디",
    img: () => <img src={require("@site/static/img/lending/ctb.jpg").default} alt="스터디" />,
    description: (
      <>
        <b>
          <a href="./docs/handbook/activities/gichoban" className={styles.link}>
            기초반
          </a>
        </b>
        ,&nbsp;
        <b>
          <a href="./docs/handbook/activities/coteban" className={styles.link}>
            코테반
          </a>
        </b>
        ,&nbsp;
        <b>
          <a href="./docs/handbook/activities/daehwaeban" className={styles.link}>
            대회반
          </a>
        </b>{" "}
        스터디 운영
      </>
    ),
  },
  {
    title: "모각코",
    img: () => <img src={require("@site/static/img/lending/mgk.png").default} alt="모각코" />,
    description: (
      <>
        주마다 랜덤 문제를 골라 푸는{" "}
        <b>
          <a href="./docs/handbook/activities/mogakco" className={styles.link}>
            모각코
          </a>
        </b>{" "}
        진행
      </>
    ),
  },
  {
    title: "조별 활동",
    img: () => <img src={require("@site/static/img/lending/jo.png").default} alt="조별 활동" />,
    description: (
      <>
        <b>
          <a href="./docs/handbook/sangsi/jobyeol" className={styles.link}>
            조별 활동
          </a>
        </b>{" "}
        진행
      </>
    ),
  },
];

const OtherActivities: FeatureItem[] = [
  {
    title: "ICPC Asia Seoul Regional Contest (전국 대학생 프로그래밍 경진대회)",
    img: () => <img src={require("@site/static/img/lending/icpc.jpg").default} alt="ICPC" />,
    description: <>2024 ICPC Asia Seoul Regional Contest 본선 진출</>,
  },
  {
    title: "UCPC",
    img: () => <img src={require("@site/static/img/lending/ucpc.jpg").default} alt="UCPC" />,
    description: <>2024 UCPC 본선 진출</>,
  },
  {
    title: "shake!",
    img: () => <img src={require("@site/static/img/lending/shake.jpg").default} alt="shake!" />,
    description: <>2024 shake! 5등상</>,
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`인하대학교 CTP`}
      description="CTP(Challenge The Programming)는 자료구조 및 다양한 알고리즘을 학습, 연구하거나 여러 프로그래밍 대회를 준비하는 학술 소모임입니다."
    >
      <HomepageHeader />
      <main>
        <div className={styles.bg}>
          <div className={clsx(styles.lowTitle, "container")}>
            <Heading as="h1" className="hero__title">
              CTP가 무엇인가요?
            </Heading>
          </div>
          <div className="text--center">
            CTP(Challenge The Programming)는 자료구조 및 다양한 알고리즘을 학습, 연구하거나 여러 프로그래밍 대회를
            준비하는 학술 소모임입니다.
            <br />
            <br />
          </div>
        </div>

        <div className={styles.bg}>
          <div className={clsx(styles.lowTitle, "container")}>
            <Heading as="h1" className="hero__title">
              진행 행사
            </Heading>
          </div>
          <HomepageFeatures items={FeatureList} />
        </div>

        <div className={styles.bg}>
          <div className={clsx(styles.lowTitle, "container")}>
            <Heading as="h1" className="hero__title">
              정기 & 비정기 활동
            </Heading>
          </div>
          <HomepageFeatures items={Activities} />
        </div>

        <div className={styles.bg}>
          <div className={clsx(styles.lowTitle, "container")}>
            <Heading as="h1" className="hero__title">
              그 외 활동
            </Heading>
          </div>
          <HomepageFeatures items={OtherActivities} />
        </div>
      </main>
    </Layout>
  );
}

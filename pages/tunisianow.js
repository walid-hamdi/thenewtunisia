import Heading from "../components/Heading";
import PieChart from "../components/Shapes/PieChart";
import Head from "next/head";

import styles from "../styles/tunisianow.module.css";
import Container from "../components/Container";

export default function Tunisianow() {
  return (
    <>
      <Head>
        <title>Tunisia State | The New Tunisia</title>
        <meta
          name="description"
          content="Discover tunisia in our way, the new tunisia developer community"
        />
      </Head>

      {/* <div className={styles.container}> */}
      <Container>
        <Heading size={1} className={styles.headingTunisia}>
          Tunisia Recent Data
        </Heading>

        <PieChart />
        <PieChart />
        <PieChart />
        <PieChart />
      </Container>
    </>
  );
}

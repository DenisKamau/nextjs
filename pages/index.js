import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          You have this thing hooked up to the car? Well yeah, you know we have two of them. Biff. That&apos;s Strickland. Jesus, didn&apos;t that guy
          ever have hair? A bolt of lightning, unfortunately, you never know when or where it&apos;s ever gonna strike.
        </p>
        <p className={styles.text}>
          You have this thing hooked up to the car? Well yeah, you know we have two of them. Biff. That&apos;s Strickland. Jesus, didn&apos;t that guy
          ever have hair? A bolt of lightning, unfortunately, you never know when or where it&apos;s ever gonna strike.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

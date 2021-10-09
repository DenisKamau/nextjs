import Head from "next/head";
import styles from "../../styles/Ninjas.module.scss";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="description" content="Ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => {
          const { id, name } = ninja;
          return (
            <Link key={id} href={`/ninjas/${id}`}>
              <a className={styles.single}>
                <h3>{name}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Ninjas;

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import pillarsOfCreationPng from "../../public/pillars-of-creation.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Large image</title>
        <meta
          name="description"
          content="An optimized picture of the pillars of creation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <figure>
          <figcaption>Using path</figcaption>
          <Image
            src="/pillars-of-creation.png"
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>
        <figure>
          <figcaption>Using static import</figcaption>
          <Image
            src={pillarsOfCreationPng}
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>
      </main>
    </>
  );
}

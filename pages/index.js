import Head from "next/head";
import styles from "../styles/Home.module.css";
import Theme from "../Components/Theme";
import Footer from "../Components/Footer.js";
import HomeNav from "../Components/Home/HomeNav.js";
import HomeSearch from "../Components/Home/HomeSearch.js";

import mansearch from "../public/Images/man.svg";
import dummyuser from '../public/Images/user.webp';
import searchIcon from "../public/Images/search.svg";


export default function index() {
  return (
    <>
      <Head>
        <title>Try JSSTACK SEARCH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="JSSTACK Developers App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Theme />
      <HomeNav styles={styles} dummyuser={dummyuser} />
      <section className={styles.home_wrap}>
        <HomeSearch styles={styles} mansearch={mansearch} searchIcon={searchIcon} />
        <Footer />
      </section>
    </>
  );
}

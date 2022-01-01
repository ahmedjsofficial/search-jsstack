import { useRouter } from "next/router";
import Head from "next/head";

import ServerRes from "../Components/ServerRes.js";
import Theme from "../Components/Theme";
import SearchNav from "../Components/Search/SearchNav.js";
import SideNav from "../Components/Search/Utils/SideNav.js";
import SearchItem from "../Components/Search/Utils/SearchItem.js";


import styles from "../styles/Search.module.css";
import navbrand from "../public/Images/navbrand.png";
import settingsvg from "../public/Images/setting.svg";
import dummyuser from "../public/Images/user.webp";
import searchIcon from "../public/Images/search.svg";



export default function Search({ results }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - JSSTACK SEARCH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="JSSTACK Developers App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Theme />
      <SearchNav
        styles={styles}
        navbrand={navbrand}
        searchIcon={searchIcon}
        settingsvg={settingsvg}
        dummyuser={dummyuser}
      />

      <section className={styles.search_wrap}>
        <div className={styles.search_dashboard}>
          <div className={styles.search_flexbox}>
            <SideNav />
            <SearchItem results={results} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData ? ServerRes : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

import { useRouter } from "next/router";
import { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

export default function SearchNav({styles,navbrand,searchIcon,settingsvg,dummyuser}) {
  const router = useRouter();
  const useInputRef = useRef(null);
  
  const onSearch = (e) => {
    e.preventDefault();

    const term = useInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  
  return (
    <>
      <nav className={styles.js_navbar}>
        <Link href="/" passHref>
          <a href="/" className={styles.js_navbrand}>
            <Image src={navbrand} alt="navbrand/js" />
          </a>
        </Link>
        <form className={styles.search_from}>
          <span onClick={onSearch} className={styles.search_button}>
            <Image src={searchIcon} alt="search/svg" width={25} height={25} />
          </span>
          <input
            ref={useInputRef}
            id="inputSearch"
            type="search"
            autoComplete="off"
            name="search"
            className={styles.search_input}
            defaultValue={router.query.term}
          />
          <span className={styles.js_input_mic}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.mic_svg}
              viewBox="0 0 24 24"
            >
              <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </span>
          <button type="submit" onClick={onSearch} hidden>
            Search
          </button>
        </form>
        <ul className={styles.js_navbarnav}>
          <li className={`${styles.nav_icons} ${styles.nav_icon_setting}`}>
            <Image src={settingsvg} alt="setting/svg" />
          </li>
          <li className={`${styles.nav_icons} ${styles.nav_icons_menu}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={27}
              viewBox="0 0 24 24"
              width={27}
              fillOpacity="0.8"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
            </svg>
          </li>
          <li className={`${styles.nav_icons} ${styles.nav_icons_user}`}>
            <Image src={dummyuser} alt="" width={41} height={41}  />
          </li>
        </ul>
      </nav>
    </>
  );
}

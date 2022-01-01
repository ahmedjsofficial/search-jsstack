import { useRouter } from "next/router";
import { useRef } from "react";
import Image from "next/image";

export default function HomeSearch({ styles, mansearch, searchIcon }) {
  const router = useRouter();
  const useInputRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    const term = useInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  const quickLinksAPI = [
    { iconsvg: "https://designcode.io/images/logos/swiftui-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/react-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/figma-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/sketch-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/framer-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/webflow-logo.svg" },
    { iconsvg: "https://designcode.io/images/logos/protopie-logo.svg" },
  ];

  return (
    <>
      <div className={styles.search_dashboard}>
        <div className={styles.man_searching}>
          <Image src={mansearch} alt="search/svg" width={300} height={250} />
          <h2 className={styles.js_title}>JSSTACK DEVELOPERS SEARCH ENGINE</h2>
        </div>
        <form className={styles.search_from}>
          <span className={styles.search_button}>
            <Image src={searchIcon} alt="search/svg" width={25} height={25} />
          </span>
          <input
            ref={useInputRef}
            type="search"
            name="search"
            autoComplete="off"
            className={styles.search_input}
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
        <div className={styles.btn_group}>
          <button type="submit" onClick={onSearch} className={styles.btn_js}>
            Search Here
          </button>
          <button type="submit" onClick={onSearch} className={styles.btn_js}>
            I'm Feeling Lucky
          </button>
        </div>
        <div className={styles.google_offer}>
          <p className={styles.offered_title}>
            JSSTACK APP OFFERS SOME QUICK LINKS
          </p>
          <div className={styles.quick_links_group}>
            {quickLinksAPI.map((value, index) => (
              <div key={index} className={styles.quick_links_icon}>
                <Image
                  src={value?.iconsvg}
                  width={35}
                  height={35}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

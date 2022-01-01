import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles/Searchitem.module.css";

export default function SearchItem({ results }) {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className={styles.item_wrap}>
        <p className={styles.results_about}>
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds){" "}
        </p>

        <div className={styles.searched_data}>
          {results.items?.map((val) => (
            <div key={val.link} className={styles.data_snippets}>
              <div className={styles.data_link_group}>
                <Link href={val.link} passHref>
                  <a href={val.link} target="_blank" className={styles.links_url}>
                    {val.formattedUrl}
                  </a>
                </Link>
                <Link href={val.link} passHref>
                  <a href={val.link} className={styles.links_title} target="_blank">
                    {val.title}
                  </a>
                </Link>
              </div>
              <p className={styles.data_description}>
                {truncate(val.snippet, 180)}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {startIndex >= 10 && (
            <Link
              href={`/search?term=${router.query.term}&start=${
                startIndex - 10
              }`}
            >
              <button type="button" className={styles.btn_index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.btn_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
                <span className={`${styles.btn_index_text} ${styles.index_text_left}`}>Previous</span>
              </button>
            </Link>
          )}
          <Link
            href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
          >
            <button type="button" className={styles.btn_index}>
              <span className={`${styles.btn_index_text} ${styles.index_text_right}`}>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.btn_icon}
                viewBox="0 0 24 24"
              >
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>              
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

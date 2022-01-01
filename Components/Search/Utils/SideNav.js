import styles from "./styles/Sidenav.module.css";
export default function SideNav() {
  return (
    <>
      <div className={styles.sidenav}>
        <ul className={styles.sidenav_list}>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className={styles.link_text}>All</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={styles.link_text}>Videos</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className={styles.link_text}>News</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className={styles.link_text}>Images</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className={styles.link_text}>Books</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <span className={styles.link_text}>More</span>
            </a>
          </li>
          <li className={styles.sidenav_item}>
            <a href="#" className={styles.sidenav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.sidenav_iconsvg}
                viewBox="0 0 24 24"
              >
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <span className={styles.link_text}>Tools</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

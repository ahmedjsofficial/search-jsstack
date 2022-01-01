import Image from "next/image";
export default function HomeNav({ styles, dummyuser }) {
  return (
    <>
      <nav className={styles.home_nav}>
        <li className={styles.home_nav_item}>Gmail</li>
        <li className={styles.home_nav_item}>Images</li>
        <li className={styles.home_nav_item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg_icon}
            viewBox="0 0 24 24"
          >
            <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </li>
        <li className={styles.home_nav_item}>
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
        <li className={styles.home_nav_img}>
          <Image
            src={dummyuser}
            alt=""
            width={41}
            height={41}
          />
        </li>
      </nav>
    </>
  );
}

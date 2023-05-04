import styles from "./Header.module.scss";

const Header = ({ icons }) => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={`${styles.headerContainer} mx-auto`}>
          {/* navbar-toggle */}
          <input
            id={styles.navbarToggle}
            className={styles.navbarToggle}
            type="checkbox"
          />
          <label
            htmlFor={styles.navbarToggle}
            className={styles.burgerContainer}
          >
            <svg className={`${styles.iconToggle} cursor-point`}>
              <use xlinkHref="#svg-icon-toggle" />
            </svg>
          </label>

          {/* navbar-menu */}
          <nav className={styles.navbarMenu}>
            <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  男款
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  女款
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  最新消息
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  客製商品
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className={`${styles.navList} ${styles.siteActionList}`}>
              {/* search */}
              <li id={styles.themeToggle} className={styles.navItem}>
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-search`} />
                </svg>
              </li>
              {/* cart */}
              <li id={styles.themeToggle} className={styles.navItem}>
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-logo`} />
                </svg>
              </li>
              <li id={styles.themeToggle} className={styles.navItem}>
                {/* moon */}
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-logo`} />
                </svg>
                {/* sun */}
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-logo`} />
                </svg>
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className={styles.headerLogoContainer} href="#">
            <svg className={`${styles.iconLogo} cursor-point`}>
              <use xlinkHref={`${icons}#svg-icon-logo`} />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.siteNav}>
        <ul className={styles.siteNavList}>
          <li className={styles.item}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/movies"
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className={styles.hrShadow}></hr>
    </>
  );
};
export default Navigation;

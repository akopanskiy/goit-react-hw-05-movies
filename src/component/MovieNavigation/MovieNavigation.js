import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import styles from './MovieNavigation.module.css';

const MovieNavigation = ({ url }) => {
  const location = useLocation();

  return (
    <>
      <nav className={styles.siteNav}>
        <ul className={styles.siteNavList}>
          <li className={styles.item}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className={styles.hrShadow}></hr>
    </>
  );
};

MovieNavigation.propTypes = {
  url: PropTypes.string.isRequired,
};
export default MovieNavigation;

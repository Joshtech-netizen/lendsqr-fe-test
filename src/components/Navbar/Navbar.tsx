import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/Group.svg';
import { FaSearch, FaRegBell, FaCaretDown } from 'react-icons/fa';
import profilePic from '../../assets/avatar.png'; 

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Lendsqr" className={styles.logo} />
      </div>

        <div className={styles.searchBar}>
         <input type="text" placeholder="Search for anything" />
        <button className={styles.searchBtn}>
        <FaSearch className={styles.searchIcon} />
        </button>
          </div>

      <div className={styles.profileSection}>
        <a href="#" className={styles.docs}>Docs</a>
        <FaRegBell className={styles.bellIcon} />
        <div className={styles.user}>
          <img src={profilePic} alt="Adedeji" className={styles.avatar} />
          <span className={styles.name}>Adedeji</span>
          <FaCaretDown className={styles.dropdownIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { 
  FaUsers, FaUserFriends, FaBriefcase, FaHandHoldingUsd, 
  FaUserCheck, FaUserTimes, FaPiggyBank, FaCoins 
} from 'react-icons/fa'; 

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.switchOrg}>
        <FaBriefcase className={styles.icon} />
        <span>Switch Organization</span>
        <span className={styles.chevron}>▼</span>
      </div>

      <nav className={styles.navGroup}>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : styles.link}>
          <FaUsers className={styles.icon} />
          <span>Dashboard</span>
        </NavLink>

        <p className={styles.label}>CUSTOMERS</p>
        <NavLink to="/users" className={({ isActive }) => isActive ? styles.active : styles.link}>
          <FaUserFriends className={styles.icon} />
          <span>Users</span>
        </NavLink>
        <NavLink to="/guarantors" className={styles.link}>
          <FaUsers className={styles.icon} />
          <span>Guarantors</span>
        </NavLink>
        <NavLink to="/loans" className={styles.link}>
          <FaHandHoldingUsd className={styles.icon} />
          <span>Loans</span>
        </NavLink>
        
        <p className={styles.label}>BUSINESSES</p>
        <NavLink to="/organization" className={styles.link}>
          <FaBriefcase className={styles.icon} />
          <span>Organization</span>
        </NavLink>
        <NavLink to="/loan-products" className={styles.link}>
          <FaHandHoldingUsd className={styles.icon} />
          <span>Loan Products</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
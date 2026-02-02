import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaBriefcase, FaHome, FaUsers, FaUserFriends, 
  FaHandshake, FaPiggyBank, FaHandHoldingUsd, FaUserCheck, 
  FaUserTimes, FaChartBar, FaSlidersH, FaPercent, FaClipboardList,
  FaBars, FaTimes 
} from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* 1. Hamburger Toggle - Added high z-index to stay above stats cards */}
      <button 
        className={styles.hamburger} 
        onClick={toggleSidebar} 
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 2. Mobile Overlay */}
      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}

      {/* 3. The Sidebar with Full Navigation List */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.activeSidebar : ''}`}>
        <div className={styles.switchOrg} onClick={closeSidebar}>
          <FaBriefcase className={styles.icon} />
          <span>Switch Organization</span>
          <MdOutlineKeyboardArrowDown className={styles.arrow} />
        </div>

        <nav className={styles.navMenu}>
          {/* Main Dashboard Link */}
          <NavLink 
            to="/dashboard" 
            end 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            <FaHome className={styles.icon} />
            <span>Dashboard</span>
          </NavLink>

          {/* CUSTOMERS SECTION */}
          <div className={styles.section}>
            <p className={styles.label}>CUSTOMERS</p>
            <NavLink to="/users" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaUsers className={styles.icon} /> <span>Users</span>
            </NavLink>
            <NavLink to="/guarantors" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaUserFriends className={styles.icon} /> <span>Guarantors</span>
            </NavLink>
            <NavLink to="/loans" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaHandHoldingUsd className={styles.icon} /> <span>Loans</span>
            </NavLink>
            <NavLink to="/decision-models" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaHandshake className={styles.icon} /> <span>Decision Models</span>
            </NavLink>
            <NavLink to="/savings" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaPiggyBank className={styles.icon} /> <span>Savings</span>
            </NavLink>
            <NavLink to="/loan-requests" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaHandHoldingUsd className={styles.icon} /> <span>Loan Requests</span>
            </NavLink>
            <NavLink to="/whitelist" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaUserCheck className={styles.icon} /> <span>Whitelist</span>
            </NavLink>
            <NavLink to="/karma" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
              <FaUserTimes className={styles.icon} /> <span>Karma</span>
            </NavLink>
          </div>

          {/* BUSINESSES SECTION */}
          <div className={styles.section}>
            <p className={styles.label}>BUSINESSES</p>
            <NavLink to="/organization" onClick={closeSidebar} className={styles.link}>
              <FaBriefcase className={styles.icon} /> <span>Organization</span>
            </NavLink>
            <NavLink to="/loan-products" onClick={closeSidebar} className={styles.link}>
              <FaHandHoldingUsd className={styles.icon} /> <span>Loan Products</span>
            </NavLink>
            <NavLink to="/savings-products" onClick={closeSidebar} className={styles.link}>
              <FaPiggyBank className={styles.icon} /> <span>Savings Products</span>
            </NavLink>
            <NavLink to="/fees-and-charges" onClick={closeSidebar} className={styles.link}>
              <FaHandHoldingUsd className={styles.icon} /> <span>Fees and Charges</span>
            </NavLink>
            <NavLink to="/transactions" onClick={closeSidebar} className={styles.link}>
              <FaClipboardList className={styles.icon} /> <span>Transactions</span>
            </NavLink>
            <NavLink to="/services" onClick={closeSidebar} className={styles.link}>
              <FaChartBar className={styles.icon} /> <span>Services</span>
            </NavLink>
            <NavLink to="/service-account" onClick={closeSidebar} className={styles.link}>
              <FaUserCheck className={styles.icon} /> <span>Service Account</span>
            </NavLink>
            <NavLink to="/settlements" onClick={closeSidebar} className={styles.link}>
              <FaClipboardList className={styles.icon} /> <span>Settlements</span>
            </NavLink>
            <NavLink to="/reports" onClick={closeSidebar} className={styles.link}>
              <FaChartBar className={styles.icon} /> <span>Reports</span>
            </NavLink>
          </div>

          {/* SETTINGS SECTION */}
          <div className={styles.section}>
            <p className={styles.label}>SETTINGS</p>
            <NavLink to="/preferences" onClick={closeSidebar} className={styles.link}>
              <FaSlidersH className={styles.icon} /> <span>Preferences</span>
            </NavLink>
            <NavLink to="/fees-and-pricing" onClick={closeSidebar} className={styles.link}>
              <FaPercent className={styles.icon} /> <span>Fees and Pricing</span>
            </NavLink>
            <NavLink to="/audit-logs" onClick={closeSidebar} className={styles.link}>
              <FaClipboardList className={styles.icon} /> <span>Audit Logs</span>
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
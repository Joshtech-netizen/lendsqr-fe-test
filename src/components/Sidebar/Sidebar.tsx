import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaBriefcase, FaHome, FaUsers, FaUserFriends, 
  FaHandshake, FaPiggyBank, FaHandHoldingUsd, FaUserCheck, 
  FaUserTimes, FaChartBar, FaSlidersH, FaPercent, FaClipboardList 
} from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.switchOrg}>
        <FaBriefcase className={styles.icon} />
        <span>Switch Organization</span>
        <MdOutlineKeyboardArrowDown className={styles.arrow} />
      </div>

      <nav className={styles.navMenu}>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaHome className={styles.icon} />
          <span>Dashboard</span>
        </NavLink>

        <div className={styles.section}>
          <p className={styles.label}>CUSTOMERS</p>
          <NavLink to="/users" className={styles.link}>
            <FaUsers className={styles.icon} />
            <span>Users</span>
          </NavLink>
          <NavLink to="/guarantors" className={styles.link}>
            <FaUserFriends className={styles.icon} />
            <span>Guarantors</span>
          </NavLink>
          <NavLink to="/loans" className={styles.link}>
            <FaHandHoldingUsd className={styles.icon} />
            <span>Loans</span>
          </NavLink>
          <NavLink to="/decision-models" className={styles.link}>
            <FaHandshake className={styles.icon} />
            <span>Decision Models</span>
          </NavLink>
          <NavLink to="/savings" className={styles.link}>
            <FaPiggyBank className={styles.icon} />
            <span>Savings</span>
          </NavLink>
          <NavLink to="/loan-requests" className={styles.link}>
            <FaHandHoldingUsd className={styles.icon} />
            <span>Loan Requests</span>
          </NavLink>
          <NavLink to="/whitelist" className={styles.link}>
            <FaUserCheck className={styles.icon} />
            <span>Whitelist</span>
          </NavLink>
          <NavLink to="/karma" className={styles.link}>
            <FaUserTimes className={styles.icon} />
            <span>Karma</span>
          </NavLink>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>BUSINESSES</p>
          <NavLink to="/organization" className={styles.link}>
            <FaBriefcase className={styles.icon} />
            <span>Organization</span>
          </NavLink>
          <NavLink to="/loan-products" className={styles.link}>
            <FaHandHoldingUsd className={styles.icon} />
            <span>Loan Products</span>
          </NavLink>
          <NavLink to="/savings-products" className={styles.link}>
            <FaPiggyBank className={styles.icon} />
            <span>Savings Products</span>
          </NavLink>
          <NavLink to="/fees-and-charges" className={styles.link}>
            <FaHandHoldingUsd className={styles.icon} />
            <span>Fees and Charges</span>
          </NavLink>
          <NavLink to="/transactions" className={styles.link}>
            <FaClipboardList className={styles.icon} />
            <span>Transactions</span>
          </NavLink>
          <NavLink to="/services" className={styles.link}>
            <FaChartBar className={styles.icon} />
            <span>Services</span>
          </NavLink>
          <NavLink to="/service-account" className={styles.link}>
            <FaUserCheck className={styles.icon} />
            <span>Service Account</span>
          </NavLink>
          <NavLink to="/settlements" className={styles.link}>
            <FaClipboardList className={styles.icon} />
            <span>Settlements</span>
          </NavLink>
          <NavLink to="/reports" className={styles.link}>
            <FaChartBar className={styles.icon} />
            <span>Reports</span>
          </NavLink>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>SETTINGS</p>
          <NavLink to="/preferences" className={styles.link}>
            <FaSlidersH className={styles.icon} />
            <span>Preferences</span>
          </NavLink>
          <NavLink to="/fees-and-pricing" className={styles.link}>
            <FaPercent className={styles.icon} />
            <span>Fees and Pricing</span>
          </NavLink>
          <NavLink to="/audit-logs" className={styles.link}>
            <FaClipboardList className={styles.icon} />
            <span>Audit Logs</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
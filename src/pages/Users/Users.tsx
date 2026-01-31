import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../api/userService';
import type { IUser } from '../../types/users';
import StatusBadge from '../../components/Statusbadge';
import SummaryCard from '../../components/Dashboard/SummaryCard';
import { 
  FaEllipsisV, FaUsers, FaUserFriends, FaUserCheck, FaUserTimes, 
  FaEye, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import styles from './Users.module.scss';

const Users: React.FC = () => {
  const navigate = useNavigate();
  // Refs for detecting outside clicks
  const filterRef = useRef<HTMLDivElement>(null);
  const actionMenuRef = useRef<HTMLDivElement>(null);
  // State variables
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // Filter and action menu states
  const [showFilter, setShowFilter] = useState(false);
  const [activeActionMenu, setActiveActionMenu] = useState<number | null>(null);

  // Fetch users on component mount
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUsers(); 
      setUsers(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Close popovers on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target as Node)) {
        setActiveActionMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Pagination Logic
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, '...', totalPages - 1, totalPages);
    }
    return pages;
  };

  if (loading) return <div className={styles.statusMsg}>Loading dashboard data...</div>;

  return (
    <div className={styles.usersContainer}>
      <h1 className={styles.pageTitle}>Users</h1>
      
      {/* Summary Cards */}
      <div className={styles.cardsGrid}>
        <SummaryCard icon={<FaUsers />} label="USERS" count={totalUsers} iconBgColor="rgba(223, 24, 255, 0.1)" />
        <SummaryCard icon={<FaUserFriends />} label="ACTIVE USERS" count="2,453" iconBgColor="rgba(87, 24, 255, 0.1)" />
        <SummaryCard icon={<FaUsers />} label="USERS WITH LOANS" count="12,453" iconBgColor="rgba(245, 95, 68, 0.1)" />
        <SummaryCard icon={<FaUsers />} label="USERS WITH SAVINGS" count="102,453" iconBgColor="rgba(255, 51, 102, 0.1)" />
      </div>

      <div className={styles.tableWrapper}>
        {/* Filter Popover */}
        {showFilter && (
          <div className={styles.filterPopover}>
            <div className={styles.filterGroup}>
              <label>Organization</label>
              <select><option>Select</option></select>
            </div>
            <div className={styles.filterGroup}>
              <label>Username</label>
              <input type="text" placeholder="User" />
            </div>
            <div className={styles.filterGroup}>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.filterGroup}>
              <label>Date</label>
              <input type="date" />
            </div>
            <div className={styles.filterButtons}>
              <button className={styles.resetBtn}>Reset</button>
              <button className={styles.filterBtn}>Filter</button>
            </div>
          </div>
        )}

        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>ORGANIZATION <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th>USERNAME <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th>EMAIL <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th>PHONE NUMBER <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th>DATE JOINED <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th>STATUS <MdFilterList onClick={() => setShowFilter(!showFilter)} className={styles.filterIcon} /></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{new Date(user.createdAt).toLocaleDateString('en-US', { 
                  month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true 
                }).replace(',', '')}</td>
                <td><StatusBadge status={user.status} /></td>
                <td className={styles.actionCell}>
                  <FaEllipsisV onClick={() => setActiveActionMenu(activeActionMenu === user.id ? null : user.id)} />
                  
                  {/* Action Popover */}
                  {activeActionMenu === user.id && (
                    <div className={styles.actionPopover}>
                      <button onClick={() => navigate(`/users/${user.id}`)}>
                        <FaEye /> View Details
                      </button>
                      <button><FaUserTimes /> Blacklist User</button>
                      <button><FaUserCheck /> Activate User</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className={styles.paginationFooter}>
          <div className={styles.showingInfo}>
            Showing 
            <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            out of {totalUsers}
          </div>

          <div className={styles.pageNavigation}>
            <button className={styles.navBtn} disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>
              <FaChevronLeft />
            </button>
            
            {getPageNumbers().map((page, index) => (
              <span 
                key={index} 
                className={`${styles.pageItem} ${currentPage === page ? styles.active : ''} ${page === '...' ? styles.dots : ''}`}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
              >
                {page}
              </span>
            ))}

            <button className={styles.navBtn} disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
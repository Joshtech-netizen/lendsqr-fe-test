import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/userService';
import type { IUser } from '../../types/users';
import StatusBadge from '../../components/Statusbadge';
import SummaryCard from '../../components/Dashboard/SummaryCard';
import { FaEllipsisV, FaUsers, FaUserFriends, FaCoins, FaDatabase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import styles from './Users.module.scss';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Pagination Logic
  const totalUsers = users.length; // 500 records
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Dynamic Page Number Logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Logic to show 1 2 3 ... 49 50 or similar
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages - 1, totalPages);
      } else if (currentPage > totalPages - 3) {
        pages.push(1, 2, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pages;
  };

  if (loading) return <div className={styles.statusMsg}>Loading dashboard data...</div>;

  return (
    <div className={styles.usersContainer}>
      <h1 className={styles.pageTitle}>Users</h1>
      
      <div className={styles.cardsGrid}>
        <SummaryCard icon={<FaUsers />} label="USERS" count={totalUsers} iconBgColor="rgba(223, 24, 255, 0.1)" />
        <SummaryCard icon={<FaUserFriends />} label="ACTIVE USERS" count="2,453" iconBgColor="rgba(87, 24, 255, 0.1)" />
        <SummaryCard icon={<FaDatabase />} label="USERS WITH LOANS" count="12,453" iconBgColor="rgba(245, 95, 68, 0.1)" />
        <SummaryCard icon={<FaCoins />} label="USERS WITH SAVINGS" count="102,453" iconBgColor="rgba(255, 51, 102, 0.1)" />
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>ORGANIZATION <MdFilterList className={styles.filterIcon} /></th>
              <th>USERNAME <MdFilterList className={styles.filterIcon} /></th>
              <th>EMAIL <MdFilterList className={styles.filterIcon} /></th>
              <th>PHONE NUMBER <MdFilterList className={styles.filterIcon} /></th>
              <th>DATE JOINED <MdFilterList className={styles.filterIcon} /></th>
              <th>STATUS <MdFilterList className={styles.filterIcon} /></th>
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
                <td className={styles.actionCell}><FaEllipsisV /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* High-Fidelity Pagination Footer */}
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
            <button className={styles.navBtn} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
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

            <button className={styles.navBtn} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
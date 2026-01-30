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

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  if (loading) return <div className={styles.statusMsg}>Loading dashboard...</div>;

  return (
    <div className={styles.usersContainer}>
      <h1 className={styles.pageTitle}>Users</h1>
      
      <div className={styles.cardsGrid}>
        <SummaryCard icon={<FaUsers />} label="USERS" count={users.length} iconBgColor="rgba(223, 24, 255, 0.1)" />
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
                  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
                })}</td>
                <td><StatusBadge status={user.status} /></td>
                <td className={styles.actionCell}><FaEllipsisV /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.paginationFooter}>
          <div className={styles.showingInfo}>
            Showing 
            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            out of {users.length}
          </div>
          <div className={styles.pageNavigation}>
             <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}><FaChevronLeft /></button>
             <span>Page {currentPage} of {totalPages}</span>
             <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
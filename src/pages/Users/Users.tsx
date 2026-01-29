import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/userService';
import type { IUser } from '../../types/users';
import SummaryCard from '../../components/Dashboard/SummaryCard';
import StatusBadge from '../../components/Statusbadge'; // Use your existing component
import { FaUsers, FaUserFriends, FaCoins, FaDatabase, FaEllipsisV } from 'react-icons/fa';
import styles from './Users.module.scss';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.usersContainer}>
      <h1 className={styles.pageTitle}>Users</h1>
      
      {/* Reusing Summary Cards */}
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
              <th>ORGANIZATION</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>DATE JOINED</th>
              <th>STATUS</th>
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
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <StatusBadge status={user.status} />
                </td>
                <td>
                  <FaEllipsisV className={styles.actionIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Basic Pagination Controls */}
        <div className={styles.pagination}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {Math.ceil(users.length / usersPerPage)}</span>
          <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= users.length}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
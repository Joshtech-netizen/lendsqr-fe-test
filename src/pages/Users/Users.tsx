import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/userService';
import type { IUser } from '../../types/users'; // Removed 'type' keyword for broader compatibility
import StatusBadge from '../../components/Statusbadge';
import { FaEllipsisV } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import styles from './Users.module.scss';

const Users: React.FC = () => {
  // All hooks must be INSIDE the component function
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading records from JSON...</div>;
  
  if (users.length === 0) {
    return (
      <div className={styles.noData}>
        No records found. Check console (F12) for errors or verify /public/data/users.json exists.
      </div>
    );
  }

  return (
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
          {users.map((user) => (
            <tr key={user.id}>
              {/* Mapping directly to the keys found in your users.json */}
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                {new Date(user.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </td>
              <td>
                <StatusBadge status={user.status} />
              </td>
              <td className={styles.actionCell}>
                <FaEllipsisV />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
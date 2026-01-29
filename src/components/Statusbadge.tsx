import React from 'react';
import styles from './Statusbadge.module.scss';

interface StatusBadgeProps {
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted' | string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  // Convert status to lowercase to match CSS classes
  const statusClass = status.toLowerCase();

  return (
    <div className={`${styles.badge} ${styles[statusClass]}`}>
      {status}
    </div>
  );
};

export default StatusBadge;
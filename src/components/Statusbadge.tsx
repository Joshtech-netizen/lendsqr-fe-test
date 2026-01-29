import React from 'react';
import styles from './Statusbadge.module.scss';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClass = status ? status.toLowerCase() : 'inactive';

  return (
    <span className={`${styles.badge} ${styles[statusClass]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
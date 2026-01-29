import React from 'react';
import SummaryCard from '../../components/Dashboard/SummaryCard';
import { FaUsers, FaUserFriends, FaCoins, FaDatabase } from 'react-icons/fa';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  const cardData = [
    { icon: <FaUsers />, label: 'USERS', count: '2,453', color: 'rgba(223, 24, 255, 0.1)' },
    { icon: <FaUserFriends />, label: 'ACTIVE USERS', count: '2,453', color: 'rgba(87, 24, 255, 0.1)' },
    { icon: <FaDatabase />, label: 'USERS WITH LOANS', count: '12,453', color: 'rgba(245, 95, 68, 0.1)' },
    { icon: <FaCoins />, label: 'USERS WITH SAVINGS', count: '102,453', color: 'rgba(255, 51, 102, 0.1)' },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.pageTitle}>Users</h1>
      <div className={styles.cardsGrid}>
        {cardData.map((card, index) => (
          <SummaryCard 
            key={index}
            icon={card.icon}
            label={card.label}
            count={card.count}
            iconBgColor={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
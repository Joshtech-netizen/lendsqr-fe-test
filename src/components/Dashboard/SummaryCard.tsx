import React from 'react';
import styles from './SummaryCard.module.scss';

interface SummaryCardProps {
  icon: React.ReactNode;
  label: string;
  count: string | number;
  iconBgColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, count, iconBgColor }) => {

  const iconColor = iconBgColor.replace('0.1', '1'); 

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer} style={{ backgroundColor: iconBgColor }}>
        <span style={{ color: iconColor, display: 'flex' }}>{icon}</span>
      </div>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.count}>{count}</h2>
    </div>
  );
};

export default SummaryCard;
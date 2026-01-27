import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar />
      <div className={styles.contentBody}>
        <Sidebar />
        <main className={styles.mainContent}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
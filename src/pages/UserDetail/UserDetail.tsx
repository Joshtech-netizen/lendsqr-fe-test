import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegStar } from 'react-icons/fa';
import type { IUser } from '../../types/users';
import styles from './UserDetail.module.scss';

const UserDetail: React.FC = () => {
    const navigate = useNavigate();


    const [user] = useState<IUser | null>(() => {
        const savedUser = localStorage.getItem('lendsqr_selected_user');
        try {
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error("Failed to parse user data:", error);
            return null;
        }
    });

    const [activeTab, setActiveTab] = useState('General Information');

    // FIX: Guard Clause - If user is NOT found, show loading/error
    if (!user) {
        return (
            <div className={styles.detailsContainer}>
                <p>User profile not found. Please return to the user list.</p>
                <button onClick={() => navigate('/users')}>Back to Users</button>
            </div>
        );
    }

       return (
        <div className={styles.detailsContainer}>
            <button className={styles.backBtn} onClick={() => navigate('/users')}>
                <FaArrowLeft /> Back to Users
            </button>

            <div className={styles.headerActions}>
                <h1 className={styles.pageTitle}>User Details</h1>
                <div className={styles.actionButtons}>
                    <button className={styles.blacklistBtn}>BLACKLIST USER</button>
                    <button className={styles.activateBtn}>ACTIVATE USER</button>
                </div>
            </div>

            <div className={styles.profileSummary}>
                <div className={styles.mainInfo}>
                    <div className={styles.avatar}>
                        <img src={user.profile?.avatar} alt={user.userName} />
                    </div>
                    <div className={styles.nameGroup}>
                        <h2>{`${user.profile?.firstName || ''} ${user.profile?.lastName || ''}`}</h2>
                        <p>{user.accountNumber}</p>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.tierGroup}>
                        <p>User's Tier</p>
                        <div className={styles.stars}>
                            <FaStar className={styles.activeStar} />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.balanceGroup}>
                        <h2>₦{user.accountBalance}</h2>
                        <p>{user.profile?.bvn}/Providus Bank</p>
                    </div>
                </div>

                <div className={styles.tabs}>
                    {['General Information', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'].map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? styles.activeTab : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.infoContent}>
                <section className={styles.infoSection}>
                    <h3>Personal Information</h3>
                    <div className={styles.grid}>
                        <div className={styles.item}><label>FULL NAME</label><p>{`${user.profile?.firstName} ${user.profile?.lastName}`}</p></div>
                        <div className={styles.item}><label>PHONE NUMBER</label><p>{user.phoneNumber}</p></div>
                        <div className={styles.item}><label>EMAIL ADDRESS</label><p>{user.email}</p></div>
                        <div className={styles.item}><label>BVN</label><p>{user.profile?.bvn}</p></div>
                        <div className={styles.item}><label>GENDER</label><p>{user.profile?.gender}</p></div>
                        <div className={styles.item}><label>MARITAL STATUS</label><p>Single</p></div>
                        <div className={styles.item}><label>CHILDREN</label><p>None</p></div>
                        <div className={styles.item}><label>TYPE OF RESIDENCE</label><p>Parent's Apartment</p></div>
                    </div>
                </section>

                <section className={styles.infoSection}>
                    <h3>Education and Employment</h3>
                    <div className={styles.grid}>
                        <div className={styles.item}><label>LEVEL OF EDUCATION</label><p>{user.education?.level}</p></div>
                        <div className={styles.item}><label>EMPLOYMENT STATUS</label><p>{user.education?.employmentStatus}</p></div>
                        <div className={styles.item}><label>SECTOR OF EMPLOYMENT</label><p>{user.education?.sector}</p></div>
                        <div className={styles.item}><label>DURATION OF EMPLOYMENT</label><p>{user.education?.duration}</p></div>
                        <div className={styles.item}><label>OFFICE EMAIL</label><p>{user.education?.officeEmail}</p></div>
                           <div className={styles.item}>
                               <label>MONTHLY INCOME</label>
                               <p>₦{user.education?.monthlyIncome?.[0] || '0'} - ₦{user.education?.monthlyIncome?.[1] || '0'}</p>
                           </div>
                           <div className={styles.item}><label>LOAN REPAYMENT</label><p>{user.education?.loanRepayment}</p></div>
                       </div>
                   </section>

                   {/* Socials Section */}
                   <section className={styles.infoSection}>
                       <h3>Socials</h3>
                       <div className={styles.grid}>
                           <div className={styles.item}>
                               <label>TWITTER</label>
                               <p>{user?.socials?.twitter || '@' + user?.userName?.toLowerCase()}</p>
                           </div>
                           <div className={styles.item}>
                               <label>FACEBOOK</label>
                               <p>{user?.socials?.facebook || user?.profile?.firstName + ' ' + user?.profile?.lastName}</p>
                           </div>
                           <div className={styles.item}>
                               <label>INSTAGRAM</label>
                               <p>{user?.socials?.instagram || '@' + user?.userName?.toLowerCase()}</p>
                           </div>
                       </div>
                   </section>

                   {/* Guarantor Section */}
                   <section className={styles.infoSection}>
                       <h3>Guarantor</h3>
                       <div className={styles.grid}>
                           <div className={styles.item}>
                               <label>FULL NAME</label>
                               <p>{`${user?.guarantor?.firstName || 'Debby'} ${user?.guarantor?.lastName || 'Ogana'}`}</p>
                           </div>
                           <div className={styles.item}>
                               <label>PHONE NUMBER</label>
                               <p>{user?.guarantor?.phoneNumber || '07060780922'}</p>
                           </div>
                           <div className={styles.item}>
                               <label>EMAIL ADDRESS</label>
                               <p>{user?.guarantor?.address || 'debby@gmail.com'}</p>
                           </div>
                           <div className={styles.item}>
                               <label>RELATIONSHIP</label>
                               <p>Sister</p>
                           </div>
                       </div>
                   </section>
            </div>
        </div>
    );
};
export default UserDetail;
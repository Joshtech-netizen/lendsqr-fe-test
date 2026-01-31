import { User, UserStatus } from '../types/user';

const organizations = ['Lendsqr', 'Irorun', 'Lendstar'];
const statuses: UserStatus[] = ['Active', 'Inactive', 'Pending', 'Blacklisted'];

/**
 * Generates 500 mock users to satisfy the Lendsqr assessment criteria.
 * Using a consistent schema based on the provided Figma design screenshots.
 */
export const generateMockUsers = (count: number = 500): User[] => {
  return Array.from({ length: count }).map((_, index) => {
    const id = (index + 1).toString();
    const orgName = organizations[Math.floor(Math.random() * organizations.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    return {
      id,
      orgName,
      userName: `user_name_${id}`,
      email: `user${id}@lendsqr.com`,
      phoneNumber: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
      createdAt: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString(),
      status,
      profile: {
        firstName: 'Grace',
        lastName: 'Effiom',
        phoneNumber: '07060780922',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${id}`,
        gender: 'Female',
        bvn: '9912345678',
        address: "Parent's Apartment",
        maritalStatus: 'Single',
        children: 'None',
        typeOfResidence: "Parent's Apartment"
      },
      education: {
        level: 'B.Sc',
        employmentStatus: 'Employed',
        sector: 'FinTech',
        duration: '2 years',
        officeEmail: `office${id}@lendsqr.com`,
        monthlyIncome: ['200,000', '400,000'],
        loanRepayment: '40,000'
      },
      socials: {
        facebook: '@grace_effiom',
        instagram: '@grace_effiom',
        twitter: '@grace_effiom'
      },
      guarantor: {
        fullName: 'Debby Ogana',
        phoneNumber: '07060780922',
        email: 'debby@gmail.com',
        relationship: 'Sister'
      }
    };
  });
};
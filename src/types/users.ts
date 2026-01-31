export type StatusType = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface IUser {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string; 
  accountBalance: string;
  accountNumber: string;
  profile: {
    firstName: string;
    lastName: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[]; 
    loanRepayment: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
}
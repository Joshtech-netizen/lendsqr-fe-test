export type UserStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PENDING: "Pending",
  BLACKLISTED: "Blacklisted",
};

export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface IEducation {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [string, string]; 
  loanRepayment: string;
}

export interface ISocials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface IGuarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  relationship: string;
}

export interface IUser {
  id: number; 
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  profile: string; 
  education: string; 
  guarantor: string; 
}
export type StatusType = "Active" | "Inactive" | "Pending" | "Blacklisted";

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
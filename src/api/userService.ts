import type { IUser } from '../types/users';

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await fetch('/data/users.json'); 
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};
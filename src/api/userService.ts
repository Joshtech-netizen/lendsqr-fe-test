
import type { IUser } from '../types/users';

export const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await fetch('/data/users.json'); 
    
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
      return [];
    }

    const text = await response.text(); 
    try {
      return JSON.parse(text); 
    } catch (parseError) {
      console.error("JSON Parse Error: Your users.json has a syntax error.", parseError);
      return [];
    }
  } catch (error) {
    console.error("Network Error: Could not reach the file.", error);
    return [];
  }
};
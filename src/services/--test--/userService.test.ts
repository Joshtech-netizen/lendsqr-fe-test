import { vi, describe, it, expect } from 'vitest';
import { fetchUsers } from '../../api/userService';

describe('userService', () => {
  it('should fetch 500 user records successfully', async () => {
        const mockUsers = Array(500).fill({ userName: 'TestUser' });
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    });

    const users = await fetchUsers();
    expect(users).toHaveLength(500); // Positive scenario
    expect(users[0]).toHaveProperty('userName');
  });
});
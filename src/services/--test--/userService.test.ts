import { fetchUsers } from '../../api/userService';

describe('userService', () => {
  it('should fetch 500 user records successfully', async () => {
    const users = await fetchUsers();
    expect(users).toHaveLength(500); // Positive scenario
    expect(users[0]).toHaveProperty('userName');
  });
});
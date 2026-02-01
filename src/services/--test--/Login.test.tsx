import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Login from '../../pages/Login/Login';

describe('Login Component', () => {
  it('should remain disabled when fields are empty', () => {
    // Wrap the component in MemoryRouter to fix the useNavigate error
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    const loginButton = screen.getByRole('button', { name: /log in/i });
    
    // Negative scenario: Verify button is disabled initially
    expect(loginButton).toBeDisabled(); 
  });
});
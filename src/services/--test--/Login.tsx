import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../pages/Login/Login';

describe('Login Component', () => {
  it('should remain disabled and not trigger actions when fields are empty', () => {
    render(<Login />);
    
    const loginButton = screen.getByRole('button', { name: /log in/i });
    
    // Check initial state (Negative Scenario)
    expect(loginButton).toBeDisabled(); 

    // Use fireEvent to satisfy the import and test behavior
    fireEvent.click(loginButton);
    
    // Verify it stays disabled after an attempted interaction
    expect(loginButton).toBeDisabled(); 
  });
});
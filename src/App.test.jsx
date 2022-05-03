// route test from list page to detail
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders a list of hogwarts houses', async () => {
      render(
          <MemoryRouter>
              <App />
          </MemoryRouter>
      );

      screen.getByText('/loading/i');

      const link = await screen.findByText('Slytherin');
      
      userEvent.click(link);

      await screen.findByText('/traits/i');
  });
});
// route test from list page to detail
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    it('renders a list of hogwarts houses', async () => {
        render(
            <MemoryRouter initialEntries={['/houses/a9704c47-f92e-40a4-8771-ed1899c9b9c1']}>
                <App />
            </MemoryRouter>
        );

        screen.getByText(/loading.../i, {timeout: 3000});

        await waitForElementToBeRemoved(screen.getByText(/loading.../i));

        const link = await screen.findByAltText('Slytherin house crest');
        userEvent.click(link);

        await screen.findByText('Ghost: Bloody Baron');
    });
});
import { screen, render  } from '@testing-library/react';
import Navbar from './Navbar';

test('renders learn react link', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/contact/i);
    expect(linkElement).toBeInTheDocument();
  });
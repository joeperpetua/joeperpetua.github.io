import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const header = screen.getAllByText(/Joel/i);
  expect(header[0]).toBeInTheDocument();
});

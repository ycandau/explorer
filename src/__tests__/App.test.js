import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders App', () => {
  render(<App />);
  const element = screen.getByText('App');
  expect(element).toBeInTheDocument();
});

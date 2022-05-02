import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // expect(h3.innerHTML).contain('hello there')
  const linkElement = screen.getByText("Our First Test");
  expect(linkElement).toBeInTheDocument();
});

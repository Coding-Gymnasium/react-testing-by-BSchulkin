import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

let colorButton;

beforeEach(() => {
  render(<App />);
  colorButton = screen.getByRole('button', { name: 'Change to blue' });
});

test('button has the correct initial color', () => {
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton.textContent).toBe('Change to red');
});

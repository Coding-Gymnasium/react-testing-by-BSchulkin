import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

let colorButton;
let checkbox;

beforeEach(() => {
  render(<App />);
  colorButton = screen.getByRole('button', { name: 'Change to blue' });
  checkbox = screen.getByRole('checkbox');
});

describe('Test Change color button functionality', () => {
  it('button has the correct initial color', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  });

  it('button turns blue when clicked', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    expect(colorButton.textContent).toBe('Change to red');
  });
});

describe('Test checkbox toggles button', () => {
  it('that the button starts out enabled', () => {
    expect(colorButton).toBeEnabled();
  });

  it('that the checkbox starts unchecked', () => {
    expect(checkbox).not.toBeChecked();
  });

  it('that the checkbox switches button from enabled to disabled and viceversa', () => {
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
  });
});

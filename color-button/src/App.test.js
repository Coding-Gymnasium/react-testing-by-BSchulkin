import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

let colorButton;
let checkbox;
let checkboxOne;

beforeEach(() => {
  render(<App />);
  colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  checkbox = screen.getByRole('checkbox');
  checkboxOne = screen.getByRole('checkbox', {
    name: 'Disable button',
  });
});

describe('Test Change color button functionality', () => {
  it('button has the correct initial color', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  });

  it('button turns MidnightBlue when clicked', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

    expect(colorButton.textContent).toBe('Change to Medium Violet Red');
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
    fireEvent.click(checkboxOne);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkboxOne);
    expect(colorButton).toBeEnabled();
  });

  it('Checkbox changes button color to gray when disabled and to MidnightBlue when enabled', () => {
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

    fireEvent.click(checkboxOne);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkboxOne);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  });

  it('Checkbox changes button color to gray when disabled and to MediumVioletRed when enabled', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(checkboxOne);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkboxOne);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  });
});

describe('spaces before camel-case capital letters', () => {
  it('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  it('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

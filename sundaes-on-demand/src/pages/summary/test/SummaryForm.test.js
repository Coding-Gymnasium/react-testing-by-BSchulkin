import { fireEvent, render, screen } from '@testing-library/react';
import { SummaryForm } from '../SummaryForm';

let checkbox;
let tCButton;

beforeEach(() => {
  render(<SummaryForm />);
  checkbox = screen.getByRole('checkbox', {
    label: 'Terms and Conditions',
  });
  tCButton = screen.getByRole('button', { name: 'Confirm order' });
});

describe('Checkbox enables button', () => {
  it('Checkbox is unchecked by default', () => {
    render(<SummaryForm />);

    expect(checkbox).not.toBeChecked();
  });

  it('Checking box enables button', () => {
    render(<SummaryForm />);

    expect(tCButton).toBeDisabled();
    fireEvent(checkbox);
    expect(tCButton).toBeEnabled();
  });

  it('Unchecking checkbox again disables button', () => {
    render(<SummaryForm />);
    expect(tCButton).toBeDisabled();
    fireEvent(checkbox);
    expect(tCButton).toBeEnabled();
    fireEvent(checkbox);
    expect(tCButton).toBeDisabled();
  });
});

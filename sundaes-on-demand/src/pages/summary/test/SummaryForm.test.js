import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SummaryForm } from '../SummaryForm';

let checkbox;
let tCButton;

beforeEach(() => {
  render(<SummaryForm />);
  checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
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
    userEvent.click(checkbox);
    expect(tCButton).toBeEnabled();
  });

  it('Unchecking checkbox again disables button', () => {
    render(<SummaryForm />);
    expect(tCButton).toBeDisabled();
    userEvent.click(checkbox);
    expect(tCButton).toBeEnabled();
    userEvent.click(checkbox);
    expect(tCButton).toBeDisabled();
  });
});

describe('popover responds to hover', () => {
  it('popover starts out hidden', () => {});
  it('popover appears upon mouseover of checkbox label', () => {});
  it('popover disappears when we mouse out', () => {});
});

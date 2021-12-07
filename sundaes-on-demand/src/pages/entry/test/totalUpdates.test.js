import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
import { OrderDetailsProvider } from '../../../context/OrderDetails';

describe('update scoop subtotal when scoops change', () => {
  beforeEach(() => {
    render(<Options optionType="scoops" />, {
      wrapper: OrderDetailsProvider,
    });
  });

  it('make sure total starts out $0.00', () => {
    const scoopsSubtotal = screen.getByText('Scoops total: $', {
      exact: false,
    });

    expect(scoopsSubtotal).toHaveTextContent('0.00');
  });

  it('update vanilla scoops to 1 and check the subtotal', async () => {
    const scoopsSubtotal = screen.getByText('Scoops total: $', {
      exact: false,
    });
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');
  });

  it('update chocolate scoops to 2 and check subtotal', async () => {
    const scoopsSubtotal = screen.getByText('Scoops total: $', {
      exact: false,
    });
    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });

    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    // expect(scoopsSubtotal).toHaveTextContent('6.00');
    expect(scoopsSubtotal).toHaveTextContent('4.00');
  });
});

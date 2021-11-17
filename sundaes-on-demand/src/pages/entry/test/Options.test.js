import { render, screen } from '@testing-library/react';

import Options from '../Options';

describe('Tests Options module features', () => {
  it('can find the images', async () => {
    render(<Options optionType="scoops" />);

    // find images
    const scoopImages = await screen.findAllByRole('img', {
      name: /scoop$/i,
    });

    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map(element => element.alt);

    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  it('displays image for each scoop option from server', () => {});
});

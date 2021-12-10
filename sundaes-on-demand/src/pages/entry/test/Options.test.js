import {
  render,
  screen,
} from '../../../test-utils/testing-library-utils';

import Options from '../Options';

describe('Tests Options module features', () => {
  describe('scoops options', () => {
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

  describe('Toppings options', () => {
    it('can find the images', async () => {
      render(<Options optionType="toppings" />);

      const toppingImages = await screen.findAllByRole('img', {
        name: /toppings$/i,
      });

      const altText = toppingImages.map(image => image.alt);

      expect(altText).toEqual([
        'Cherries toppings',
        'M&Ms toppings',
        'Hot fudge toppings',
      ]);
    });
  });
});

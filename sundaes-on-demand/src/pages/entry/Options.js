import { useEffect, useState } from 'react';
import axios from 'axios';

import ScoopOption from '../entry/ScoopOption';
import Row from 'react-bootstrap/Row';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => {
        // TODO: handle error response
      });
  });

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
}

import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  /*
   * if button red check goes to gray uncheck goes red
   * if button blue check goes to gray uncheck goes blue
   */

  const checkboxToggleColor = () => {
    if (buttonColor === 'red' || 'blue') setButtonColor('gray');
    if (buttonColor === 'gray') setButtonColor('blue');
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: '#fff' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
          setButtonColor(checkboxToggleColor);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

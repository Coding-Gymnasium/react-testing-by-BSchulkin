import { useState } from 'react';

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(false);

  const handleCheckboxChange = e => {
    setDisabled(e.target.checked);
  };

  return (
    <div className="summary-form">
      <input
        type="checkbox"
        id="t-and-c-checkbox"
        defaultChecked={disabled}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="t-and-c-checkbox">Terms and Conditions</label>

      <button disabled={!disabled}>Confirm order</button>
    </div>
  );
};

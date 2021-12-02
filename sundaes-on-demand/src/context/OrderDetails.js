import {
  createContext,
  useContext,
  useContext,
  useMemo,
} from 'react';

const OrderDetails = createContext();

// create custom hook to check whether we're inside a provider
//
const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      'useOrderDetails must be used whithin an OrderDetailsProvider',
    );
  }

  return context;
};

const OrderDetailsProvider = props => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    };

    // getter: object containing options counts for scoops and toppings, subtotals and totals.
    // setter: updateOptionCount
    return [{ ...optionCounts }, updateItemCount];
  }, []);
  return <OrderDetails.Provider value={value} {...props} />;
};

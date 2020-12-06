import { createContext, useContext } from 'react';

const StatContext = createContext({
  Countries: null,
  Global: null,
  Date: null,
});

export const useStats = () => useContext(StatContext);

export default StatContext;

import { useContext } from 'react';
import GaesContext from './GaesContext';
import { useStrictDict, StrictDict } from './StrictDict';

export const keyStore = (collection, config = {}) => StrictDict(
  Object.keys(collection).reduce(
    (obj, key) => ({ ...obj, [key]: key }),
    {},
  ),
);

export const useKeyStore = () => {
  const config = useContext(GaesContext);
  return (collection) => keyStore(collection, config);
};
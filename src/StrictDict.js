import React from 'react';
import GaesContext from './GaesContext';
import strictGet from './strictGet';

export const StrictDict = (dict, config = {}) => {
  const get = (target, name) => strictGet(target, name, config);
  if (Array.isArray(dict)) {
    return new Proxy(
      dict.reduce((obj, curr) => ({ ...obj, [curr]: curr }), {}),
      { get },
    );
  }
  return new Proxy(dict, { get });
};

export const useStrictDict = () => {
  const config = React.useContext(GaesContext);
  return (dict) => StrictDict(dict, config);
};
import React from 'react';
import GaesContext from './GaesContext';
import { StrictDict, useStrictDict } from './StrictDict';

const testDict = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
};

const DefaultErrorDict = () => {
  const strictDict = StrictDict(testDict);
  return (<div>Throws a default error. {strictDict.fakeKey}</div>);
};

const customError = (target, name) => {
  console.log({ customGaesError: { target, name } });
};

const CustomErrorDict = () => {
  const strictDict = useStrictDict()(testDict);
  console.log(strictDict.fakeKey);
  return (
      <div>Throws a custom error. {strictDict.fakeKey}</div>
  );
};

export default () => (
  <div>
    <DefaultErrorDict />
    <GaesContext.Provider value={{
      development: customError,
      production: customError,
      test: customError,
    }}>
      <CustomErrorDict />
    </GaesContext.Provider>
  </div>
);
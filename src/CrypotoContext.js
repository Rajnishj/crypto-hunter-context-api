import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CrypotoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setsymbol] = useState("₹");
  useEffect(() => {
    if (currency === "INR") setsymbol("₹");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);
  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CrypotoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [cryptoData, setCryptoData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(function () {
    setTimeout(() => {
      setCryptoData({ returns: 100 });
    });
  }, 5000);
  useEffect(function () {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

  useEffect(function () {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

 
  const cryptoReturns = useMemo(() => {

    console.log("hi there before!");
    return exchangeData.returns + cryptoData.returns;
  }, [exchangeData, cryptoData]);
 
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;

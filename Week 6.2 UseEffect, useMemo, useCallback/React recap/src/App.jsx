// import { useMemo } from "react";
// import { useEffect } from "react";
// import { useState } from "react";



// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [cryptoData, setCryptoData] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(function () {
//     setTimeout(() => {
//       setCryptoData({ returns: 100 });
//     });
//   }, 5000);
//   useEffect(function () {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 3000);
//   }, []);

//   useEffect(function () {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 1000);
//   }, []);

 
//   const cryptoReturns = useMemo(() => {

//     console.log("hi there before!");
//     return exchangeData.returns + cryptoData.returns;
//   }, [exchangeData, cryptoData]);
 
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

// usecallback is not about minimizing the amount of code that is run
// Usecallback is not about rendering a child, if the function hasn't/doesn't need to change across renders


// import { useMemo } from "react";
// import { useCallback } from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [cryptoData, setCryptoData] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(function () {
//     setTimeout(() => {
//       setCryptoData({ returns: 100 });
//     });
//   }, 5000);
//   useEffect(function () {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 3000);
//   }, []);

//   useEffect(function () {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 1000);
//   }, []);

 
//   const cryptoReturns = useCallback(function() {
//     return exchangeData.returns + cryptoData.returns;
//   }, [exchangeData, cryptoData]) 
 
//   const incomeTax = (cryptoReturns() + bankData.income) * 0.3;

//   return <div>
//     <CryptoGainsCalculator cryptoReturns={cryptoReturns}/>
//   </div>;
// }

// function CryptoGainsCalculator({cryptoReturns})  {
// return <div>
//   Your crypto returns are {cryptoReturns()}
// </div>
// }

// export default App;




// useRef



import { useCallback, useRef, useEffect, useState } from "react";


function App() {
const [incomTax, setIncomeTax] = useState(20000);
const divRef = useRef();
useEffect(() => {
  setTimeout(() => {
    console.log(divRef.current);
divRef.current.innerHTML = 10
  }, 5000)
}, [])

return <div>
  Hi there, your income tax returns are <div ref={divRef}>{incomTax}</div>
</div>

}

export default App;
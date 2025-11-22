import React, { useEffect } from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Screens from "./pages/Screens/Screens";
import TradeInfo from "./pages/Equity/TradeInfo";

const App = () => {
  return (
    <>
      <main className="navbar">
        <section className="logo">Logo</section>
        <section className="menu">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li><NavLink to="/screens">SCREENS</NavLink></li>
            <li>LOGIN</li>
            <li>GET FREE ACCOUNT</li>
          </ul>
        </section>
      </main>
      {/* <NavLink to="/">Home</NavLink> */}
      {/* <NavLink to="/screens">Screens</NavLink> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screens" element={<Screens />} />
        <Route path="/TradeInfo" element={<TradeInfo />} />
      </Routes>
    </>
  );
};

// useEffect(() => {(
//     async () => {
//         const response = await historicalData();
//     }
// )
// },[])
// useEffect(() => {
//     historicalData();
// },[])
export default App;

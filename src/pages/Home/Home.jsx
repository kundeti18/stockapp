import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const consolidated = () => {
    navigate('/TradeInfo');
  }
  return (
    <>
    <input  type="text" placeholder="Search for a company"/>
    <button onClick={consolidated} type="submit">Search</button>
    </>
  )
}

export default Home
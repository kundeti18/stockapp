import React from "react";
import axios from 'axios';
import apiconfig from "../apiconfig";

const statement = async () => {
  try {
    const statmentData = await axios.get(`${apiconfig.BASE_URL}/statement`, {
      params: {
        stock_name: "INFOSYS",
        stats: "balancesheet",
      },
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${apiconfig.API_KEY}`,
        'x-api-key': `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default statement;

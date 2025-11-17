import React from "react";
import axios from 'axios';
import apiconfig from "../apiconfig";

const priceShocker = async () => {
  try {
    const priceData = await axios.get(`${apiconfig.BASE_URL}/price_shockers`, {
      headers: {
        Authorization: `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default priceShocker;

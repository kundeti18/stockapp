import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const stockTargetPrice = async () => {
  try {
    const stockTargetPriceData = await axios.get(`${apiconfig.BASE_URL}/stock_target_price`, {
      params: {
        stock_id: "INFY",
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default stockTargetPrice;

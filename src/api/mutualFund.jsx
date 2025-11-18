import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const mutualFund = async () => {
  const mutualFundData = await axios.get(`${apiconfig.BASE_URL}/mutual_funds`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiconfig.API_KEY}`,
      "x-api-key": `${apiconfig.API_KEY}`,
    },
  });
};

export default mutualFund;

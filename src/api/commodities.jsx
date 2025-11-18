import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const commodities = async () => {
  const commoditiesData = await axios.get(`${apiconfig.BASE_URL}/commodities`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiconfig.API_KEY}`,
      "x-api-key": `${apiconfig.API_KEY}`,
    },
  });
};

export default commodities;

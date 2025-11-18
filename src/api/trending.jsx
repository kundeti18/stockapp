import React from "react";
import axios from 'axios';
import apiconfig from "../apiconfig";

const trending = async () => {
  try {
    const trendingData = await axios.get(`${apiconfig.BASE_URL}/trending`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      }
    });
  } catch (error) {}
};

export default trending;

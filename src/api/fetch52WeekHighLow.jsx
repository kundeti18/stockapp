import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const fetch52WeekHighLow = async () => {
  try {
    const fetch52WeekHighLowData = await axios.get(`${apiconfig.BASE_URL}/fetch_52_week_high_low_data`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default fetch52WeekHighLow;

import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const historicalData = async () => {
  try {
    const historicalData = await axios.get(`${apiconfig.BASE_URL}/historical_data`,
      {
        params: {
          stock_name: "NSDL",
          period: "5yr",
          filter: "price",
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiconfig.API_KEY}`,
          "x-api-key": `${apiconfig.API_KEY}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
  //   finally {
  //     setLoading(false);
  //   }
};

export default historicalData;

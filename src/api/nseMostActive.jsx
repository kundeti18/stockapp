import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const nseMostActive = async () => {
  try {
    const nseMostActiveData = await axios.get(`${apiconfig.BASE_URL}/NSE_most_active`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiconfig.API_KEY}`,
          "x-api-key": `${apiconfig.API_KEY}`,
        },
      }
    );
  } catch (error) {}
};

export default nseMostActive;

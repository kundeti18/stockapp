import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const corporateActions = async () => {
  try {
    const corporateActionsData = await axios.get(`${apiconfig.BASE_URL}/corporate_actions`,
      {
        params: {
          stock_name: "WIPRO",
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiconfig.API_KEY}`,
          "x-api-key": `${apiconfig.API_KEY}`,
        },
      }
    );
  } catch (error) {}
};

export default corporateActions;

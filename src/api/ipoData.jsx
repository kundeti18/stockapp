import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const ipoData = async () => {
  try {
    const ipoResponse = await axios.get(`${apiconfig.BASE_URL}/ipo`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch {}
};

export default ipoData;

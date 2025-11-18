import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const stockDtls = async () => {
  try {
    const stockDtlsData = await axios.get(`${apiconfig.BASE_URL}/stock`, {
      params: {
        name: "Swiggy",
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default stockDtls;

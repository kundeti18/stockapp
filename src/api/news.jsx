import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const news = async () => {
  try {
    const newsData = await axios.get(`${apiconfig.BASE_URL}/news`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${apiconfig.API_KEY}`,
        'x-api-key': `${apiconfig.API_KEY}`
      },
    });
  } catch (error) {
    return error;

  }
};

export default news;

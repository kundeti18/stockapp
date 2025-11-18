import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const recentAnnouncements = async () => {
  try {
    const recentAnnouncementsData = await axios.get(`${apiconfig.BASE_URL}`, {
      params: {
        stock_name: "ITC",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};

export default recentAnnouncements;

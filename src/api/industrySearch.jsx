import React from "react";
import axios from "axios";
import apiconfig from "../apiconfig";

const industrySearch = async () => {
  try {
    const industrySearchData = await axios.get(`${apiconfig.BASE_URL}/industry_search`,
      {
        params: {
          query: "financial",
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

export default industrySearch;

import React from "react";
import axios from 'axios';
import apiconfig from "../apiconfig";

const bseMostActive = async () => {
  try {
    const bseMostActiveData = await axios.get(`${apiconfig.BASE_URL}/BSE_most_active`,{
        headers: {
          Authorization: `Bearer ${apiconfig.API_KEY}`,
          "x-api-key": `${apiconfig.API_KEY}`,
        },
      }
    );
  } catch (error) {}
};

export default bseMostActive;

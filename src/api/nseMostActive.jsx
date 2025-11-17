import React from "react";

const nseMostActive = async () => {
  try {
    const bseMostActiveData = await axios.get(`${apiconfig.BASE_URL}/NSE_most_active`,
      {
        headers: {
          Authorization: `Bearer ${apiconfig.API_KEY}`,
          "x-api-key": `${apiconfig.API_KEY}`,
        },
      }
    );
  } catch (error) {}
};

export default nseMostActive;

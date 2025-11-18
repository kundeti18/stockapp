import apiconfig from "../apiconfig";

const mutualFundDtls = async () => {
  try {
    const mutualFundDtlsData = await Axios.get(`${apiconfig.BASE_URL}/mutual_funds_details`,
      {
        params: {
          stock_name: "PARAG",
        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiconfig.API_KEY}`,
            'x-api-key': `${apiconfig.API_KEY}`,
        },
      }
    );
  } catch (err) {
    return err;
  }
};

export default mutualFundDtls;

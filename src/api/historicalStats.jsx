import apiconfig from "./apiconfig";
import axios from "axios";
import apiconfig from "./apiconfig";

const historicalStats = async () => {
  try {
    const historicalStatsData = await axios.get(`${apiconfig.BASE_URL}/historical_stats`, {
      params: {
        stock_name: "ITC",
        stats: "balancesheet",
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiconfig.API_KEY}`,
        "x-api-key": `${apiconfig.API_KEY}`,
      },
    });
  } catch (error) {}
};


// stock_id required string
// measure_code required string enum
// EPS
// CPS
// CPX
// DPS
// EBI
// EBT
// GPS
// GRM
// NAV
// NDT
// NET
// PRE
// ROA
// ROE
// SAL
// period_type required string enum
// Annual
// Interim
// data_type required string enum
// Actuals
// Estimates
// age required string enum
// OneWeekAgo
// ThirtyDaysAgo
// SixtyDaysAgo
// NinetyDaysAgo
// Current
export default historicalStats;

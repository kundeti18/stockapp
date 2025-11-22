import React from "react";
import data from '../../data/stockDetails.json'
import historicalData from '../../data/historicalResultsAll.json'

const TradeInfo = () => {
  console.log(data);
  const tradeInfoData = data;
  //object Destructuring
  //Stock Details
  const {companyName, companyProfile: {companyDescription,officers,peerCompanyList},currentPrice: {BSE,NSE},percentChange,yearHigh,yearLow,stockTechnicalData, shareholding,stockCorporateActionData,stockDetailsReusableData} = tradeInfoData
  //Find method is used to find an item in the object
  const CompanyDetails = peerCompanyList.find(item => item.companyName === companyName);
  const {priceToBookValueRatio,priceToEarningsValueRatio,marketCap,dividendYieldIndicatedAnnualDividend,ylow,yhigh} = CompanyDetails

  //Historical Results
  const {quarter_results, yoy_results, balancesheet, cashflow, ratios, shareholding_pattern_quarterly, shareholding_pattern_yearly, profit_loss_stats} = historicalData
  return (
    <>
      <div>
        <div>
          <div>
            <h3>{companyName}</h3>
            <h5>{NSE}</h5>
            <h6>{percentChange}</h6>
          </div>
          <div>
            <h3>About</h3>
            <p>{companyDescription}</p>
          </div>
        </div>
        <div>
            <div>
                <label>Market Cap : {marketCap} </label>
                <label>P / E : {priceToEarningsValueRatio?priceToEarningsValueRatio: "N/A"} </label>
                <label>P / B : {priceToBookValueRatio?priceToBookValueRatio: "N/A"} </label>

            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Company Name</th>
                        <th>CMP Rs.</th>
                        <th>P/E</th>
                        <th>Marketcap Rs.(Cr)</th>
                        <th>Div Yld%</th>

                    </tr>
                </thead>
                <tbody>
                {peerCompanyList.map((items , index) => {
                    return (
                        <tr key={items.tickerId}>
                        <td>{index + 1}</td>
                        <td>{items.companyName}</td>
                        <td>{items.price}</td>
                        <td>{items.priceToEarningsValueRatio?items.priceToEarningsValueRatio:" "}</td>
                        <td>{items.marketCap}</td>
                        <td>{items.dividendYieldIndicatedAnnualDividend?items.dividendYieldIndicatedAnnualDividend:" "}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default TradeInfo;

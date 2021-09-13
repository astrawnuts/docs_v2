import React from "react";
import moment from "moment";

export default function GetGSTPeriods(props) {
  // 01 April 2020 to 30 September 2020
  //01 October 2020 to 31st March 2021

  //Today is 16/08/2021
  const today = new Date();
  // const todayDateMoment = moment(new Date()).format("DD-MMM-YYYY");
  const DAY = today.getDate();
  const MONTH = today.getMonth() + 1;
  const YEAR = today.getFullYear();

  // const endFirstHalf = "30/09/" + (YEAR - 1);
  // const endSecondHalf = "31/03/" + YEAR;
  const firstHalfStart = `01-04-${YEAR - 1}`;
  const firstHalfEnd = `30-09-${YEAR - 1}`;
  const secondHalfStart = `01-10-${YEAR - 1}`;
  const secondHalfEnd = `31-03-${YEAR}`;
  const thirdHalfStart = `01-04-${YEAR}`;
  const thirdHalfEnd = `30-09-${YEAR}`;

  const dueToPay = ``;

  var gstFinancialYear = null;

  function x() {
    // if date is less than 31st March then 30/09 - Previous Year
    if (moment(new Date()).isBefore(`${YEAR}-03-31`)) {
      gstFinancialYear = `${firstHalfStart} to ${firstHalfEnd}`;
    }
    // if date is greater than 31st March this year and less than 1st October this year then 31st March this year
    if (
      moment(new Date()).isAfter(`${YEAR}-03-31`) &&
      moment(new Date()).isBefore(`${YEAR}-10-01`)
    ) {
      gstFinancialYear = `${secondHalfStart} to ${secondHalfEnd}`;
    }
    // if date is greater than 30/09 this year and less than 31st March next year then 30/09 this year
    if (
      moment(new Date()).isAfter(`${YEAR}-09-30`) &&
      moment(new Date()).isBefore(`${YEAR+1}-03-31`)
    ) {
      gstFinancialYear = `${thirdHalfStart} to ${thirdHalfEnd}`;
    }
  }

  x();

  return (
    <>
      <strong>
        {gstFinancialYear}
      </strong>
    </>
  );
}

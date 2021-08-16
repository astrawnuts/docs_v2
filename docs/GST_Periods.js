import React from "react";

export default function GetGSTPeriods(props) {
  // 01 April 2020 to 30 September 2020
  //01 October 2020 to 31st March 2021

  //Today is 16/08/2021
  const today = new Date();
  const NZ_Local_Date = today.toLocaleDateString("en-NZ");
  const DAY = today.getDate();
  const MONTH = today.getMonth() + 1;
  const YEAR = today.getFullYear();

  const endFirstHalf = "30/09/" + (YEAR - 1);
  const endSecondHalf = "31/03/" + YEAR;

  function GSTReturnStartPeriod() {
    return today;
  }

  let innerHTMLText =
    "<br />" +
    NZ_Local_Date +
    "<br />" +
    endFirstHalf +
    "<br />" +
    endSecondHalf;

  return (
    <>
      {/* <div>Today's Date Is: {NZ_Local_Date}</div> <br /> */}
      <strong>
        {endFirstHalf} or {endSecondHalf}
      </strong>
      {/* <br /> */}
    </>
  );
}

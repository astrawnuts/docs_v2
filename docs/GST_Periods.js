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
  const firstHalfStart = `01-04-${YEAR}`;
  const firstHalfEnd = `30-09-${YEAR}`;
  const secondHalfStart = `01-10-${YEAR}`;
  const secondHalfEnd = `31-03-${YEAR + 1}`;

  // let innerHTMLText =
  //   "<br />" +
  //   // NZ_Local_Date +
  //   "<br />" +
  //   endFirstHalf +
  //   "<br />" +
  //   endSecondHalf;

  var something = null;

  function x() {
    // if(moment(new Date()).isAfter(`${YEAR}-09-30`)){

    //   something = `${secondHalfStart} to ${secondHalfEnd}`;

    // } else {
    //   something = `${firstHalfStart} to ${firstHalfEnd}`;

    // }

    //if the 
    if (moment(new Date()).isAfter(`${YEAR}-03-31`)) {

      something = `${secondHalfStart} to ${secondHalfEnd}`;
    } else {
      something = `${firstHalfStart} to ${firstHalfEnd}`;
    }
  }

  x();

  return (
    <>
      {/* <div>Today's Date Is: {NZ_Local_Date}</div> <br /> */}
      <strong>
        {/* {endFirstHalf} or {endSecondHalf} <br></br> */}
        {something}

        <br></br>
      </strong>
    </>
  );
}

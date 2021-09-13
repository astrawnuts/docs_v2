import React from "react";
import moment from "moment";

export default function GetIncTaxPeriods(props) {
  /**
   * Test Cases allows you to define any day month year
   */

  // const { deflateSync } = require("zlib");

  // let day = undefined;
  // let month = undefined;
  // let year = undefined;



//default financial year PRE APRIL
  let financialYear = `01-04-${moment().year()-2} to 31-03-${moment().year()-1}`;
  
//   const today = moment().format("DD-MM-YY");

  function setFinancialYear() {
    console.log(moment().isAfter(`${moment().year()}-03-31`));
    if(moment().isAfter(`${moment().year()}-03-31`)) {
        financialYear = `01-04-${moment().year()-1} to 31-03-${moment().year()}`;
    }
  }

  setFinancialYear();

  return (
    <>
      {/* Today is {moment(new Date()).format("DD-MMMM-YYYY")} <br></br> and the ret */}
      <strong>{financialYear}</strong>
    </>
  );
}

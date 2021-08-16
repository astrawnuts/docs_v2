import React from "react";

export default function GetIncTaxPeriods(props) {
  /**
   * Test Cases allows you to define any day month year
   */

  // const { deflateSync } = require("zlib");

  // let day = undefined;
  // let month = undefined;
  // let year = undefined;

  const period_start = "01/04";
  const period_end = "31/03";

  //current year variables
  let current_financial_period_start = period_start;
  let current_financial_period_end = period_end;

  //last year variables
  let last_year_financial_period_start = period_start;
  let last_year_financial_period_end = period_end;

  //checks if a value is a number and
  //tries to convert to a num
  function tryParseNumber(num) {
    if (typeof num === "number") {
      return num;
    }

    if (typeof num !== "string") {
      return -1;
    }

    try {
      num = parseInt(num);
      return num;
    } catch (e) {
      return -1;
    }
  }

  //gets the current year or returns a the passed number
  function getYear(year) {
    year = tryParseNumber(year);
    return year === -1 ? new Date().getFullYear() : year;
  }

  //gets the current month or returns a the passed number
  function getMonth(month) {
    month = tryParseNumber(month);
    return month === -1 ? new Date().getMonth() + 1 : month;
  }

  //gets the current day or returns a the passed number
  function getDay(day) {
    day = tryParseNumber(day);
    return day === -1 ? new Date().getDate() : day;
  }

  function getCurrentFinancialYear(day, month, year) {
    /**
     * Current Year
     * Calculations
     */
    const current_year = getYear(year);
    const current_month = getMonth(month);
    const current_day = getDay(day);

    let current_year_start = null;
    let current_year_end = null;
    let current_financial_period_string = null;

    //Current Financial Year
    //if currently we are in the month of April the next financial year has begun
    if (current_month >= 4) {
      current_year_start = current_year;
      current_year_end = current_year + 1;
    }

    if (current_month <= 3) {
      current_year_start = current_year - 1;
      current_year_end = current_year;
    }

    console.log(current_year_start);

    current_financial_period_start =
      current_financial_period_start + "/" + current_year_start;
    current_financial_period_end =
      current_financial_period_end + "/" + current_year_end;

    //creates a financial period string
    current_financial_period_string =
      current_financial_period_start + " to " + current_financial_period_end;
    return current_financial_period_string;
  }

  function getLastFinancialYear(day, month, year, EndPeriodOnly = false) {
    /*******************************
     *
     * last years financial period string
     */

    const current_year = getYear(year);
    const current_month = getMonth(month);
    const current_day = getDay(day);

    //last year variables
    let last_year_financial_period_string = null;
    last_year_financial_period_start += "/" + (current_year - 1);
    last_year_financial_period_end += "/" + current_year;

    last_year_financial_period_string =
      last_year_financial_period_start +
      " to " +
      last_year_financial_period_end;

    if (props.YearEndOnly) {
      return last_year_financial_period_end;
    }

    return last_year_financial_period_string;
  }

  // console.log(getCurrentFinancialYear(undefined, undefined, undefined));
  // console.log(getCurrentFinancialYear(undefined, undefined, undefined));

  // module.exports.getCurrentFinancialYear = getCurrentFinancialYear;
  // // module.exports.getLastFinancialYear = getLastFinancialYear;

  // function updateText() {
  // const year1 = document.querySelector(".year1");

  // let time = new Date();

  // year1.innerText = getCurrentFinancialYear();

  // const year2 = document.querySelector(".year2");

  // year2.innerText = getLastFinancialYear();
  // }

  // document.addEventListener('DOMContentLoaded', updateText, false);

  return (
    <>
      {props.YearEndOnly === undefined && (
        <span>
          Previous Financial Year: {getLastFinancialYear(null, null, null)}
        </span>
      )}

      {props.YearEndOnly !== undefined && (
        <strong>{getLastFinancialYear(null, null, null)}</strong>
      )}
    </>
  );
}

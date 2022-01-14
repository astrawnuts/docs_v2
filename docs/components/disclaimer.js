import React from "react";
import Link from "@docusaurus/Link";

export default function Disclaimer() {
  return (
    <div>
      <hr className="hr" />
      <p className="mini-disclaimer">
        While we have made every attempt ensure that the information on this
        website is accurate, it should <strong>NOT</strong> act as a substitute
        for professional advice. Do not act solely based on this information
        alone. Always consult professional such as a tax agent and or{" "}
        <Link to="https://taxmatterz.com/contactus">
          <strong>
            tax advisor of Tax Matterz based in Auckland, New Zealand
          </strong>
        </Link>{" "}
        (formerly Tax Matters) as each situation and circumstance may
        vary. <Link to="/disclaimer"> Read our disclaimer here.</Link>
      </p>

      <p>
        Get In Touch With: <br />
        Tax Matterz <br />
        Accounting &amp; Taxation Services, Auckland, NZ <br />
        Phone: <a href="tel:+642102464212">+64 21 024 64 212</a>  <br />
        Email: <a href="mailto:nawaz@taxmatterz.com">nawaz@taxmatterz.com</a> <br />
        Website: <a href="https://taxmatterz.com" target="_blank">www.taxmatterz.com</a>
      </p>
    </div>
  );
}

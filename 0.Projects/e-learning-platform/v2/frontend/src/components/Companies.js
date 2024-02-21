import React from "react";
import CompanyLogo from "../images/LPF.png";
import "./Companies.css";

function Companies() {
  return (
    <div className="companies_log_container">
      <img className="company_logo" src={CompanyLogo} />
      <img className="company_logo" src={CompanyLogo} />
      <img className="company_logo" src={CompanyLogo} />
    </div>
  );
}

export default Companies;

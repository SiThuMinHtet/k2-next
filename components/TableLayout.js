import React from "react";
import { useRouter } from "next/router";

const TableLayout = ({ children, title, total, onSearch, onPrint }) => {
  const router = useRouter();
  const handleAddButtonClick = () => {
    router.push("/dashboard/company/companylist/companyRegister"); // Navigate to the specified route
  };

  return (
    <div className="table-wrapper">
      <div className="table-header">
        <div className="table-header__left">
          <h2>{title}</h2>
          <div className="total">
            <h4>Total : </h4>
            <span>{total}</span>
          </div>
          <div className="show">
            <h4>Show : </h4>
            <select>
              <option selected>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="table-header__right">
          <div className="input-field search">
            <input placeholder="Search..." />
            <button onClick={onSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="icon-button print-button" onClick={onPrint}>
            <i className="fa-solid fa-print"></i>
          </button>
          <button
            className="icon-button add-button"
            onClick={handleAddButtonClick}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="table-container">{children}</div>
    </div>
  );
};

export default TableLayout;

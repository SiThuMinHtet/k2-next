import React from "react";
import TableLayout from "../layouts/TableLayout";

const PaymentList = () => {
  const tableData = [
    {
      paymentDate: "2020-10-09",
      paymentTime: "16:17",
      customerId: "100600",
      customerName: "SAW YE THWAY",
      companyBusiness: "O-Technique Tobi",
      plan: "Standard",
      planInfo: "5,680 円 / 月",
      paymentInfo: "****0550 で終わる Visas",
      payment: "Credit Card",

      statusInfo: "Paid",
      statusType: "paid",
    },
    {
      paymentDate: "2020-10-09",
      paymentTime: "16:17",
      customerId: "100600",
      customerName: "SAW YE THWAY",
      companyBusiness: "O-Technique Tobi",
      plan: "Standard",
      planInfo: "5,680 円 / 月",
      paymentInfo: "****0550 で終わる Visas",
      payment: "Credit Card",
      statusInfo: "Withdraw",
      statusType: "withdraw",
    },
    {
      paymentDate: "2020-10-09",
      paymentTime: "16:17",
      customerId: "100600",
      customerName: "SAW YE THWAY",
      companyBusiness: "O-Technique Tobi",
      plan: "Standard",
      planInfo: "5,680 円 / 月",
      paymentInfo: "****0550 で終わる Visas",
      payment: "Credit Card",
      statusInfo: "Future",
      statusType: "future",
    },
  ];

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handlePrint = () => {
    console.log("Print clicked");
  };

  const handleAdd = () => {
    console.log("Add clicked");
  };

  return (
    <TableLayout
      title="決済一覧"
      total={tableData.length}
      onSearch={handleSearch}
      onPrint={handlePrint}
      onAdd={handleAdd}
    >
      <table className="data-table">
        <thead>
          <tr>
            <th className="checkbox-cell">
              <input type="checkbox" aria-label="Select all rows" />
            </th>
            <th>Payment Date/Time</th>
            <th>Customer ID/Name</th>
            <th>Company Business</th>
            <th>Plan</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="checkbox-cell">
                <input type="checkbox" aria-label="Select row" />
              </td>
              <td data-label="Payment Date/Time">
                <div className="cell-content">
                  <div>{row.paymentDate}</div>
                  <div>{row.paymentTime}</div>
                </div>
              </td>
              <td data-label="Customer ID/Name">
                <div className="cell-content">
                  <div>{row.customerId}</div>
                  <div>{row.customerName}</div>
                </div>
              </td>
              <td data-label="Company Business">{row.companyBusiness}</td>
              <td data-label="Plan">
                <div className="cell-content">
                  <div>{row.plan}</div>
                  <div>{row.planInfo}</div>
                </div>
              </td>
              <td data-label="Payment">
                <div className="cell-content">
                  <div>{row.payment}</div>
                  <div>{row.paymentInfo}</div>
                </div>
              </td>
              <td data-label="Status">
                <div className={`status_box badge-${row.statusType}`}>
                  {row.statusInfo}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableLayout>
  );
};

export default PaymentList;

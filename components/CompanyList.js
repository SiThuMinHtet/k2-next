import React, { useState  , useRef} from 'react';
import Head from 'next/head';
import TableLayout from '../components/TableLayout';
import Modal from '../components/Modal'
import SearchForm from '../components/SearchForm'
const CompanyList = () => {
  const mainContentRef = useRef(null);

  const [isSearchModalOpen , setIsSearchModalOpen] = useState(false);
  const [tableData, setTableData] = useState([
    {
      registerDate: '2020-10-14',
      registerTime: '16:17',
      customerId: '100600',
      customerName: 'SAW YE THWAY',
      companyBusiness: ['O-technique', 'Tobi'],
      location: 'Aichiken, Inazawa',
      userCount: 10,
      plan: 'Free',
      payment: '-',
    },
    {
      registerDate: '2021-03-22',
      registerTime: '11:30',
      customerId: '100601',
      customerName: 'JOHN DOE',
      companyBusiness: ['Construction', 'Architect'],
      location: 'Tokyo, Shinjuku',
      userCount: 15,
      plan: 'Pro',
      payment: '5000 JPY',
    },
  ]);

  const handleSearch = () => {
    console.log('Search clicked');
    setIsSearchModalOpen(true);
   
  };

  const handleCloseModal = () =>
  {
    setIsSearchModalOpen(false);
  }

  const handlePrint = () => {
    console.log('Print clicked');
  };

  const handleAdd = () => {
    console.log('Add clicked');
  };

  return (
    <>
      <TableLayout
        title="使用会社一覧"
        total={tableData.length}
        onSearch={handleSearch}
        onPrint={handlePrint}
        onAdd={handleAdd}
        formType ={"company"}
      >
        <table className="data-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input type="checkbox" aria-label="Select all rows" />
              </th>
              <th>Register Date&Time</th>
              <th>Customer ID Name</th>
              <th>Company Business</th>
              <th>Location User Count</th>
              <th>Plan Payment</th>
              <th className="edit-cell">Edit</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="checkbox-cell">
                  <input type="checkbox" aria-label="Select row" />
                </td>
                <td data-label="Register Date&Time">
                  <div className="cell-content">
                    <div className="date">{row.registerDate}</div>
                    <div className="time">{row.registerTime}</div>
                  </div>
                </td>
                <td data-label="Customer ID Name">
                  <div className="cell-content">
                    <div className="customer-id">{row.customerId}</div>
                    <div className="customer-name">{row.customerName}</div>
                  </div>
                </td>
                <td data-label="Company Business">
                  <div className="cell-content">
                    {row.companyBusiness.map((business, idx) => (
                      <div key={idx}>{business}</div>
                    ))}
                  </div>
                </td>
                <td data-label="Location User Count">
                  <div className="cell-content">
                    <div>{row.location}</div>
                    <div className="user-count">{row.userCount}</div>
                  </div>
                </td>
                <td data-label="Plan Payment">
                  <div className="cell-content">
                    <div className="plan">{row.plan}</div>
                    <div className="payment">{row.payment}</div>
                  </div>
                </td>
                <td className="edit-cell">
                  <button className="edit-button" aria-label="Edit row">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableLayout>



    
    </>
  );
};

export default CompanyList;

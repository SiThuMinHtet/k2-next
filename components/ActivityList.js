import React from 'react';
import TableLayout from '../components/TableLayout';
const ActivityTable = () => {
  const tableData = [
    {
      userId: '100600-001',
      userName: 'SAW YE THWAY',
      company: 'O-technique',
      action: 'Log in',
      actionType: 'success',
      ipAddress: '210.15.122.90',
      device: { type: 'Mobile', icon: 'fa-mobile-screen-button' },
      browser: 'Chrome',
      activityDate: '2020-10-14',
      activityTime: '16:17',
    },
    {
      userId: '100600-001',
      userName: 'SAW YE THWAY',
      company: 'O-technique',
      action: 'Log out',
      actionType: 'fail',
      ipAddress: '210.15.122.90',
      device: { type: 'PC', icon: 'fa-desktop' },
      browser: 'Chrome',
      activityDate: '2020-10-14',
      activityTime: '16:17',
    },
  ];

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handlePrint = () => {
    console.log('Print clicked');
  };

  const handleAdd = () => {
    console.log('Add clicked');
  };


  return (
    <TableLayout
    title="使用会社一覧"
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
          <th>User ID/Name</th>
          <th>Company</th>
          <th>Action</th>
          <th>IP Address</th>
          <th>Device</th>
          <th>Browser</th>
          <th>Activity Date/Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className="checkbox-cell">
              <input type="checkbox" aria-label="Select row" />
            </td>
            <td data-label="User ID/Name">
              <div className="cell-content">
                <div>{row.userId}</div>
                <div>{row.userName}</div>
              </div>
            </td>
            <td data-label="Company">{row.company}</td>
            <td data-label="Action">
              <button className={`badge badge-${row.actionType}`}>
                {row.action}
              </button>
            </td>
            <td data-label="IP Address">{row.ipAddress}</td>
            <td data-label="Device">
              <i className={`fa-solid ${row.device.icon}`}></i>
              {row.device.type}
            </td>
            <td data-label="Browser">{row.browser}</td>
            <td data-label="Activity Date/Time">
              <div className="cell-content">
                <div>{row.activityDate}</div>
                <div>{row.activityTime}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </TableLayout>
  );
};

export default ActivityTable;

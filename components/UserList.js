import React, { useState } from 'react';
import TableLayout from './TableLayout';

const UserTable = () => {
  const [tableData, setTableData] = useState([
    {
      userId: '100600-002',
      userName: 'SAW YE THWAY',
      company: 'O-technique',
      role: 'Administrator',
      registerDate: '2020-10-14',
      registerTime: '16:17',
      groupUsers: 6,
      group: [
        {
          userId: '100600-003',
          userName: 'John Doe',
          role: 'User',
          registerDate: '2020-10-14',
          registerTime: '16:18',
        },
      ],
    },
  ]);

  const [expandedRows, setExpandedRows] = useState([]);

  const toggleGroupRows = (index) => {
    setExpandedRows((prev) => {
      const isExpanded = prev.includes(index);
      console.log(`Row ${index} is ${isExpanded ? 'collapsing' : 'expanding'}`);
      return isExpanded ? prev.filter((i) => i !== index) : [...prev, index];
    });

    const parentRow = document.querySelector(`.parent-row[data-index="${index}"]`);
    if (parentRow) {
      parentRow.classList.toggle('expanded');
      let currentRow = parentRow.nextElementSibling;
      while (currentRow && currentRow.classList.contains('group-row')) {
        currentRow.classList.toggle('visible');
        currentRow = currentRow.nextElementSibling;
      }
    }
  };

  return (
    <TableLayout
      title="使用会社一覧"
      total={tableData.length}
      onSearch={() => console.log('Search clicked')}
      onPrint={() => console.log('Print clicked')}
      onAdd={() => console.log('Add clicked')}
      formType ={"company"}
    >
      <table className="data-table">
        <thead>
          <tr>
            <th className="checkbox-cell">
              <input type="checkbox" aria-label="Select all rows" />
            </th>
            <th>User ID/Name</th>
            <th>Company</th>
            <th>User Role</th>
            <th>Register Date&Time</th>
            <th>Group Users</th>
            <th className="edit-cell">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="parent-row" data-index={index}>
                <td className="checkbox-cell">
                  <input type="checkbox" aria-label="Select row" />
                </td>
                <td data-label="User ID/Name">
                  <div className="cell-content">
                    <div className="user-id">{row.userId}</div>
                    <div className="user-name">{row.userName}</div>
                  </div>
                </td>
                <td data-label="Company">{row.company}</td>
                <td data-label="User Role">{row.role}</td>
                <td data-label="Register Date&Time">
                  {row.registerDate} {row.registerTime}
                </td>
                <td data-label="Group Users">{row.groupUsers}</td>
                <td className="edit-cell">
                  <button
                    className="edit-button toggle-button"
                    aria-label="Toggle group users"
                    onClick={() => toggleGroupRows(index)}
                  >
                    <i
                      className={`fa-solid ${
                        expandedRows.includes(index)
                          ? 'fa-chevron-up'
                          : 'fa-chevron-down'
                      }`}
                    ></i>
                  </button>
                </td>
              </tr>
              {expandedRows.includes(index) &&
                row.group.map((groupRow, groupIndex) => (
                  <tr className="group-row visible" key={groupIndex}>
                    <td className="checkbox-cell">
                      <input type="checkbox" aria-label="Select row" />
                    </td>
                    <td data-label="User ID/Name">
                      <div className="user-id">{groupRow.userId}</div>
                      <div className="user-name">{groupRow.userName}</div>
                    </td>
                    <td data-label="Company">{row.company}</td>
                    <td data-label="User Role">{groupRow.role}</td>
                    <td data-label="Register Date&Time">
                      {groupRow.registerDate} {groupRow.registerTime}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </TableLayout>
  );
};

export default UserTable;

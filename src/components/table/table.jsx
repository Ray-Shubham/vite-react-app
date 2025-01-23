import React from "react";

const TableComponent = ({ rowData = [] }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {rowData.map((eachRow, index) => {
          return (
            <tr key={index}>
              <td>{eachRow.model}</td>
              <td>{eachRow.mobileNumber}</td>
              <td>{eachRow.state}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;

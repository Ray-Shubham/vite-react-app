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
              <td>{eachRow.data1}</td>
              <td>{eachRow.data2}</td>
              <td>{eachRow.data3}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;

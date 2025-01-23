import React, { useState } from "react";
import { mobileValidation } from "./validations";
import { indianStates } from "./info";
import TableComponent from "../../../table/table";

const ControlledStateForm = () => {
  const initialFormData = {
    model: "",
    mobileNumber: "",
    state: "",
  };
  const [formData, setFormData] = useState( initialFormData );

  const [formError, setFormError] = useState({
    modelErr: "",
    mobileErr: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const onChangeHandler = (e) => {
    // const enteredValue = e.target.value;
    // const targetedName = e.target.name;

    const { name, value } = e.target;

    console.log(name, value, "userInput");
    setFormData({ ...formData, [name]: value });
    // setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmittedData([...submittedData, formData]);
    setFormData(initialFormData);
    // if(modelError || mobileError){
    //     alert("Please fill properly");
    // } else {
    //     // Hit the Server
    // }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h1>Service Form</h1>
          <label htmlFor="username">Enter Device Model</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="model"
            value={formData.model}
            onChange={onChangeHandler}
          />
          {formError.modelErr && (
            <span style={{ color: "red" }}>{formError.modelErr}</span>
          )}

          <label htmlFor="username">Enter Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={onChangeHandler}
          />
          {formError.mobileErr && (
            <span style={{ color: "red" }}>{formError.mobileErr}</span>
          )}
          <select
            value={formData.state}
            onChange={onChangeHandler}
            name="state"
          >
            {indianStates.map((eachState) => {
              return (
                <option key={eachState.id} value={eachState.name}>
                  {eachState.name}
                </option>
              );
            })}
            {/* <option value="ap">AP</option>
            <option value="telangana">Telangana</option>
            <option value="goa">Goa</option> */}
          </select>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>

      <TableComponent rowData={submittedData} />
    </>
  );
};

export default ControlledStateForm;

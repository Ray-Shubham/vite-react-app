import React, { useState } from "react";
import { mobileValidation } from "./validations";

const ControlledForm = () => {
  const [model, setModel] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [modelError, setModelError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const modelHandler = (event) => {
    const modelName = event.target.value;
    setModel(modelName);
    const error = modelValidator(modelName);
    console.log(error,"Model name error");

    if (error) {
      setModelError(error);
    } else {
        setModelError("");
    }

    console.log(modelName);
  };
  const mobileHandler = (event) => {
    const mobile = event.target.value;
    setMobileNumber(mobile);
    const error = mobileValidation(mobile);
    if (error) {
      setMobileError(error);
    } else {
        setMobileError("");
    }
    
  };

  const modelValidator = (value) => {
    let error = "";

    const modelRegex = /^samsung/i;
    if (!value) {
      error = "Please enter model name";
    } else if (!modelRegex.test(value)) {
      error = "Please enter samsung model name";
    }
    return error;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(modelError || mobileError){
        alert("Please fill properly");
    } else {
        // Hit the Server
    }
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
            value={model}
            onChange={modelHandler}
          />
          {modelError && <span style={{ color: "red" }}>{modelError}</span>}

          <label htmlFor="username">Enter Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={mobileNumber}
            onChange={mobileHandler}
          />
          {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledForm;

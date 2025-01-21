import axios from "axios";
import React, { useRef, useState } from "react";

const UncontrolledComponent = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const usernameEntered = usernameRef.current.value;
    const passwordEntered = passwordRef.current.value;

    const formErrors = validation(usernameEntered, passwordEntered);

    if (Object.keys(formErrors).length > 0) {
      // Trigger the Error
      setFormErrors(formErrors);
    } else {
      // Hit the API
      loginApi(usernameEntered, passwordEntered);
    }

    console.log(formErrors);
  };

  const validation = (username, password) => {
    // if(username === "" || password === "") {
    //     alert("Please enter username and password")
    // }

    const FormErrors = {};

    if (!username) {
      FormErrors.usernameError = "Please Enter Username";
    } else if (username.length > 20) {
      FormErrors.usernameError = "Username should be less than 20 characters";
    }
    if (!password) {
      FormErrors.passwordError = "Please Enter Password";
    } else if (password.length > 20) {
      FormErrors.passwordError = "Password should be less than 20 characters";
    }

    return FormErrors;
  };

  const loginApi = async (username, password) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={usernameRef}
          />
          <span style={{ color: "red" }}>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passwordRef}
          />
          <span style={{ color: "red" }}>{formErrors?.passwordError}</span>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};

export default UncontrolledComponent;

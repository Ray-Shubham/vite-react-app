import { mobileNumberRegex } from "./regex";



export const mobileValidation = (value) => {
    let error = "";
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!value) {
      error = "Please enter mobile number";
    } else if ( !mobileNumberRegex.test(value)) {
      error = "Please enter valid mobile number";
    }
    return error;
}
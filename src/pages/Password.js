import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THIRDSTAGES } from "../Redux/user/userAction";

function Password({ handleNext }) {
  const [password , setPassword] = useState("")
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const passwordInfo = useSelector((state) => state?.password) || "";

  useEffect(() => {
    setPassword(passwordInfo.password || "");
  }, []);
  
  const validation = (e) => {
    let error = {};
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  if (password === "" || !strongRegex.test(password)) {
    error.password = "Please Select strong Password which included Capital , symbol and number.";
  }

  if (password.length === 12){
    error.password = "Please select 8-10 digits password"
  }

  setErrors(error);
  return error;
}; 

const successHandler = () => {
  const error = validation();
  if (Object.keys(error).length > 0) {
    return;
  }

  const data = {
    password,
  };

  dispatch(THIRDSTAGES(data));
  handleNext("dob")
};
 
 return (
    <div className="p-5 TabBox">
      <label htmlFor="password" className="labelName fw-bold">
        Password <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="password"
        placeholder="Password"
        type="password"
        value={password}
        maxLength="12"
        className="adjustAll"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      <span className="text-danger">{errors.password}</span>
      <br />
         <div className="pt-5 d-flex justify-content-between inBoxButton mt-5 ">
      <button className="firstNext" onClick={()=>handleNext("email")}>Previous</button>
        <button className="firstNext" onClick={() => successHandler()}>Next</button>
      </div>
    </div>
  );
}

export default Password;

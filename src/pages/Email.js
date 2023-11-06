import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SECONDSTAGES } from "../Redux/user/userAction";
import "../App.css";

function Email({ handleNext }) {
  // console.log(handleNext)
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const emailInfo = useSelector((state) => state?.email) || "";

  useEffect(() => {
    setEmail(emailInfo.email || "");
  }, []);
  
  const validation = (e) => {
    let error = {};
    // ^[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$


    if (email === "" || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      error.email = "Please enter a valid Email address";
    }

    setErrors(error);
    return error;
  };

  const secondHandler = () => {
    const error = validation();
    if (Object.keys(error).length > 0) {
      return;
    }

    const data = {
      email,
    };

    dispatch(SECONDSTAGES(data));
      handleNext("password");
  };
  

  return (
    <div className="p-5 TabBox">
      <label htmlFor="email" className="labelName fw-bold">
        E-mail <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="email"
        placeholder="Enter your email address"
        type="email"
        value={email}
        className="adjustAll"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <span className="text-danger">{errors.email}</span>
      <br />
    <div className="pt-5 d-flex justify-content-between inBoxButton mt-5">
      <button className="firstNext" onClick={()=>handleNext("first")}>Previous</button>
        <button className="firstNext" onClick={() => secondHandler()}>Next</button>
    </div>
    </div>
  );
}

export default Email;

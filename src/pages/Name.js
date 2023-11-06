import React, { useState, useEffect } from "react";
import "../App.css";
import { FIRSTSTAGES } from "../Redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";
function Name({ handleNext }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [errors, setErrors] = useState({});
  const data = useSelector((state) => state?.details);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(data.name || "");
    setLastname(data.lastname || "");
  }, []);

  const validation = (e) => {
    let error = {};

    if (name === "") {
      error.name = "Please enter your Name";
    }
    if (lastname === "") {
      error.lastname = "Please enter your Last Name";
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
      name,
      lastname,
    };

    dispatch(FIRSTSTAGES(data));

    
    handleNext("email");
    

  };

  useEffect(() => {
  
    // successHandler()
  }, [])

  return (
    <div className="p-5 TabBox">
      <label htmlFor="name" className="labelName fw-bold">
        First Name <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="name"
        placeholder="Enter your Name"
        value={name}
        type="text"
        className="adjustAll"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <span className="text-danger errorM">{errors.name}</span>
      <br />

      <label htmlFor="lastName" className="labelName fw-bold pt-3">
        Last Name <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="lastName"
        placeholder="Enter your Last Name"
        value={lastname}
        type="text"
        className="adjustAll"
        onChange={(e) => setLastname(e.target.value)}
      />
      <br />
      <span className="text-danger errorM">{errors.lastname}</span>
      <br />

      <div
        className="pt-5 d-flex justify-content-end inBoxButton settingName"
        onClick={() => {successHandler()}}
      >
        <button className="firstNext">Next</button>
      </div>
    </div>
  );
}

export default Name;

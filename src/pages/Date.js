import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOURTHSTAGES } from "../Redux/user/userAction";
// import { FOURTHSTAGES } from "./Redux/user/userAction";
function Date({ handleNext }) {

  const [date , setDate] = useState("")
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const dateInfo = useSelector((state) => state?.dob);

  useEffect(() => {
    setDate(dateInfo.date || "");
  }, []);

  const validation = (e) => {
    let error = {};
    if (date === "") {
      error.date = "Please select your date of birth";
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
      date,
    };

    dispatch(FOURTHSTAGES(data));
    handleNext("address")
  };

  return (
    <div className="p-5 TabBox">
      <label htmlFor="date" className="labelName fw-bold">
        Date <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="date"
        placeholder="Date"
        value={date}
        type="date"
        onChange={(e) => setDate(e.target.value)}
        className="adjustAll pe-2"
      />
      <br />
      <span className="text-danger">{errors.date}</span>
      <br />
         <div className="pt-5 d-flex justify-content-between inBoxButton mt-5" >
      <button className="firstNext" onClick={()=>handleNext("password")}>Previous</button>
        <button className="firstNext" onClick={() => successHandler()}>Next</button>
      </div>
    </div>
  )
}

export default Date
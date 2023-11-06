import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIFTHSTAGES } from "../Redux/user/userAction";

function Adsress({ handleNext }) {
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const dateInfo = useSelector((state) => state?.address);
  const dispatch = useDispatch();
  useEffect(() => {
    setAddress(dateInfo.address || "");
  }, []);

  const validation = (e) => {
    let error = {};
    if (address === "") {
      error.address = "Please provide your full address";
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
      address,
    };

    dispatch(FIFTHSTAGES(data));
    handleNext("gender")

  };
  return (
    <div className="p-5 TabBox">
      <label htmlFor="address" className="labelName fw-bold">
        Address <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <textarea
        id="address"
        placeholder="Address"
        type="text"
        value={address}
        className="adjustAll adress p-2"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <span className="text-danger">{errors.address}</span>
      <br />
           <div className="pt-5 d-flex justify-content-between inBoxButton">
      <button className="firstNext" onClick={()=>handleNext("dob")}>Previous</button>
        <button className="firstNext"  onClick={() => successHandler()}>Next</button>
      </div>
    </div>
  );
}

export default Adsress;

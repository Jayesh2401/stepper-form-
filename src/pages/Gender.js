import React, { useState } from "react";
import { SIXTHSTAGES } from "../Redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";

function Gender({ handleNext }) {

  const [gender , setGender] = useState(true)
  const dispatch = useDispatch();
  const genderInfo = useSelector((state) => state.gender)
  return (
    <div className="p-5 TabBox" >
    <label htmlFor="gender" className="labelName fw-bold">
      Gender <span className="text-danger fw-bold">*</span>
    </label>
    <br />
    <div className="manageImage pt-3">
        <div className={"maleDiv" + (genderInfo ? " bgCol" : "") } onClick={()=>{setGender(true) ;  dispatch(SIXTHSTAGES(true))}}>
            <img src="male.jpg" alt='male' className='male'/>
        </div>
        <div className={"femaleDiv" + (genderInfo ? " " : " bgCol")} onClick={()=>{setGender(false) ;  dispatch(SIXTHSTAGES(false))}}>
            <img src="female.jpg" alt='female' className='female'/>
        </div>
    </div>
    <br />

    <div className="pt-5 d-flex justify-content-between">
      <button className="firstNext" onClick={()=>handleNext("address")}>Previous</button>
        <button className="firstNext">Submit</button>
      </div>
  </div> 
  )
}

export default Gender
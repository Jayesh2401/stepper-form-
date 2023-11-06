import { useSelector } from "react-redux";
import "./App.css";
import Date from "./pages/Date";
import Adsress from "./pages/Adsress";
import Email from "./pages/Email";
import Gender from "./pages/Gender";
import Name from "./pages/Name";
import Password from "./pages/Password";

function Tabbing() {
  const Check = useSelector((state) => state);
  const email = Object.keys(Check.details).length;
  const password = Object.keys(Check.email).length;
  const dob = Object.keys(Check.password).length;
  const address = Object.keys(Check.dob).length;
  const gender = Object.keys(Check.address).length;
  
  const handleNext = (nextTab) => {
    let next;
    switch (nextTab) {
      case "first":
        next = document.getElementById("v-pills-name-tab");
        break;
      case "email":
        next = document.getElementById("v-pills-email-tab");
        break;
      case "password":
        next = document.getElementById("v-pills-password-tab");
        break;
      case "dob":
        next = document.getElementById("v-pills-dob-tab");
        break;
      case "address":
        next = document.getElementById("v-pills-address-tab");
        break;
      case "gender":
        next = document.getElementById("v-pills-gender-tab");
        break;
      default:
        break;
    }
    next.disabled=false;
    next.click();
  };

  return (
    <div className=" container d-flex align-items-start pt-5">
      <div
        className="nav flex-column nav-pills gap-md-5 me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active"
          id="v-pills-name-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-name"
          type="button"
          role="tab"
          aria-controls="v-pills-name"
          aria-selected="true"
        >
          1
        </button>
        <button
          className="nav-link"
          id="v-pills-email-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-email"
          type="button"
          disabled={email === 2 ? false : true}
          role="tab"
          aria-controls="v-pills-email"
          aria-selected="false"
        >
          2
        </button>
        <button
          className="nav-link"
          id="v-pills-password-tab"
          data-bs-toggle="pill"
          disabled={password === 1 ? false : true}
          data-bs-target="#v-pills-password"
          type="button"
          role="tab"
          aria-controls="v-pills-password"
          aria-selected="false"
        >
          3
        </button>
        <button
          className="nav-link"
          id="v-pills-dob-tab"
          data-bs-toggle="pill"
          disabled={dob === 1 ? false : true}
          data-bs-target="#v-pills-dob"
          type="button"
          role="tab"
          aria-controls="v-pills-dob"
          aria-selected="false"
        >
          4
        </button>
        <button
          className="nav-link"
          id="v-pills-address-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-address"
          type="button"
          disabled={address === 1 ? false : true}
          role="tab"
          aria-controls="v-pills-address"
          aria-selected="false"
        >
          5
        </button>
        <button
          className="nav-link"
          id="v-pills-gender-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-gender"
          type="button"
          disabled={gender === 1 ? false : true}
          role="tab"
          aria-controls="v-pills-gender"
          aria-selected="false"
        >
          6
        </button>
      </div>
      {/* <div className="border border-warning">
esvvbe
        </div> */}
      <div className="tab-content" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active anime"
          id="v-pills-name"
          role="tabpanel"
          aria-labelledby="v-pills-name-tab"
        >
          <Name handleNext={handleNext} />
        </div>
        <div
          className="tab-pane fade anime"
          id="v-pills-email"
          role="tabpanel"
          aria-labelledby="v-pills-email-tab"
        >
          <Email handleNext={handleNext} />
        </div>
        <div
          className="tab-pane fade anime"
          id="v-pills-password"
          role="tabpanel"
          aria-labelledby="v-pills-password-tab"
        >
          <Password handleNext={handleNext} />
        </div>
        <div
          className="tab-pane fade anime"
          id="v-pills-dob"
          role="tabpanel"
          aria-labelledby="v-pills-dob-tab"
        >
          <Date handleNext={handleNext} />
        </div>
        <div
          className="tab-pane fade anime"
          id="v-pills-address"
          role="tabpanel"
          aria-labelledby="v-pills-address-tab"
        >
          <Adsress handleNext={handleNext} />
        </div>
        <div
          className="tab-pane fade anime"
          id="v-pills-gender"
          role="tabpanel"
          aria-labelledby="v-pills-gender-tab"
        >
          <Gender handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
}

export default Tabbing;

import {
  FIRSTSTAGE,
  SECONDSTAGE,
  THIRDSTAGE,
  FOURTHSTAGE,
  FIFTHSTAGE,
  SIXTHSTAGE,
} from "./types";

export const userReducer = (state = { details: {} , email : {} , password:{} , dob :{} , address : {} , gender:true}, action) => {
  switch (action.type) {
    case FIRSTSTAGE:
      return { ...state, details: action.payload };
    case SECONDSTAGE:
      return { ...state, email: action.payload };
      case THIRDSTAGE : 
      return{...state , password :action.payload};
      case FOURTHSTAGE : 
      return{...state , dob :action.payload};
      case FIFTHSTAGE : 
      return{...state , address :action.payload};
      case SIXTHSTAGE : 
      return{...state , gender :action.payload};
    default: {
      return state;
    }
  }
};

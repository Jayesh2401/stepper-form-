import { FIRSTSTAGE , SECONDSTAGE , THIRDSTAGE , FOURTHSTAGE, FIFTHSTAGE, SIXTHSTAGE } from "./types";

export const FIRSTSTAGES = (details) => {
    return {
        type : FIRSTSTAGE , 
        payload : details
    }
}

export const SECONDSTAGES = (email) => {
    return {
        type : SECONDSTAGE , 
        payload : email
    }
}

export const THIRDSTAGES = (password) => {
    return {
        type : THIRDSTAGE , 
        payload : password
    }
}

export const FOURTHSTAGES = (dob) => {
    return {
        type : FOURTHSTAGE , 
        payload : dob
    }
}

export const FIFTHSTAGES = (address) => {
    return {
        type : FIFTHSTAGE , 
        payload : address
    }
}

export const SIXTHSTAGES = (gender) => {
    return {
        type : SIXTHSTAGE , 
        payload : gender
    }
}
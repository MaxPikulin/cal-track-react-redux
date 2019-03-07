import { CHANGE_C100 } from "../constants/actionTypes";

const changeC100 = (value) => {
  return {
    type: CHANGE_C100,
    payload: value,
  }
}

export {
  changeC100,
};
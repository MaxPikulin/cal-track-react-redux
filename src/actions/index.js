import { CHANGE_C100, CHANGE_MYCALS, CHANGE_GRAMS } from "../constants/actionTypes";

const changeC100 = (value) => {
  return {
    type: CHANGE_C100,
    payload: value,
  }
}
const changeGrams = (value) => {
  return {
    type: CHANGE_GRAMS,
    payload: value,
  }
}
const changeMyCals = (value) => {
  return {
    type: CHANGE_MYCALS,
    payload: value,
  }
}

export {
  changeC100,
  changeGrams,
  changeMyCals,
};
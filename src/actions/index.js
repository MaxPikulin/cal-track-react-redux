import { CHANGE_C100, CHANGE_MYCALS, CHANGE_GRAMS, CHANGE_NOTE } from "../constants/actionTypes";

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
const changeNote = (value) => {
  return {
    type: CHANGE_NOTE,
    payload: value,
  }
}

export {
  changeC100,
  changeGrams,
  changeMyCals,
  changeNote,
};
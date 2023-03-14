import moment from "moment"

export const getCuteFormat = (date) => {
  return moment(date).format("dddd, DD [de] MMMM [del] YYYY")
}

console.log(getCuteFormat(undefined))
console.log(getCuteFormat(""))
import { format, formatDistance } from "date-fns";
import { startOfDay, startOfToday } from "date-fns";
import { add, addMilliseconds, addQuarters, addSeconds, addYears } from "date-fns";
import { addBusinessDays, addDays, addHours, addMonths, addWeeks, addMinutes } from "date-fns";

const today = new Date();
const DAY = new Date("2022-01-01T00:00:00.000Z")

console.clear()
console.log("Diferencias entre new Date String y el formato\n")

console.log(DAY);
console.log("Fecha:", format(DAY, "yyyy-MM-dd"))
console.log("Hora:", format(DAY, "HH:mm:ss"), "\n")

console.log("Distancia entre dos fechas")
console.log(formatDistance(new Date(2022, 5, 1), today), "\n");

// console.log(getDaysBetween(new Date(2022, 5, 20), today));

console.log("Reinicia la hora se le settea en 00:00:00")
console.log(startOfDay(new Date("2022-05-21")), "\n")

// "0001-01-01T00:00:00Z" => Este es la hora universal, dependiendo del país se le suman o restan horas
// En el caso de venezuela se le restan 4 horas a la hora universal UTC
console.log(format(DAY, "'Fecha:' yyyy-MM-dd, 'hora:' HH:mm:ss"), "\n")


console.log("Base day:", DAY, "\n")

console.log("140 Milliseconds:", addMilliseconds(DAY, 140))
console.log("140 Seconds:", addSeconds(DAY, 140))
console.log("130 Minutes:", addMinutes(DAY, 130))
console.log("40 Hours:", addHours(DAY, 40), "\n")

console.log("5 Days:", addDays(DAY, 5))
console.log("20 BusinessDays:", addBusinessDays(DAY, 20), "\n")

console.log("2 Weeks:", addWeeks(DAY, 2))
console.log("11 Months:", addMonths(DAY, 11), "\n")
console.log("2 Quaters:", addQuarters(DAY, 2), "\n")

console.log("10 Years:", addYears(DAY, 10), "\n")

console.log("add", add(DAY, {
  years: 5,
  months: 2,
  days: 20,
  hours: 4,
  minutes: 30,
  seconds: 45,
}))

const anotherDay = add(startOfToday(), {
  hours: 4,
  minutes: 30,
  seconds: 45,
})

console.log(format(anotherDay, "HH:mm"))


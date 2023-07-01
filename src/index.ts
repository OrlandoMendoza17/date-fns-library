import { es } from "date-fns/locale";
import format from "date-fns/format";
import { formatDistance, formatDistanceToNow } from "date-fns";

const today = new Date();


const howLong = (date: Date): string =>{
  const options = {
    locale: es, 
    addSuffix: true,
    includeSeconds: true,
  }
  const dateString = formatDistanceToNow(date, options).split("alrededor de ").join("")
  return dateString;
}

// Día: 1ro de Julio de 2023 - 5:00pm

howLong(new Date("2023-07-01T04:00:00Z"))
// hace 17 horas

howLong(new Date(2023, 6, 1))
// hace 17 horas

howLong(new Date("2023-07-01T22:00:00Z"))
// en 1 hora

howLong(new Date(2023, 6, 1, 18))
// en 1 hora

// const getDaysBetween = (date1: Date, date2: Date) => {
//   const dates: Date[] = []
  
//   while(date1.getTime() < date2.getTime()){
//     dates.push(date1)
//     date1.setDate(date1.getDate() + 1)
//   }
  
//   return dates;
// }


// console.log(getDaysBetween(new Date(2022, 5, 20), today));
const today = new Date();

const getDaysBetween = (date1: Date, date2: Date) => {
  const dates: Date[] = []
  
  while(date1.getTime() < date2.getTime()){
    dates.push(date1)
    date1.setDate(date1.getDate() + 1)
  }
  
  return dates;
}


console.log(getDaysBetween(new Date(2022, 5, 20), today));
export function convertDateToString(date: Date): string {
    console.log("convertDateToString")
    console.log(date)
    const day = date.getDay() + 1
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${year}-${month}-${day}`;
}


export function convertStringToDate(date: string): Date {
    console.log("convertStringToDate")
    console.log(date)
    const dateParts = date.split("-");

    if (dateParts.length === 3) {
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1;
      const day = parseInt(dateParts[2]);
      const dateObject = new Date(year, month, day);
    
      if (!isNaN(dateObject.getTime())) {
        return dateObject
      } else {
        return new Date();
      }
    } else {
        throw new Error("Invalid date format");
    }
}
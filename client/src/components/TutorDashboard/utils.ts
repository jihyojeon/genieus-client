export function displayTimeinHHMM(seconds: number) {
  let hour: string|number = Math.floor(seconds/3600);
  let minute: string|number = Math.floor((seconds - hour*3600)/60)
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  return `${hour}:${minute}`
}

export function displayTimeinMMSS(seconds: number) {
  let minute: string|number = Math.floor(seconds/60);
  let second: string|number = Math.floor((seconds - minute*60))
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  return `${minute}:${second}`
}

export function displayDate (date: Date) {
  let day = date.toString().slice(8,10)
  let month = date.toString().slice(5,7)
  let year = date.toString().slice(0,4)
  return `${day}/${month}/${year}`
}

export default {
  displayTimeinHHMM, 
  displayTimeinMMSS,
  displayDate
}
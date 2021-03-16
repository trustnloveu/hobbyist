// hh:mm String > 오전(오후) hh시 mm분
export function convertTime(timeString) {
  let hour = timeString.split(":")[0];
  let minute = timeString.split(":")[1];

  hour >= 12 ? (hour = `오후 ${+hour - 12}시 `) : (hour = `오전 ${+hour}시 `);
  minute === "00" ? (minute = "") : (minute = `${+minute}분`);

  return hour + minute;
}

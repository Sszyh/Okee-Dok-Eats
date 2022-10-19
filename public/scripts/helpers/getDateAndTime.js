// helper function to convert timestamp to date
export default function getDateAndTime  (timeStamp) {
  const wholeData = new Date(parseInt(timeStamp));
  const year = wholeData.getFullYear();
  const month = wholeData.getMonth();
  const date = wholeData.getDate();
  const hours = wholeData.getHours();
  const minutes = wholeData.getMinutes();
  const seconds = wholeData.getSeconds();

  return year + "-" +month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
};

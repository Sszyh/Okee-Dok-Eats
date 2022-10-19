// helper function to convert timestamp to date yyyy-mm-dd 00:00:00
export default function getDateAndTime  (timeStamp) {

  function paddingZero (num) {
    if(parseInt(num) < 10) {
      num = '0' + num;
    }
    return num;
  }

  const wholeData = new Date(parseInt(timeStamp));
  const year = wholeData.getFullYear();
  const month = paddingZero(wholeData.getMonth());
  const date = paddingZero(wholeData.getDate());
  const hours = paddingZero(wholeData.getHours());
  const minutes = paddingZero(wholeData.getMinutes());
  const seconds = paddingZero(wholeData.getSeconds());

  return year + "-" +month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

};

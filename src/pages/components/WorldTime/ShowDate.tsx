// TODO: Create a minute hand component.
import { useEffect, useState } from "react";

const ShowDate = (props) => {
  const timeZone = props.timeZone;
  const [showDate, setShowDate] = useState(0);


function getLocalTime(i) { 
  if (typeof i !== 'number') return;
  var d = new Date(); 
  var len = d.getTime();
  var offset = d.getTimezoneOffset() * 60000;
  var utcTime = len + offset;
  return new Date(utcTime + 3600000 * i);
}

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const calculateDate = () => {
     const now = getLocalTime(timeZone);
     const resultDate = now?.getDate() + " " + weekDays[now?.getDay()];
     return resultDate;
   };
 
   const updateDate = () => {
    setShowDate(calculateDate() ?? 0);
   };
 
   updateDate();
   const intervalId = setInterval(updateDate, 1000);
   return () => clearInterval(intervalId);
 }, []);

    return (
      <div className="text-center text-slate-950 font-bold text-lg">
        {showDate}
      </div>
    );
  };
  
  export default ShowDate;
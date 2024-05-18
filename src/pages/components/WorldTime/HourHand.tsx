// TODO: Create a minute hand component.
import { useEffect, useState } from "react";

const HourHand = (props) => {
  const timeZone = props.timeZone;
  const [hourHandDegrees, setHourHandDegrees] = useState(0);
  const [isNight, setIsNight] = useState(false);

function getLocalTime(i) { 
  if (typeof i !== 'number') return;
  var d = new Date(); 
  var len = d.getTime();
  var offset = d.getTimezoneOffset() * 60000;
  var utcTime = len + offset;
  return new Date(utcTime + 3600000 * i);
}


  useEffect(() => {
    const calculateHourHandDegrees = () => {
     const now = getLocalTime(timeZone);
     const minutes = now?.getMinutes();
     const hours = now?.getHours();
      if (hours >= 6 && hours < 18) {
        setIsNight(false);
      } else {
        setIsNight(true);
      }
     return (hours * 30 + minutes * 0.5);
   };
 
   const updateHourHand = () => {
    setHourHandDegrees(calculateHourHandDegrees());
   };
 
   updateHourHand();
   const intervalId = setInterval(updateHourHand, 1000);
 
   return () => clearInterval(intervalId);
 }, []);

    return (
      <div className={`${isNight? "bg-white" : "bg-black"} w-[2px] h-[40px] origin-bottom absolute top-[52px] left-[90px]`} style={{transform: `rotate(${hourHandDegrees}deg)`}}>
      </div>
    );
  };
  
  export default HourHand;
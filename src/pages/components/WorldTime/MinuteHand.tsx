// TODO: Create a minute hand component.
import { useEffect, useState } from "react";

const MinuteHand = (props) => {
    const timeZone = props.timeZone;
    const [minuteHandDegrees, setMinuteHandDegrees] = useState(0);
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
    const calculateMinuteHandDegrees = () => {
     const now = getLocalTime(timeZone);
     const minutes = now?.getMinutes();
     const hours = now?.getHours();
     if (hours >= 6 && hours < 18) {
      setIsNight(false);
    } else {
      setIsNight(true);
    }
     return (minutes * 6);
   };
  
    const updateMinuteHand = () => {
      setMinuteHandDegrees(calculateMinuteHandDegrees());
    };
  
    updateMinuteHand();
    const intervalId = setInterval(updateMinuteHand, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  

    return (
      <div className={`${isNight? "bg-white" : "bg-black"} w-[2px] h-[80px] origin-bottom absolute top-[10px]`} style={{transform: `rotate(${minuteHandDegrees}deg)`}}>
      </div>
    );
  };
  
  export default MinuteHand;
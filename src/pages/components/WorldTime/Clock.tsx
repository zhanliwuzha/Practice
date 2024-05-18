// TODO: Create a  clocks component.
import { useEffect, useState } from "react";


import MinuteHand from "./MinuteHand";
import HourHand from "./HourHand";
import ShowDate from "./ShowDate";
import TimeMarks from "./TimeMarks";
const Clock = (props) => {
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
    const checkNight = () => {
     const now = getLocalTime(props.timeZone);
     const hours = now?.getHours();
      if (hours >= 6 && hours < 18) {
        setIsNight(false);
      } else {
        setIsNight(true);
      }
   };

   checkNight();
   const intervalId = setInterval(checkNight, 1000);
 
   return () => clearInterval(intervalId);
 }, []);

    return (
      <div className="w-48 h-64 flex flex-col items-center">
        <div className={`rounded-full w-48 h-48 ${isNight? "bg-slate-950 border-white" : "bg-white border-slate-950"} border-4 flex justify-center items-center relative`}>
            <div className={`rounded-full w-3 h-3 border-2 z-10 ${isNight? "bg-slate-950 border-white" : "bg-white border-slate-950"}`}></div>
            <MinuteHand timeZone={props.timeZone}/>
            <HourHand timeZone={props.timeZone}/>
            <TimeMarks timeZone={props.timeZone}/>
        </div>
        <div className="text-center text-slate-950 font-bold text-lg">{props.Name}</div>
        <ShowDate timeZone={props.timeZone}/>
      </div>
    );
  };
  
  export default Clock;
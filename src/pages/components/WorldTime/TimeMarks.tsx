// TODO: Create a minute hand component.
import { useEffect, useState } from "react";

const TimeMarks = (props) => {
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
    <div>
        <div className="rotate-[0deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
            <div className="flex flex-col ">
                <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
                <div className="w-[2px] h-[80px]"></div>
            </div>
        </div>

        <div className="rotate-[30deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
            <div className="flex flex-col ">
                <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
                <div className="w-[2px] h-[80px]"></div>
            </div>
        </div>

        <div className="rotate-[60deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
            <div className="flex flex-col ">
                <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
                <div className="w-[2px] h-[80px]"></div>
            </div>
        </div>

        <div className="rotate-[90deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
            <div className="flex flex-col ">
                <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
                <div className="w-[2px] h-[80px]"></div>
            </div>
        </div>

        <div className="rotate-[120deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[150deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[180deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[210deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[240deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[270deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[300deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    <div className="rotate-[330deg] absolute top-[10px] origin-bottom top-[0px] left-[49.5%]">
        <div className="flex flex-col ">
            <div className={`${isNight? "bg-white " : "bg-black "} w-[2px] h-[12px]`}></div>
            <div className="w-[2px] h-[80px]"></div>
        </div>
    </div>

    </div>
    
    );
  };
  
  export default TimeMarks;
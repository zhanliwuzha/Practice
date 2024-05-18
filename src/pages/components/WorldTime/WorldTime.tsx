// TODO: Create a flex grid to put clocks components in it.
import Clock from "./Clock";
const WorldTime = () => {
    return (
        <div className="h-9/12 w-9/12  flex justify-center items-center">
            <div className="grid grid-cols-3 grid-flow-row gap-48">
                <Clock timeZone={1} Name="Paris" />
                <Clock timeZone={-4} Name="Toronto"/>
                <Clock timeZone={8} Name="BeiJing"/>
                <Clock timeZone={-4} Name="New York"/>
                <Clock timeZone={0} Name=" London"/>
                <Clock timeZone={9} Name="Tokyo"/>
            </div>
        </div>

    );
  };
  
  export default WorldTime;
import { useEffect, useState } from "react";

export function ClockFunc(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const tick = () =>{
        console.log("tick");
        setTime(new Date().toLocaleTimeString());
    };

    useEffect(()=>{
        console.log(
            "clock componentDidMount / componentDidUpdate (time): "+time
        );
        const timerID= setInterval(()=>tick(),1000);
        return ()=>{
            console.log("clock componentWillUnmount: "+ time);
            clearInterval(timerID);
        };
    },[time]);

    return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {time}</h2>
        </div>
    )
}
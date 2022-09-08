import { useState, useEffect } from "react";

export function TapAlertFunc() {
    const [count, setCount] = useState(0);
    const onClick = () => setCount(count + 1);
    const longResolve =()=>{
        return new Promise((rest)=>{
            setTimeout(rest,5000);
        });
    };

    useEffect(()=>{
        longResolve().then(()=>{
            console.log("componentDidMount or componentDidUpdate: "+count);
        });
    },[count]);

    return (
        <div>
            <button onClick={onClick}>Count: {count}</button>
            <p>Refresh, click the button a few times before 5 seconds</p>
            <p>The output will be shown in the console.log</p>
        </div>
    );
}
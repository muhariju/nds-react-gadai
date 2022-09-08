import { useState, useEffect } from "react";

export function CounterFunc() {
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);

    useEffect(()=> console.log("componentDidMount & componentDidUpdate"));
    
    useEffect(()=>{
        console.log("componentDidMount & componentDidUpdate (increment)");
    }, [increment]);
    
    useEffect(()=>{
        console.log("componentDidMount & componentDidUpdate (decrement)");
    }, [decrement]);

    useEffect(()=>{
        console.log("componentDidMount in useEffect with return");
        return () => console.log("componentWillUnmount");
    },[]);

    const onIncrease = () =>{
        setIncrement(increment+1);
    };

    const onDecrease = () =>{
        setDecrement(decrement+1);
    };

    return (
        <div>
            <button onClick={onIncrease}>Increment</button>
            <h3>{increment}</h3>
            <button onClick={onDecrease}>Decrement</button>
            <h3>{decrement}</h3>
        </div>
    );
}
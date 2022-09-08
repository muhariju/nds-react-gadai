import { useState } from "react";
import { SubmitBtn } from "../../SubmitBtn";

export function CustomForm(){
    const [userName, setUserName] = useState("User");
    const [inputName, setInputName] = useState("");

    const onChange = (event)=>{
        setInputName(event.target.value); 
    };

    const needToResubmit = (input)=>{
        return input !== userName;
    }

    const onSubmit = (event) => {
        if(needToResubmit(inputName)){
            setUserName(inputName);
        }
        event.preventDefault();
    };

    return (
        <div>
            <p>Welcome, {userName}!</p>
            <form onSubmit={onSubmit}>
                <input type="text" value={inputName} onChange={onChange}/>
                <SubmitBtn children="ok"/>
            </form>
        </div>
    )
}
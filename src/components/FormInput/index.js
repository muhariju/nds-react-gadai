import React from "react";

export function FormInput(props){
    const{
        label = "",
        info = "",
        type = "",
        value ="",
        onInputChange=()=>{},
        unit = ""
    }=props;

    return(
        <div>
            <label>
                {info + (unit ? " (" : "") + unit + (unit ? ")" : "")+":"}
            </label>
            <input 
                type={type}
                name={label}
                value={Number(value).toLocaleString("en-US")}
                onChange={onInputChange}
            />
        </div>
    )
}
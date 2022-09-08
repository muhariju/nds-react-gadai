import React, {useReducer} from "react";
import { viewInitState, viewReducer } from "./viewReducer";

export function CodeLab() {
    const [view, dispatchView] = useReducer(viewReducer, viewInitState);

    const onCounterClassClick = () => dispatchView("CounterClass");
    const onCounterFuncClick = () => dispatchView("CounterFunc");
    const onClockClassClick = () => dispatchView("ClockClass");
    const onClockFuncClick = () => dispatchView("ClockFunc");
    const onTapAlertClassClick = () => dispatchView("TapAlertClass");
    const onTapAlertFuncClick = () => dispatchView("TapAlertFunc");

    return (
        <div className="container">
            <h1>CodeLab</h1>
            <button onClick={onCounterClassClick}>CounterClass</button>
            <button onClick={onCounterFuncClick}>CounterFunc</button>
            <button onClick={onClockClassClick}>ClockClass</button>
            <button onClick={onClockFuncClick}>ClockFunc</button>
            <button onClick={onTapAlertClassClick}>TapAlertClass</button>
            <button onClick={onTapAlertFuncClick}>TapAlertFunc</button>
            <fieldset>{view}</fieldset>
        </div>
    )
}
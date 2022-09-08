import React from "react";
import { ClockClass } from "../../components/ClockClass/ClockClass";
import { TapAlertFunc } from "../../components/TapAlertFunc/TapAlertFunc";
import { ClockFunc } from "../../components/ClockFunc/ClockFunc";
import { ClockToggle } from "../../components/ClockToggle/ClockToggle";
import { CounterClass } from "../../components/CounterClass/CounterClass";
import { CounterFunc } from "../../components/CounterFunc/CounterFunc";
import { TapAlertClass } from "../../components/TapAlertClass/TapAlertClass";

export const viewInitState = <CounterClass />;

export function viewReducer(state, action) {
    switch (action) {
        case "CounterClass":
            return <CounterClass />;
        case "CounterFunc":
            return <CounterFunc />;
        case "ClockClass":
            return <ClockToggle children={<ClockClass />} />;
        case "ClockFunc":
            return <ClockToggle children={<ClockFunc />} />;
        case "TapAlertClass":
            return <TapAlertClass />;
        case "TapAlertFunc":
            return <TapAlertFunc />;
        default:
            return <CounterClass />;
    }
}

import { Component } from "react";

export class ClockClass extends Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date().toLocaleDateString() };
    }
    tick() {
        console.log("tick");
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    componentDidMount() {
        console.log("clock componentDidMount: " + this.state.time);
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log("clock componentDidUpdate: " + this.state.time);
    }

    componentWillUnmount() {
        console.log("clock componentWillUnMount: " + this.state.time);
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time} </h2>
            </div>
        );
    }

}
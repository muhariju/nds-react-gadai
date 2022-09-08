import { Component } from "react";

export class TapAlertClass extends Component{
    constructor(props){
        super(props);

        this.state = {count: 0};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {this.setState({count:this.state.count+1})}

    longResolve(){return new Promise((rest)=> setTimeout(rest, 5000))}

    componentDidMount(){
        this.longResolve().then(()=>{
            console.log("componentDidMount: "+this.state.count);
        });
    }

    componentDidUpdate(){
        this.longResolve().then(()=>{
            console.log("componentDidUpdate: "+this.state.count);
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}>Count: {this.state.count}</button>
                <p>Refresh, click the button a few times before 5 seconds</p>
                <p>The output will be shown in the console.log</p>
            </div>
        )
    }
}

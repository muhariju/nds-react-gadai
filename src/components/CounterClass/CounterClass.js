import { Component } from "react";

export class CounterClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            increment: 0,
            decrement: 0,
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    render(){
        const{increment, decrement} = this.state;
        return(
            <div>
                <button onClick={this.onIncrease}>Increment</button>
                <h3>{increment}</h3>
                <button onClick={this.onDecrease}>Decrement</button>
                <h3>{decrement}</h3>
            </div>
        );
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");

        if(prevState.increment !== this.state.increment){
            console.log("increment state alredy changed");
        }
        
        if(prevState.document !== this.state.document){
            console.log("decrement state alredy changed");
        }
    }
    
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    onIncrease(){
        this.setState({increment:this.state.increment+1});
    }

    onDecrease(){
        this.setState({decrement: this.state.decrement+1});
    }

    

}
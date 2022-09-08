import { Component } from "react";

export class ClockToggle extends Component{
    constructor(props){
        super(props);

        this.state = {
            isRemove: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({isRemove: !this.state.isRemove});
    }

    componentDidMount(){
        console.log("Toggle componentDidMount");
    }

    componentDidUpdate(){
        console.log("Toggle componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Toggle componentWillUnMount");
    }
    render(){
        const {isRemove}=this.state;
        let button = isRemove ? null : this.props.children;
        return(
            <div>
                {button}
                <button onClick={this.onClick}>
                    {isRemove ? "Show" : "Remove"}
                </button>
            </div>
        )
    }
}
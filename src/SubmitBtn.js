//import { Children, Component } from "react";

// class SubmitBtn extends Component {
//     render() {
//         console.log("render");
//         const { children } = this.props;
//         return (
//             <button className="submit-btn" type="submit">
//                 <b>{children}</b>
//             </button>
//         )
//     }
// }

const SubmitBtn = (props) => {
    const { children } = props;
    return (
        <button className="submit-btn" type="submit">
            <b>{children}</b>
        </button>
    )
}

export { SubmitBtn };
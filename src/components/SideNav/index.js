import { Link } from "react-router-dom";

export const SideNav=()=>{
    return(
        <ul id="slide-out" className="sidenav">
            <li className="sidenav-close">
                <Link to="/">Home</Link>
            </li>
            <li className="sidenav-close">
                <Link to="/code-lab">Code Lab</Link>
            </li>
            <li className="sidenav-close">
                <Link to="/loan-form">Loan Form</Link>
            </li>
            <li className="sidenav-close">
                <Link to="/marketplace">Marketplace</Link>
            </li>
            <li className="sidenav-close">
                <Link to="/shopping-cart">Shopping Cart</Link>
            </li>
        </ul>
    );
};
import { Link } from "react-router-dom"
import { SideNav } from "../SideNav"
import M from "materialize-css/dist/js/materialize.min.js";
export const NavBar = () => {
    const onClick = () => {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    };

    return (
        <div>
            <nav className="blue">
                <div className="nav-wrapper container">
                    <Link to="#" data-target="slide-out" className="sidenav-trigger" onClick={onClick}>
                        <i className="material-icons">menu</i>
                    </Link>
                    <Link to="/" className="brand-logo">
                        NDS Training
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/code-lab">Code Lab</Link></li>
                        <li><Link to="/loan-form">Loan Form</Link></li>
                        <li><Link to="/marketplace">Marketplace</Link></li>
                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </div>
            </nav>
            <SideNav />
        </div>
    );
};
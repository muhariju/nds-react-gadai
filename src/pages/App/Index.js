import {BrowserRouter, Route, Routes} from "react-router-dom";
import { LoanForm } from "../../components/LoanForm";
import { NavBar } from "../../components/NavBar";
import { CodeLab } from "../CodeLab";
import { Home } from "../Home/index";
import { Marketplace } from "../Marketplace";
import { ShoppingCart } from "../ShoppingCart";
import { User } from "../User";
import { AddUser } from "../User/AddUser";
import { DetailUser } from "../User/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/nds-react-gadai/" element={<Home />} />
        <Route exact path="/nds-react-gadai/code-lab" element={<CodeLab />} />
        <Route exact path="/nds-react-gadai/loan-form" element={<LoanForm />} />
        <Route exact path="/nds-react-gadai/marketplace" element={<Marketplace />} />
        <Route exact path="/nds-react-gadai/shopping-cart" element={<ShoppingCart />} />
        <Route exact path="/nds-react-gadai/user" element={<User />} />
        <Route exact path="/nds-react-gadai/addUser" element={<AddUser />} />
        <Route exact path="/nds-react-gadai/detailUser" element={<DetailUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

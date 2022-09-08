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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/code-lab" element={<CodeLab />} />
        <Route exact path="/loan-form" element={<LoanForm />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/shopping-cart" element={<ShoppingCart />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/addUser" element={<AddUser />} />
        <Route exact path="/detailUser" element={<DetailUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

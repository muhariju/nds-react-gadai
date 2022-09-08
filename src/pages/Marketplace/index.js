import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { CardProduct } from "../../components/CardProduct";
import { CircularPreLoader } from "../../components/CircularPreLoader";
import {
  addProduct,
  removeProduct,
  selectCartItems,
} from "./../../redux/cartSlice";

const BASE_URL = "https://fakestoreapi.com";

export const Marketplace = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const item = cart.find((it) => it.product.id === product.id);
    const prevQuantity = item ? item.quantity : 0;
    const newList = list.map((element) =>
      element.product.id === product.id
        ? { ...element, quantity: prevQuantity + 1 }
        : element
    );
    return () => {
      dispatch(addProduct({ product, quantity: prevQuantity + 1 }));
      setList(newList);
    };
  };

  const handleRemoveToCart = (product) => {
    const item = cart.find((it) => it.product.id === product.id);
    const prevQuantity = item ? item.quantity : 0;
    const newList = list.map((element) =>
      element.product.id === product.id
        ? { ...element, quantity: prevQuantity - 1 }
        : element
    );
    return () => {
      dispatch(removeProduct({ product, quantity: prevQuantity - 1 }));
      setList(newList);
    };
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products`)
      .then((response) => {
        const list = response.data
          ? response.data.map((product) => {
              const item = cart.find((it) => it.product.id === product.id);
              const prevQuantity = item ? item.quantity : 0;
              return { product: { ...product }, quantity: prevQuantity };
            })
          : [];
        setList(list);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No Network Connection!",
    });
  }

  return (
    <div className="center-align">
      <h1>Marketplace</h1>
      {isLoading ? <CircularPreLoader /> : null}
      {list && list.length > 0 ? (
        <ul className="collection">
          {list.map((element) => (
            <CardProduct
              key={element.product.id}
              product={element.product}
              quantity={element.quantity}
              handleAddToCart={() =>
                dispatch(handleAddToCart(element.product))
              }
              handleRemoveToCart={() =>
                dispatch(handleRemoveToCart(element.product))
              }
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

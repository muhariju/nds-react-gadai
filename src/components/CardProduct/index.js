import "./index.css";

export const CardProduct = (props) => {
  const {
    product = {
      id: 1,
      title: "Title",
      price: "100.00",
      description: "description",
      image: "",
      rating: {
        rate: "5.0",
        count: "100",
      },
    },
    quantity = "0",
    handleAddToCart = null,
    handleRemoveToCart = null,
  } = props;

  return (
    <li
      key={product.id}
      className="collection-item-avatar left-align item-card">
      <div className="row valign-wrapper">
        <div className="col s2">
          <img src={product.image} alt="" className="circle item-image" />
        </div>
        <div className="col s10">
          <div className="row">
            <h5 className="title col s10 truncate">{product.title}</h5>
            <h6 className="col s2 center-align item-price">
              ${product.price}
            </h6>
          </div>
          <div className="row">
            <span className="col s9 valign-wrapper">
              <i className="material-icons">star</i>
              {product.rating.rate}
            </span>
            <span className="col s3">
              <div className="secondary-content">
                {handleRemoveToCart ? (
                  <button
                    id="remove"
                    className="material-icons"
                    onClick={handleRemoveToCart}
                    disabled={quantity < 1}>
                    remove_circle_outline
                  </button>
                ) : null}
                <span id="quantity">{quantity}</span>
                {handleAddToCart ? (
                  <button
                    id="add"
                    className="material-icons"
                    onClick={handleAddToCart}>
                    add_circle_outline
                  </button>
                ) : null}
              </div>
            </span>
          </div>
          <span className="truncate2">{product.description}</span>
        </div>
      </div>
    </li>
  );
};

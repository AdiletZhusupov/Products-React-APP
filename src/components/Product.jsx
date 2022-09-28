import { Link } from "react-router-dom";

const Product = (props) => {
  const { product, handleBackHome } = props;

  return (
    <>
      <Link
        to="/"
        className="btn home-link"
        onClick={() => {
          handleBackHome();
        }}
      >
        back home
      </Link>
      <section className="product">
        <div className="product-wrapper">
          <img
            src={product.fields.image[0].url}
            className="img"
            alt={product.fields.name}
          />
          <div className="product-info">
            <h3>{product.fields.name}</h3>
            <h5>{product.fields.company}</h5>
            <span>{product.fields.price}</span>
            <div className="colors">
              <span
                className="product-color"
                style={{ background: "#f15025" }}
              ></span>
              <span
                className="product-color"
                style={{ background: "#222" }}
              ></span>
            </div>
            <p>{product.fields.description}</p>
            <button className="btn">add to cart</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;

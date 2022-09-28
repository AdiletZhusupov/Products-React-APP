import { Link } from "react-router-dom";
const MainPage = (props) => {
  const { allItems, handleClick } = props;

  return (
    <section className="products">
      <div className="title">
        <h2>our products</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products-center">
        <div className="products-container">
          {allItems.map((item) => {
            return (
              <Link
                key={item.id}
                to="/product"
                className="single-product"
                onClick={() => handleClick(item.id)}
              >
                <img
                  src={item.fields.image[0].url}
                  className="single-product-img img"
                  alt={item.fields.name}
                />
                <footer>
                  <h5 className="name">{item.fields.name}</h5>
                  <span className="price">${item.fields.price}</span>
                </footer>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainPage;

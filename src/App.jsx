import Header from "./component/header";
import Product1 from "./component/product1";
import Product2 from "./component/product2";
import Product3 from "./component/product3";
import "./App.css";

const App = () => {
  return (
    <div>

      <Header />

      <p className="subtitle">
        Find something you love.
      </p>

      <div className="product-container">
        <Product1 />
        <Product2 />
        <Product3 />
      </div>

    </div>
  );
};

export default App;
import Button from "./button";

const Product1 = () => {
  const product = {
    name: "Laptop",
    price: 95000,
    category: "Electronics"
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: Rs. {product.price}</p>
      <p>Category: {product.category}</p>
      <Button/>
    </div>
  );
};

export default Product1;
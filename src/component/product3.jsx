import Button from "./button";

const Product3 = () => {
  const product = {
    name: "Television",
    price: 100000,
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

export default Product3;
import Button from "./button";

const Product2 = () => {
  const product = {
    name: "Mobile",
    price: 20000,
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

export default Product2;
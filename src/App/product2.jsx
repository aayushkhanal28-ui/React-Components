const Product2 = () => {
  const product = {
    name: "Mobile",
    price: 20000,
    category: "Electronics"
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: Rs. {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default Product2;
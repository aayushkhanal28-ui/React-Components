const Product3 = () => {
  const product = {
    name: "Television",
    price: 100000,
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

export default Product3;
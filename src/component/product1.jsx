const Product1 = () => {
  const product = {
    name: "Laptop",
    price: 95000,
    category: "Electronics",
    available: true,
    icon: "💻"
  };

  return (
    <div className="product-card">

      <div className="product-icon">
        {product.icon}
      </div>

      <h2>{product.name}</h2>

      <p className="category">
        {product.category}
      </p>

      <p className="price">
        Rs. {product.price}
      </p>

      <p className={product.available ? "available" : "unavailable"}>
        {product.available ? "✓ Available" : "✕ Unavailable"}
      </p>

      <button>View Details</button>

    </div>
  );
};

export default Product1;
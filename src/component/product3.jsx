const Product3 = () => {
  const product = {
    name: "Television",
    price: 100000,
    category: "Electronics",
    available: false,
    icon: "📺"
  };

  return (
    <div className="product-card">

      <div className="product-icon">
        {product.icon}
      </div>

      <h2>{product.name}</h2>

      <p className="category">{product.category}</p>

      <p className="price">
        Rs. {product.price}
      </p>

      <p className="unavailable">
        ✕ Unavailable
      </p>

      <button>View Details</button>

    </div>
  );
};

export default Product3;
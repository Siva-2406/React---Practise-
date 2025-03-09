import React, { useState } from "react";
import "./App.css";

const products = [
    { id: 1, name: "iPhone 13 Pro - Transparent", price: "LKR 499", image: "https://picsum.photos/200/300?random=1" },
    { id: 2, name: "Samsung S23+ - Transparent", price: "LKR 799", image: "https://picsum.photos/200/300?random=2" },
    { id: 3, name: "Pixel 7 Pro - Transparent Wireless", price: "LKR 599", image: "https://picsum.photos/200/300?random=3" },
    { id: 4, name: "iPhone 14 - MagSafe Transparent", price: "LKR 759", image: "https://picsum.photos/200/300?random=4" },
    { id: 5, name: "Pixel 6 - Matte Black", price: "LKR 499", image: "https://picsum.photos/200/300?random=5" },
    { id: 6, name: "Galaxy Z Flip - Transparent", price: "LKR 999", image: "https://picsum.photos/200/300?random=6" },
    { id: 7, name: "iPhone 12 Mini - Transparent", price: "LKR 699", image: "https://picsum.photos/200/300?random=7" },
    { id: 8, name: "Samsung S22 - Transparent", price: "LKR 799", image: "https://picsum.photos/200/300?random=8" },
    { id: 9, name: "Pixel 5 - MagSafe Transparent", price: "LKR 759", image: "https://picsum.photos/200/300?random=9" },
    { id: 10, name: "iPhone SE - Transparent Wireless", price: "LKR 599", image: "https://picsum.photos/200/300?random=10" },
    { id: 11, name: "OnePlus 11 - Transparent", price: "LKR 899", image: "https://picsum.photos/200/300?random=11" },
    { id: 12, name: "Nokia XR20 - Matte Black", price: "LKR 499", image: "https://picsum.photos/200/300?random=12" },
    { id: 13, name: "Redmi Note 12 - Transparent", price: "LKR 699", image: "https://picsum.photos/200/300?random=13" },
    { id: 14, name: "Realme GT - Transparent Wireless", price: "LKR 599", image: "https://picsum.photos/200/300?random=14" },
    { id: 15, name: "iPhone 15 - MagSafe Transparent", price: "LKR 799", image: "https://picsum.photos/200/300?random=15" },
    { id: 16, name: "Samsung Flip 5 - Transparent", price: "LKR 1099", image: "https://picsum.photos/200/300?random=16" },
    { id: 17, name: "Oppo Reno 8 - Transparent", price: "LKR 799", image: "https://picsum.photos/200/300?random=17" },
    { id: 18, name: "Vivo X90 - Transparent Wireless", price: "LKR 599", image: "https://picsum.photos/200/300?random=18" },
    { id: 19, name: "Google Pixel Fold - Transparent", price: "LKR 1299", image: "https://picsum.photos/200/300?random=19" },
    { id: 20, name: "iPhone XR - Matte Black", price: "LKR 699", image: "https://picsum.photos/200/300?random=20" }
  ];

function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <h2>Shop All Products</h2>
      <input
        type="text"
        placeholder="Search Products..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No products found.</p>
      )}
    </main>
  );
}

export default Products;

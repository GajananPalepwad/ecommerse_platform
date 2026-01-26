import React from 'react';
import { Heart, ShoppingBasket } from "lucide-react";

// Accept products and title as props
function TopProducts({ products, title }) {
  // If no products are passed, use default topProducts (for Home page)
  const defaultProducts = [
    { id: 1, name: "Smart Watch WH@@-6 Fitness Tracker", price: "$120" },
    { id: 2, name: "Wireless Headphones Pro Max", price: "$250" },
    { id: 3, name: "Backpack Travel Outdoor Edition", price: "$80" },
    { id: 4, name: "UV Protected Stylish Sunglasses", price: "$150" },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <div>
      <section>
        <h2 className="text-xl font-bold mb-6">{title || "Top Products"}</h2>

        <div className="grid grid-cols-4 gap-6 min-w-[1200px]">
          {displayProducts.map((p) => (
            <div key={p.id}>
              {/* Product Image */}
              <div className="h-72 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center relative">
                <span className="text-gray-400">Image here</span>

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <Heart size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                <h3 className="text-center font-bold text-sm mb-3 line-clamp-1">
                  {p.name}
                </h3>

                <div className="flex justify-center">
                  <button className="flex items-center gap-2 bg-white text-blue-800 border-2 border-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
                    <span>{p.price}</span>
                    <ShoppingBasket size={18} className="text-blue-800" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TopProducts;
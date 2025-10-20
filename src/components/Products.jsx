import React from "react";
import { useParams } from "react-router-dom";

const productNames = {
  item1: "Interior Decor Planning",
  item2: "Re-Upholstery",
  item3: "Curtaining & Blinds",
  item4: "Carpet & Upholstery Cleaning",
  item5: "Wood Restoration",
  item6: "Office Furniture",
};

function Products() {
  const { itemId } = useParams();
  const productName = productNames[itemId];

  return (
    <div className="p-6 text-center">
      {productName ? (
        <>
          <h1 className="text-2xl font-bold text-red-600 mb-4">{productName}</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Welcome to the page for <strong>{productName}</strong>. More details coming soon!
          </p>
        </>
      ) : (
        <h1 className="text-xl font-semibold text-gray-500">Product not found.</h1>
      )}
    </div>
  );
}

export default Products;

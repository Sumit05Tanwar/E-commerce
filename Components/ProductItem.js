/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          className="rounded shadow"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col item-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/slices/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <div key={p._id} className="border p-4 rounded-xl shadow">
          <img src={p.image} alt={p.name} className="rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

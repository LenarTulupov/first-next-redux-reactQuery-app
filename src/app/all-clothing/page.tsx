'use client';

import Container from "@/components/ui/Container/Container";
import All from "./All";
import Pagination from "@/components/Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setProducts } from "@/store/products/productsSlice";

export default function Page() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      dispatch(setProducts(data));
    }
    fetchProducts();
  }, [dispatch]);
  return (
    <div>
      <Container>
        {/* <All /> */}
        <Pagination products={products}/>
      </Container>
    </div>
  )
};

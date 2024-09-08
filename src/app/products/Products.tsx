'use client';

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { setProducts } from '@/store/products/productsSlice';
import styles from './Products.module.scss'
import Card from '@/components/Card/Card';
// import { useQuery } from '@tanstack/react-query';

export default function Products() {
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


  // const { data, error, isLoading } = useQuery(['products'], )
  return (
    <div className={styles.products}>
      {products.map((product) => {
        const imageUrl =
          product.product_colors[0].product_color_images[0].image_path;
          console.log(product)
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price_new={product.price_new}
            price_old={product.price_old}
            sizes={product.sizes}
            src={imageUrl}
            alt={product.title}
          />
        )
      })}
    </div>
  )
};

'use client';

import Card from "@/components/Card/Card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styles from './All.module.scss'

export default function All() {
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div className={styles.all}>
    {products.map((product) => {
      const imageUrl =
        product.product_colors[0].product_color_images[0].image_path;
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

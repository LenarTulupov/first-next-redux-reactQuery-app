import { useDispatch, useSelector } from 'react-redux'
import styles from './Products.module.scss'
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { setProducts } from '@/store/products/productsSlice';

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

  console.log(products)

  return (
    <div className={styles.products}>
        { products.map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
          </div>
        ))}
    </div>
  )
};

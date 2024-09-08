import { ICard } from "@/types/card.interface";
import Image from "next/image";
import styles from './Card.module.scss'
import Sizes from "../Sizes/Sizes";
import Button from "../ui/Button/Button";

export default function Card({
  // id,
  src,
  alt,
  title,
  sizes,
  price_new,
  price_old }: ICard) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={0}
        layout='intrinsic'
        priority
      />
      <div className={styles['card__product-info']}>
        <div>
          {title}
        </div>
        <div className={styles.prices}>
          <div className={styles.prices__old}>{price_old}</div>
          <div>{price_new}</div>
        </div>
        <Sizes sizes={sizes} />
        <Button
          variant='black'
          className={styles.card__button}
        >
          Add To Card
        </Button>
      </div>
    </div>
  )
};

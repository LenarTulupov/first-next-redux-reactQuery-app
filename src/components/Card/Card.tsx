import { ICard } from "@/types/card.interface";
import Image from "next/image";
import styles from './Card.module.scss'
import Sizes from "../Sizes/Sizes";

export default function Card({
  id,
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
      <div>
        {title}
      </div>
      <Sizes sizes={sizes} />
      <div className={styles.prices}>
        <div className={styles.prices__old}>{price_old}</div>
        <div>{price_new}</div>
      </div>
    </div>
  )
};

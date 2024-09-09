import { ICard } from "@/types/card.interface";
import Sizes from "../Sizes/Sizes";
import Button from "../ui/Button/Button";
import Title from "../ui/Title/Title";
import FavoriteButton from "../ui/FavoriteButton/FavoriteButton";
import CardImage from "../ui/CardImage/CardImage";
import Price from "../ui/Price/Price";
import styles from './Card.module.scss'

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
      <CardImage src={src} alt={alt} />
      <FavoriteButton className={styles['card__favorite-button']} />
      <div className={styles['card__product-info']}>
        <Title>{title}</Title>
        <div className={styles.prices}>
          <Price className={styles.prices__old} price={price_old} />
          <Price price={price_new} />
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

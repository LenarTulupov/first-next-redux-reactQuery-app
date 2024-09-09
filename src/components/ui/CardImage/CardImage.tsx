import Image from "next/image";
import styles from './CardImage.module.scss'

interface ICardImage {
  src: string;
  alt: string;
  className?: string;
}

export default function CardImage({ src, alt, className }: ICardImage ) {
  return (
    <div className={`${styles['card-image']} ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={240} // Фиксированная ширина
        height={320} // Фиксированная высота
        objectFit="cover"
        layout='intrinsic'
        loading="lazy"
      />
    </div>
  )
};

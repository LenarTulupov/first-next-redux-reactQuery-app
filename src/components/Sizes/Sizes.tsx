import { TypeSizes } from '@/types/sizes.interface'
import styles from './Sizes.module.scss'

export default function Sizes({ sizes }: TypeSizes) {
  return (
    <div className={styles.sizes}>
      {sizes.map((size) => (
        <div key={size.id} className={styles.sizes__size}>
          {size.abbreviation}
        </div>
      ))}
    </div>
  )
};

import { TypeSizes } from '@/types/sizes.interface'
import Button from '../ui/Button/Button'
import styles from './Sizes.module.scss'

export default function Sizes({ sizes }: TypeSizes) {
  return (
    <div className={styles.sizes}>
      {sizes.map((size) => (
        <Button
          key={size.id}
          className={styles['sizes__size-button']}
          variant='white'
        >
          {size.abbreviation}
        </Button>
      ))}
    </div>
  )
};

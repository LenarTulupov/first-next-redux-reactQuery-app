import SearchImage from '@/components/ui/SearchImage/SearchImage'
import styles from './Search.module.scss'
import CloseButton from '@/components/ui/CloseButton/CloseButton'

interface ISearch {
  onClick: () => void;
}

export default function Search({ onClick }: ISearch) {
  return (
    <div className={styles.search}>
      <div className={styles['search__block']}>
        <SearchImage variant='black' />
        <input
          type="text"
          placeholder='What are you looking for?'
          className={styles.search__input}
        />
        <CloseButton onClick={onClick} />
      </div>
    </div>
  )
};

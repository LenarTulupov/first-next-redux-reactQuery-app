import { CgSearch } from "react-icons/cg";
import styles from './SearchImage.module.scss'

interface ISearchImage {
  variant?: 'black' | 'white';
}

export default function SearchImage({ variant = 'black' }: ISearchImage) {
  return (
    <div className={`${styles['search-image']} ${styles[variant]}`}>
        <CgSearch/>
    </div>
  )
};

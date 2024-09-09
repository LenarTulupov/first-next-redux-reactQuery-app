import { ReactNode } from "react"
import styles from './Title.module.scss'

interface ITitle {
  children: ReactNode;
  size?: 'sm',
  className?: string;
}

export default function Title({ children, size = 'sm', className}: ITitle) {
  return (
    <div className={`${styles.title} ${styles[size]} ${className || ''}`}>
        { children }
    </div>
  )
};

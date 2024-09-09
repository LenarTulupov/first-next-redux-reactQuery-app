import { IButton } from "@/types/button.interface";
import styles from './Button.module.scss'

export default function Button({
  children,
  onClick,
  className,
  variant = 'black',
  size = 'md' }: IButton) {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${className || ''}
      `}
    >
      {children}
    </button>
  )
};

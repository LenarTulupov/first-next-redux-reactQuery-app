import { ITextInput } from "@/types/text-input.interface";
import styles from './TextInput.module.scss'

export default function TextInput({
  type,
  className,
  id,
  placeholder }: ITextInput) {
  return (
    <input
      id={id}
      type={type}
      className={`${styles['text-input']} ${className || ''}`}
      placeholder={placeholder}
    />
  )
};

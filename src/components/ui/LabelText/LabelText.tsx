import { ReactNode } from "react";

interface ILabelText {
  htmlFor: string;
  label?: string;
  children: ReactNode;
}

export default function LabelText({ htmlFor, label, children  }: ILabelText ) {
  return (
    <label htmlFor={htmlFor}>
      {children || label}
    </label>
  )
};

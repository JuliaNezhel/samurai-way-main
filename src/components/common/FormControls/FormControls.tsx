import { FC } from "react";
import s from "./FormControl.module.css";

const FormControl: FC<any> = ({ input, meta, element, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea: FC<any> = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props.textarea} {...props}></textarea>
    </FormControl>
  );
};

export const Input: FC<any> = (props) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props}></input>
    </FormControl>
  );
};

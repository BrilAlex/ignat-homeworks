import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
};

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any[] = options
    ? options.map((o, i) => <option key={"option-" + i} value={o}>{o}</option>)
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  }

  return (
    <select className={s.superSelect} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
}

export default SuperSelect;

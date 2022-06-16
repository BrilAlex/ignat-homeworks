import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState
} from "react";
import s from "./SuperDoubleRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: [number, number]) => void
  rangeValues?: [number, number]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    type, value, rangeValues, onChange, onChangeRange,
    min, max, step, disabled,
    ...restProps
  }
) => {
  // сделать самому, можно подключать библиотеки
  const initMin = min ? min : 0;
  const initMax = max ? max : 100;
  const stepValue = step ? step : 1;
  const initMinValue = rangeValues ? rangeValues[0] : initMin;
  const initMaxValue = rangeValues ? rangeValues[1] : initMax;

  const [minValue, setMinValue] = useState(initMinValue);
  const [maxValue, setMaxValue] = useState(initMaxValue);

  const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.currentTarget.value, maxValue);
    setMinValue(value);
    onChangeRange && onChangeRange([value, maxValue]);
  };

  const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.currentTarget.value, minValue);
    setMaxValue(value);
    onChangeRange && onChangeRange([minValue, value]);
  };

  useEffect(() => {
    if (initMinValue <= maxValue && !disabled) setMinValue(initMinValue);
  }, [initMinValue, maxValue, disabled]);

  return (
    <div className={s.doubleRange}>
      <div className={s.doubleRangeTrack}/>
      <input
        type={"range"}
        value={minValue}
        onChange={onMinValueChange}
        className={s.doubleRangeThumb}
        style={{zIndex: minValue === maxValue && minValue !== 0 ? 1 : 0}}
        min={initMin}
        max={initMax}
        step={stepValue}
        disabled={disabled}
        {...restProps}
      />
      <input
        type={"range"}
        value={maxValue}
        onChange={onMaxValueChange}
        className={`${s.doubleRangeThumb} ${s.doubleRangeRightThumb}`}
        min={initMin}
        max={initMax}
        step={stepValue}
        disabled={disabled}
        {...restProps}
      />
    </div>
  );
}

export default SuperDoubleRange;

import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const onDoubleRangeChange = (value: [number, number]) => {
    setValue1(value[0]);
    setValue2(value[1]);
  };

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={`${s.rangeWrap} ${s.singleRangeWrap}`}>
        <span>{value1}</span>
        <SuperRange
          // сделать так чтоб value1 изменялось
          value={value1}
          onChangeRange={setValue1}
        />
      </div>

      <div className={`${s.rangeWrap} ${s.doubleRangeWrap}`}>
        <span>{value1}</span>
        <SuperDoubleRange
          // сделать так чтоб value1 и value2 изменялось
          rangeValues={[value1, value2]}
          onChangeRange={onDoubleRangeChange}
        />
        <span>{value2}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  );
}

export default HW11;

import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ["light", "dark", "red", "some"];

function HW12() {
  const theme = useSelector<AppStateType, string>(state => state.theme); // useSelector

  // useDispatch, onChangeCallback
  const dispatch = useDispatch();
  const onChangeCallback = (theme: string) => {
    dispatch(changeThemeAC(theme));
  };

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
        homeworks 12
      </span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <div>
        <SuperSelect
          value={theme}
          options={themes}
          onChangeOption={onChangeCallback}
        />
      </div>

      <hr/>
    </div>
  );
}

export default HW12;

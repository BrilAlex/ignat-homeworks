import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {toggleIsLoadingAC, SetIsLoadingActionType} from "./bll/loadingReducer";
import {AppStateType} from "./bll/store";
import s from "./HW10.module.css";
import preloader from "./assets/img/preloader.gif";

function HW10() {
  // useSelector, useDispatch
  const isLoading = useSelector<AppStateType, boolean>(state => state.loading.isLoading);
  const dispatch = useDispatch<Dispatch<SetIsLoadingActionType>>();

  const setLoading = () => {
    // dispatch
    dispatch(toggleIsLoadingAC(true));

    // setTimeout
    setTimeout(() => {
      dispatch(toggleIsLoadingAC(false));
    }, 3000);
    // console.log('loading...');
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      {isLoading
        ? (
          <div className={s.preloader}>
            <img src={preloader} alt={"крутилка..."}/>
          </div>
        ) : (
          <div className={s.preloader}>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10;

import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import styles from "./assets/css/HW10.module.css"
import preloader from "./assets/images/preloader.gif";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, LoadingType>(state => state.loading)
    const dispatch = useDispatch();
    const isLoading = loading.isLoading;

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true));
        // setTimeout
        setTimeout(() => dispatch(loadingAC(false)), 3000);
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={styles.preloader}>
            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>
                        <img src={preloader} alt={"Preloader"}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

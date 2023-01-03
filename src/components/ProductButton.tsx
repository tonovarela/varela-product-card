import React from "react";
import {  useContext } from "react";

import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ({ className = '', style }: Props) => {
    const { increaseBy, counter, isMaxReached} = useContext(ProductContext);
    //const isMaxCountReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])
    const styleIncreaseButton = `${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''} `;
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={`${styles.buttonMinus}`} onClick={() => increaseBy(-1)}> - </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styleIncreaseButton} disabled={isMaxReached()} onClick={() => increaseBy(+1)}> + </button>
        </div>
    )
}
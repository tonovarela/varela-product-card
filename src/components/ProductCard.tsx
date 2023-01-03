import React from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from './../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import { createContext } from 'react';


export const ProductContext = createContext({} as ProductContextProps)
export const { Provider } = ProductContext;

export interface Props {
    product: Product;
    className?: string;    
    children:(args:ProductCardHandlers)=>JSX.Element ;
    style?:React.CSSProperties;
    onChange?: (args:OnChangeArgs) => void ;
    value?:number;
    initialValues?:InitialValues
}


export const ProductCard = ({ children, product, className ,style={},onChange,value=0,initialValues}: Props) => {
    const { counter, increaseBy,isMaxReached,reset } = useProduct( { onChange,product,value,initialValues});

    return (

        <Provider value={{ counter, increaseBy, product ,isMaxReached}}>
            <div className={`${styles.productCard} ${className}`}  style={style}>
                {children({
                    count:counter,
                    isMaxCountReached:isMaxReached(),
                    maxCount:initialValues?.maxCount,
                    increaseBy,
                    product,
                    reset
                })}
            </div>
        </Provider>

    )
}


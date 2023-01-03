import React from "react";
import { useContext } from "react"


import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface Props {
    img?:string;
    className?:string;
    style?:React.CSSProperties
}
export const ProductImage = ({ img = '',className ='',style }:Props) => {
    const { product } = useContext(ProductContext)
    const imagen =img.length > 0?img :product.img    
    return (
        <img className={ `${styles.productImg} ${className} `}  style={style}  src={imagen ?imagen : noImage} alt="Product"></img>
    )
}
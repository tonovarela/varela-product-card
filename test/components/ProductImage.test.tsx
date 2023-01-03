import React from "react";
import renderer from "react-test-renderer";

import {  ProductCard,ProductImage } from '../../src/components'
import {  product2 } from './../data/product';

describe('ProductImage', () => {
    test('Se debe de mostrar el componente del la imagen producto', () => {        
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => (<ProductImage  />)
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('Se debe de mostrar el componente del la imagen personalizada', () => {        
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => (<ProductImage  img="http://logo.com" />)
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
});
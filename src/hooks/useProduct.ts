import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from './../interfaces/interfaces';

interface UseProductArgs {
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?: number,
    initialValues?:InitialValues
}

export const useProduct = ({ onChange, product, value = 0,initialValues }: UseProductArgs) => {
   const isMounted = useRef(false);
    const [counter, setCounter] = useState<number>(initialValues?.count || value);        
    useEffect(() => {                
        if (!isMounted.current) return;        
        //setCounter(value)
    }, [value]);

    const increaseBy = (value: number) => {            
        let newValue = Math.max(counter + value, 0);        
        if (initialValues?.maxCount ){            
            newValue = Math.min(newValue,initialValues.maxCount)            
        }
        setCounter(newValue);
        onChange && onChange({ counter: newValue, product });
    }

    const isMaxReached =()=>{
        const  maxCount = initialValues?.maxCount
        return !!maxCount && maxCount === counter;
    }

    const reset =()=>{
        setCounter(initialValues?.count || value);        
    }



    return {
        counter,

        increaseBy,        
        isMaxReached,
        reset

    }
}
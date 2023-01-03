import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductImage,ProductTitle,ProductButtons } from  '../.'

const App = () => {
  const product = {
    id: '1',
    title: "Coffe mugg---",
   // img: "coffee-mug.png"
  }
  
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 4, maxCount: 15 }} >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
              
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

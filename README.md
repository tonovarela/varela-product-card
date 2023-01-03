# Varela Product Card

Este es un depliegue de pruebas paras NPM

##Marco Antonio Estelles Martinez

##Ejemplo
```
import { ProductCard,ProductImage,ProductTitle,ProductButtons } from  'varela-product-card'

<ProductCard  product={product} initialValues={{ count: 4, maxCount: 15 }} >
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

```
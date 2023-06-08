import React from 'react'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from "./ProductItem"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from '../actions'

const ProductsList = () => {
    const products = useSelector(state => getVisibleProducts(state.products))
    
    const dispatch = useDispatch()
    const dispatchAddToCart = (id) => dispatch(addToCart(id))
    
    return (
        <div>
            <h3>Products</h3>
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCartClicked={() => dispatchAddToCart(product.id)} />
            )}
        </div>
    )
}

export default ProductsList
import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
                <img className='productDisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-stars">
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starDullIcon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productDisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productDisplay-right-description">
                Soft and breathable, this classic cotton T-shirt is designed for all-day comfort. 
                Featuring a relaxed fit and reinforced stitching, 
                it’s perfect for casual outings or layering under your favorite jacket. 
                Available in multiple colors to suit every style.
            </div>
            <div className="productDisplay-right-size-container">
                <h1>Select Size</h1>
                <div className="productDisplay-right-sizes">
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productDisplay-right-category'>
                <span>Categoty: </span>
                Women , T-Shirt, Crop Top
            </p>
            <p className='productDisplay-right-category'>
                <span>Tags: </span>
                Modern , Latest, New
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay
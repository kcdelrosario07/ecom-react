import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">
                Description
            </div>
            <div className="descriptionBox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionBox-description">
          <p>
            Our E-Commerce Platform is a user-friendly online marketplace designed 
            to provide customers with an intuitive shopping experience. With a sleek, 
            modern interface and advanced features, customers can browse, discover, and 
            purchase products from a wide range of categories including electronics, 
            fashion, home goods, and more.
          </p>
          <p>
            Whether you're shopping for the latest tech gadgets, fashion trends, or home essentials, 
            our eCommerce platform is the perfect place to find everything you need. Start shopping 
            now and experience the future of online shopping.
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox
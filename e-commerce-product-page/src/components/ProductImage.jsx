import React from 'react'
import { useState } from 'react'


import Product1 from '../assets/images/image-product-1.jpg'
import Product2 from '../assets/images/image-product-2.jpg'
import Product3 from '../assets/images/image-product-3.jpg'
import Product4 from '../assets/images/image-product-4.jpg'


import 'flowbite/dist/flowbite.css';

import Arrow from '../assets/images/icon-next.svg';
import Cart from './Cart';
import Navbar from './Navbar';
import ProductInfo from './ProductInfo';
import ItemPrice from './ItemPrice';
import ImageSelector from './ImageSelector';
const ProductImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addToCart = (quantity) => {
        const newItem = {
            price: 125.00,
            quantity: quantity,
        }

        setCartItems((prevItems) => [...prevItems, newItem])
    }

    const deleteItem = (index) => {
        setCartItems((prevItems) => {
            const updatedItem = [...prevItems]
            updatedItem.splice(index, 1)
            return updatedItem
        })
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1) % 4);
    }

    const handleDisplayCart = () => {
        setIsCartOpen((prevState) => !prevState);
    }


    return (
        <>
            <div className='flex flex-col justify-center min-h-screen w-screen'>

                <Navbar
                    openCart={handleDisplayCart}
                    cartItemsLength={cartItems.length}
                />

                <ImageSelector />


                <div className="w-full h-80 relative overflow-hidden z-0 min-[768px]:hidden">
                    <div className="w-screen h-auto flex z-0 overflow-hidden ">
                        <img className='duration-700 ease-in-out w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' src={Product1} alt="" aria-hidden="true" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                        <img className='duration-700 ease-in-out w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={Product2} alt="" aria-hidden="true" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                        <img className='duration-700 ease-in-out w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={Product3} alt="" aria-hidden="true" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                        <img className='duration-700 ease-in-out w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' src={Product4} alt="" aria-hidden="true" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                    </div>

                    <div className="w-full  px-5 flex justify-between absolute top-1/2">
                        <button onClick={handlePrevSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-White cursor-pointer"><img className="-rotate-180 w-2 " src={Arrow} alt="" /></button>
                        <button onClick={handleNextSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-White cursor-pointer"><img className="w-2" src={Arrow} alt="" /></button>
                    </div>

                </div>




                <ProductInfo

                />
                <ItemPrice
                    addToCart={addToCart}
                />

                {
                    isCartOpen && (
                        <Cart
                            deleteItem={deleteItem}
                            cartItems={cartItems}
                        />
                    )
                }


            </div>
        </>
    )
}

export default ProductImage
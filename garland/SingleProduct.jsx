import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ecomContext } from './Home';
import "./SingleProduct.css";
const SingleProduct = () => {
    const { id } = useParams(); //{id:2}
    const { products, handleAddToCart } = useContext(ecomContext);

    const [productToDisplay, setProductToDisplay] = useState({});

    useEffect(() => {
        if (products.length > 0 && id) {
            setProductToDisplay(
                products.find((product) => product.id === Number(id))
            );
        }
    }, [id, products]);

    console.log(productToDisplay);


    return (
        <>
            {
                Object.keys(productToDisplay).length > 0 ? (
                    <div className='singleproduct-container'>
                        <div>
                            <img src={productToDisplay.image} alt='img'></img>
                        </div>
                        <div className='singleProduct-info'>
                            <h3>{productToDisplay.name}</h3>
                            <p>
                                <strong>Category:</strong>
                                {productToDisplay.category}
                            </p>
                            <p>
                                <strong>Price:</strong>
                                {productToDisplay.price}
                            </p>
                            <p>
                                <strong>Description:</strong>
                                {productToDisplay.description}
                            </p>
                           
                            <button onClick={(e) => handleAddToCart(e, productToDisplay)}>Add To Cart</button>
                        </div>
                    </div>) : ("")
            }
        </>
    )
}

export default SingleProduct
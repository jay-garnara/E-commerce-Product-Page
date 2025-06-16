import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';


const ProductDetail = () => {
    const {id} = useParams()

    const [product, setProduct] = useState({})

    const [related, setRelated] = useState([])

    useEffect(() => {
        const filterProduct = items.filter( (product) => product.id == id)
        // console.log(filterProduct);
        setProduct(filterProduct[0])

        const relatedProduct = items.filter( (jay) => jay.category === product.category)
        // console.log(relatedProduct);
        setRelated(relatedProduct)
      
    }, [id, product.category])
    

    
 
    
  return (
    <>
    <div className="container" style={{display:'flex', justifyContent:'center', 'alignItems':'center', gap:'5rem', marginTop:'6rem'}}>
        <div className="img" style={{display:'flex', justifyContent:'center', 'alignItems':'center'}}>
            <img src={product.imgSrc} style={{height:'350px',width:'350px'}} alt="" />
        </div>
        <div className='container text-center'>
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description   }</p>
            <button className='btn btn-primary mx-2' >{product.price}</button>
            <button className='btn btn-warning'>Add to Cart</button>
        </div>
    </div>
    <div className='text-center'>
        <h3 style={{fontWeight:'bold'}}>Related Product</h3>
    </div>
    <div>
        <Product items={related} />
    </div>
    </>
  )
}

export default ProductDetail
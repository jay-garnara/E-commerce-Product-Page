import React from 'react'
// import { items } from './Data'
import { Link } from 'react-router-dom'

const Product = ({items}) => {
    console.log(items);
  return (
    <div className="container">
        <div className="row my-3">
        {
            items.map( (product) => {
                return(
                    <>
                    <div key={product.id} className="col-lg-4 col-md-6 text-center" style={{marginTop:'8rem'}}>
                    <div className="card" style={{width: "18rem"}}>
                        <Link to={`/product/${product.id}`} style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }} >
                            <img src={product.imgSrc} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description   }</p>
                            <button className='btn btn-primary mx-2' >{product.price}</button>
                            <button className='btn btn-warning'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })
        }
        </div>
    </div>
  )
}

export default Product
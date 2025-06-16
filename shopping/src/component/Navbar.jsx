import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";


const Navbar = ({setData}) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('')

  const filterByCategory = (category) => {
    const element = items.filter( (product) => product.category === category)
    console.log(element);
    setData(element)
  }

  const filterByPrice = (price) => {
    const ele = items.filter( (product) => product.price >= price)
    console.log(ele);
    setData(ele)
  }

  function handleSubmit(e){
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <header>
      <div className="nav-bar">
        <Link to={'/'} className="logo">E-commerce</Link>
        <div className="search">
          <form onSubmit={handleSubmit} >
            <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder="search item" />
          </form>
        </div>
        <Link to={'/cart'} className="cart">Cart</Link>
      </div>

      <div className="nav-bar-wrapper">
        <div className="items">Filter By {"- >"}</div>
        <div onClick={()=> setData(items)} className="items">No Filter</div>
        <div onClick={()=>filterByCategory('mobiles')} className="items">Mobile</div>
        <div onClick={()=>filterByCategory('laptops')} className="items">Laptop</div>
        <div onClick={()=>filterByCategory('tablets')} className="items">Tablets</div>
        <div onClick={()=>filterByPrice(29999)} className="items">{"> ="}29999</div>
        <div onClick={()=>filterByPrice(49999)} className="items">{"> ="}49999</div>
        <div onClick={()=>filterByPrice(69999)} className="items">{"> ="}69999</div>
        <div onClick={()=>filterByPrice(89999)} className="items">{"> ="}89999</div>
      </div>
    </header>
  );
};

export default Navbar;

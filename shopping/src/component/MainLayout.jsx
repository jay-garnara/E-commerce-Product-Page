import React, {useState} from 'react'
import Navbar from './Navbar'
import Product from './Product'
import { items } from './Data'



const MainLayout = () => {
     const [data, setData] = useState([...items])
  return (
    <div>
      <Navbar setData={setData} />
      <Product items={data} />
    </div>
  )
}

export default MainLayout
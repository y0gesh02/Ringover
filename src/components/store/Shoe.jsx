import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
 
const Shoe = ({ pro, setCart, cart }) => {
  return (
    <div className='shoe'>
        <img src={pro.img} style={{width: '10rem'}} alt="" />
        <h3>{pro.name}</h3>
        <div style={{display: 'flex'}}>
            <p>Rs. {pro.price}</p>
            <div style={{marginLeft: 'auto'}}>
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarFill style={{color: 'gold'}} />
                <BsStarHalf style={{color: 'gold'}} />
            </div>
        </div>
        <button onClick={() => setCart((curr) => [...curr, pro])}><AiOutlinePlus size={24} /></button>
    </div>
  )
}

export default Shoe
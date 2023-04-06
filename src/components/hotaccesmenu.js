import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/hotaccesmenu.css"

const hotaccesmenu = () => {
  return (
    <div className='hotaccesmenu'>
        <link className='hotacceslink' to="/music">Music Store</link>
        <link className='hotacceslink' to="/smartdev">Smart Devices</link>
        <link className='hotacceslink' to="/home">Home</link>
        <link className='hotacceslink' to="/lifestyle">Lifestyle</link>
        <link className='hotacceslink' to="/mobaccess">Mobile Accessories</link>

    </div>
  )
}

export default hotaccesmenu
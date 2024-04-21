import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
         <img src="/header_img.png"/>
        <div className="header-contents">
            <h2>Order your<br/> favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience.one delicious meal at time. </p>
            <button>View Menu</button>
           
        </div>
    </div>
  )
}

export default Header
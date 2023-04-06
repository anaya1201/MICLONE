import React from 'react'
import hotitemcard from "./hotitemcard.js"
import "../styles/hotAccessories.css"

const hotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='hotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="cover"/>
        </div>

        <div>
            {music && music.map((item,index)=>(
                <hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

            ))}
        </div>
        <div>
            {smartDevice && smartDevice.map((item,index)=>(
                <hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

            ))}
        </div>
        <div>
            {home && home.map((item,index)=>(
                <hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

            ))}
        </div>
        <div>
            {lifeStyle && lifeStyle.map((item,index)=>(
                <hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

            ))}
        </div>
        <div>
            {mobileAccessories && mobileAccessories.map((item,index)=>(
                <hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

            ))}
        </div>

        <hotitemcard image="//book now"/>

    </div>
  )
}

export default hotAccessories
import React,{useState,useEffect} from 'react'
import navcard from "./navcard.js"
import "../styles/navoptions.css"

const navoptions = ({miPhones,redmiPhones,tv,audio,home,fitnessAndLifeStyle,laptop,accessories}) => {
    const [miPhoneToggle,setmiPhoneToggle]=useState(false);
    const [redmiPhoneToggle,setredmiPhoneToggle]=useState(false);
    const [tvToggle,settvToggle]=useState(false);
    const [audioToggle,setaudioToggle]=useState(false);
    const [homeToggle,sethomeToggle]=useState(false);
    const [laptopToggle,setlaptopToggle]=useState(false);
    const [accessoriesToggle,setaccessoriesToggle]=useState(false);
    const [fitnessAndLifeStyleToggle,setfitnessAndLifeStyleToggle]=useState(false);

    useEffect(()=>{
        if(window.location.pathname==="/miphones"){
            return setmiPhoneToggle(true)
        }
        if(window.location.pathname==="/redmiphones"){
            return setredmiPhoneToggle(true)
        }
        if(window.location.pathname==="/tv"){
            return settvToggle(true)
        }
        if(window.location.pathname==="/home"){
            return sethomeToggle(true)
        }
        if(window.location.pathname==="/audio"){
            return setaudioToggle(true)
        }
        if(window.location.pathname==="/accessories"){
            return setaccessoriesToggle(true)
        }
        if(window.location.pathname==="/fitnessAndLifeStyle"){
            return setfitnessAndLifeStyleToggle(true)
        }
        if(window.location.pathname==="/laptop"){
            return setlaptopToggle(true)
        }
    },[])

  return (
    <div className='navoptions'>
{miPhoneToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{redmiPhoneToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{tvToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{audioToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{homeToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{laptopToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{accessoriesToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
{fitnessAndLifeStyleToggle? miPhones.map((item)=>(
    <navcard name={item.name} price={item.price} image={item.image} key={item.image}/>

)):null}
    </div>
  )
}

export default navoptions
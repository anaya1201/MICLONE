import "./App.css"; 
import prenavbar from "./components/prenavbar";
import navbar from "./components/navbar.js"
import {BrowserRouter as router,Route} from "react-router-dom"
import Slider from "./components/Slider.js"
import {banner} from "./data/data.json"
import data from "./data/data.json"
import offers from "./component/offers.js"
import heading from "./components/heading.js"
import starproduct from "./components/starproduct.js"
import hotaccesmenu from "./components/hotaccesmenu.js"
import hotAccessories from "./components/hotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import banner from "./components/banner.js"
import footer from "./components/footer.js"
import navoptions from "./components/navoptions.js"

function App() {
//we basically created an object to pass
//everything passed as string bec {} indicates js and comma imp

  return (  //anything inside return in html outside is js thus combination of js and html jss
    <router>
         <prenavbar/>
         <navbar/>
         <navoptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio}/>
         <slider start={data.banner.start}/>
         <offers offers={data.offer}/>
         <heading text="STAR PRODUCTS"/>
         <starproduct starproduct={data.starproduct}/>
         <heading text="HOT ACCESSORIES"/>
         <hotaccesmenu/>
         <Route exact path="/music">
               <hotacces music={ data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
         </Route>
         <Route exact path="/smartDevice">
               <hotacces smartDevice={ data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
         </Route>
         <Route exact path="/home">
               <hotacces home={ data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
         </Route>
         <Route exact path="/lifestyle">
               <hotacces lifestyle={ data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>
         </Route>
         <Route exact path="/mobileAccessories">
               <hotacces mobileAccessories={ data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
         </Route>

         <heading text="PRODUCT REVIEWS"/>
         <ProductReviews productReviews/>
         <heading text="VIDEOS"/>
         <Videos videos={data.videos}/>
         <heading text="IN THE PRESS"/>
         <banner banner={data.banner}/>
         <footer footer={data.footer}/>


     </router>
    
         
          
   
  );
}

export default App;

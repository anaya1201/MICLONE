import React from 'react'
import "../styles/footer.css"
import "../styles/prefooter.css"

const youtubeicon:<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M616 814q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168 799q-26-7-45-26t-26-45q-6-23-9.5-56T82 609q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347 258q62-2 133-2t133 2q53 2 104.5 5.5T792 273q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600 736q0 21 4 40.5t12 37.5ZM400 656l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>;
const twittericon:<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M295 736q-3-4 19.5-31.5T366 646q33-37 77-82 12-18 33-18t35 16q12 16 9 36.5T498 628q-55 33-98 58-38 21-70 37.5T295 736Zm135 280q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-27-5-45.5-27T340 856q0-4 3-21-74-26-119.5-83T165 605q-5 5-11 8t-14 3q-15 0-37.5-22.5T80 496q0-69 40.5-124.5T200 316q13 0 16.5 11.5T220 350q38-54 95.5-89T442 218q6-29 29-45.5t49-16.5v40q4-6 10-10 5-4 12.5-7t17.5-3q10 0 17.5 3t12.5 7q6 4 10 10-15 0-25 9t-13 22q54 14 100 46t78 77q0-11 3.5-22.5T760 316q39 0 79.5 55.5T880 496q0 75-22.5 97.5T820 616q-7 0-13.5-2.5T795 606q-14 100-68.5 159.5T582 845q3 14 13.5 22.5T620 876h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T702 974q-11 8-28 14t-44 8q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-24-5-40.5-22T542 852q-15 2-30 3t-32 1q-26 0-50.5-2.5T382 846l-2 10q0 17 11.5 28.5T420 896h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T502 994q-11 8-28 14t-44 8Zm320-391q5-20 7.5-42t2.5-47q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 24 2.5 46t7.5 42q5-20 13.5-39.5T243 548q-6-14-9.5-29.5T230 486q0-63 43.5-106.5T380 336q29 0 54.5 10.5T480 375q20-18 45.5-28.5T580 336q63 0 106.5 43.5T730 486q0 17-3.5 32.5T716 548q11 17 20 36.5t14 40.5ZM480 816q87 0 146.5-27t92.5-81q0-3 .5-6t.5-6q0-30-7-58t-21-53q-21 23-49.5 37T580 636q-8 0-16-1t-16-3q5-7 7.5-14.5T559 602q1-2 1-4v-4q5 1 10 1.5t10 .5q46 0 78-32t32-78q0-46-32-78t-78-32q-20 0-39 7.5T507 405l-27 24-27-24q-15-14-34-21.5t-39-7.5q-46 0-78 32t-32 78q0 41 25.5 70.5T359 594l-30 33q-18-7-33.5-17.5T268 585q-14 25-21 53t-7 58v10q34 54 94 82t146 28Zm100-260q-25 0-42.5-20.5T520 486q0-29 17.5-49.5T580 416q25 0 42.5 20.5T640 486q0 29-17.5 49.5T580 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T595 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Zm-215 90q-25 0-42.5-20.5T320 486q0-29 17.5-49.5T380 416q25 0 42.5 20.5T440 486q0 29-17.5 49.5T380 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T395 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Z"/></svg>;
const facebookicon:<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M295 736q-3-4 19.5-31.5T366 646q33-37 77-82 12-18 33-18t35 16q12 16 9 36.5T498 628q-55 33-98 58-38 21-70 37.5T295 736Zm135 280q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-27-5-45.5-27T340 856q0-4 3-21-74-26-119.5-83T165 605q-5 5-11 8t-14 3q-15 0-37.5-22.5T80 496q0-69 40.5-124.5T200 316q13 0 16.5 11.5T220 350q38-54 95.5-89T442 218q6-29 29-45.5t49-16.5v40q4-6 10-10 5-4 12.5-7t17.5-3q10 0 17.5 3t12.5 7q6 4 10 10-15 0-25 9t-13 22q54 14 100 46t78 77q0-11 3.5-22.5T760 316q39 0 79.5 55.5T880 496q0 75-22.5 97.5T820 616q-7 0-13.5-2.5T795 606q-14 100-68.5 159.5T582 845q3 14 13.5 22.5T620 876h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T702 974q-11 8-28 14t-44 8q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-24-5-40.5-22T542 852q-15 2-30 3t-32 1q-26 0-50.5-2.5T382 846l-2 10q0 17 11.5 28.5T420 896h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T502 994q-11 8-28 14t-44 8Zm320-391q5-20 7.5-42t2.5-47q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 24 2.5 46t7.5 42q5-20 13.5-39.5T243 548q-6-14-9.5-29.5T230 486q0-63 43.5-106.5T380 336q29 0 54.5 10.5T480 375q20-18 45.5-28.5T580 336q63 0 106.5 43.5T730 486q0 17-3.5 32.5T716 548q11 17 20 36.5t14 40.5ZM480 816q87 0 146.5-27t92.5-81q0-3 .5-6t.5-6q0-30-7-58t-21-53q-21 23-49.5 37T580 636q-8 0-16-1t-16-3q5-7 7.5-14.5T559 602q1-2 1-4v-4q5 1 10 1.5t10 .5q46 0 78-32t32-78q0-46-32-78t-78-32q-20 0-39 7.5T507 405l-27 24-27-24q-15-14-34-21.5t-39-7.5q-46 0-78 32t-32 78q0 41 25.5 70.5T359 594l-30 33q-18-7-33.5-17.5T268 585q-14 25-21 53t-7 58v10q34 54 94 82t146 28Zm100-260q-25 0-42.5-20.5T520 486q0-29 17.5-49.5T580 416q25 0 42.5 20.5T640 486q0 29-17.5 49.5T580 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T595 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Zm-215 90q-25 0-42.5-20.5T320 486q0-29 17.5-49.5T380 416q25 0 42.5 20.5T440 486q0 29-17.5 49.5T380 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T395 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Z"/></svg>;
const instagramicon:<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M295 736q-3-4 19.5-31.5T366 646q33-37 77-82 12-18 33-18t35 16q12 16 9 36.5T498 628q-55 33-98 58-38 21-70 37.5T295 736Zm135 280q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-27-5-45.5-27T340 856q0-4 3-21-74-26-119.5-83T165 605q-5 5-11 8t-14 3q-15 0-37.5-22.5T80 496q0-69 40.5-124.5T200 316q13 0 16.5 11.5T220 350q38-54 95.5-89T442 218q6-29 29-45.5t49-16.5v40q4-6 10-10 5-4 12.5-7t17.5-3q10 0 17.5 3t12.5 7q6 4 10 10-15 0-25 9t-13 22q54 14 100 46t78 77q0-11 3.5-22.5T760 316q39 0 79.5 55.5T880 496q0 75-22.5 97.5T820 616q-7 0-13.5-2.5T795 606q-14 100-68.5 159.5T582 845q3 14 13.5 22.5T620 876h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T702 974q-11 8-28 14t-44 8q-5 0-10-2t-8-7q-4-6-8-16.5t-4-24.5q0-9 1-16.5t3-15.5q-24-5-40.5-22T542 852q-15 2-30 3t-32 1q-26 0-50.5-2.5T382 846l-2 10q0 17 11.5 28.5T420 896h23q7 0 12 4t7 10q5 16 17.5 30t23.5 23q8 7 7.5 16.5T502 994q-11 8-28 14t-44 8Zm320-391q5-20 7.5-42t2.5-47q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 24 2.5 46t7.5 42q5-20 13.5-39.5T243 548q-6-14-9.5-29.5T230 486q0-63 43.5-106.5T380 336q29 0 54.5 10.5T480 375q20-18 45.5-28.5T580 336q63 0 106.5 43.5T730 486q0 17-3.5 32.5T716 548q11 17 20 36.5t14 40.5ZM480 816q87 0 146.5-27t92.5-81q0-3 .5-6t.5-6q0-30-7-58t-21-53q-21 23-49.5 37T580 636q-8 0-16-1t-16-3q5-7 7.5-14.5T559 602q1-2 1-4v-4q5 1 10 1.5t10 .5q46 0 78-32t32-78q0-46-32-78t-78-32q-20 0-39 7.5T507 405l-27 24-27-24q-15-14-34-21.5t-39-7.5q-46 0-78 32t-32 78q0 41 25.5 70.5T359 594l-30 33q-18-7-33.5-17.5T268 585q-14 25-21 53t-7 58v10q34 54 94 82t146 28Zm100-260q-25 0-42.5-20.5T520 486q0-29 17.5-49.5T580 416q25 0 42.5 20.5T640 486q0 29-17.5 49.5T580 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T595 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Zm-215 90q-25 0-42.5-20.5T320 486q0-29 17.5-49.5T380 416q25 0 42.5 20.5T440 486q0 29-17.5 49.5T380 556Zm15-90q7 0 11-4.5t4-10.5q0-6-4.5-10.5T395 436q-7 0-11 4.5t-4 10.5q0 7 4.5 11t10.5 4Z"/></svg>;



const footer = () => {
  return (
   <>
   <div className='prefooter'>
    <div>
        {repeaticon}
        <p><b>Hassle-free replacement</b> <br>10-day easy replacement policy on mi.com</br></p>
    </div>
    <div>
        {shieldicon}
        <p><b>100% secure payments</b> <br>We support Cards,Wallets,EMI and COD</br></p>
    </div>
    <div>
        {mapicon}
        <p><b>Vast service network</b> <br>1000 Mi service-centers across 600 cities</br></p>
    </div>

   </div>
   <div className='prefooter2'>
    <div>
        <p><b>LET'S STAY IN TOUCH</b> <span>Get updates on sales specials and more</span></p>
        <div>
            <div>
                <input type="email" name="email" placeholder="Enter Email Address"/>
                <button>></button>
            </div>
            <span>Thanks. You're on our email list for special offers.</span>
        </div>
        <div>
            <p>FOLLOW MI</p>
            <span>We want to hear from you!</span>
        </div>
        <div>
            {facebookicon} {youtubeicon} {instagramicon} {twittericon}
        </div>
    </div>

   </div>

   <div className='footer'>
    <div>
        <p>SUPPORT</p>
        {footer.support.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}
    </div>
    <div>
        <p>SHOP AND LEARN</p>
        {footer.shopAndLearn.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}
    </div>
    <div>
        <p>RETAIL STORE</p>
        {footer.retailStore.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}
    </div>
    <div>
        <p>ABOUT</p>
        {footer.about.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}
    </div>
    <div>
        <p>CONTACT US</p>
        {footer.contactUs.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}
    </div>
    <div>
        <div>Chat with our Virtual AI Bot(24/7 Live agent Support)</div>
        <button>CHAT NOW</button>
    </div>


   </div>
   <div className='footerBorder'>
    <div>Copyright c 2010</div>
   </div>
   </>
  )
}

export default footer
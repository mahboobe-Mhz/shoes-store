

import { Button } from "../../../component/button";
import { El } from "../../../library/El";
import { Router } from "../../../rout";
import Swiper from "swiper";


export const page3 =()=>{

    return  El({
      element:"div",
      id:"descPages",
      className:"text-center ",
      child:[
        El({
          element:"div",
          className:"swiper mySwiper ",
          child:[ El({
            element:"div",
            className:"swiper-wrapper",
            child:[
              El({
                element:"div",
                className:"swiper-slide",
                child:[El({
                  element:"div",
                  className:"",
                  child:[El({
                    element:"img",
                    className:"imgSwiper",
                    src:"photo/WallpaperDog-20534536 1.jpg"
                  }),
                El({
                  element:"div",
                  className:" mt-5 mr-3 ml-3",
                  child:El({
                    element:"p",
                    className:"text-2xl ",
                    child:"We provide high quality products just for you"
                  })
                })]
                })
     
                ]
              }),
              El({
                element:"div",
                className:"swiper-slide",
               child:[El({
                  element:"div",
                  child:[El({
                    element:"img",
                    className:"imgSwiper",
                    src:"./photo/WallpaperDog-20397673 1.jpg"
                  }),
                El({
                  element:"div",
                  className:" mb-10 mt-10 mr-3 ml-3",
                  child:El({
                    element:"p",
                    className:"text-2xl ",
                    child:"Your satisfaction is our number one periority"
                  })
                })]
                })
     
                ]
              }),
              El({
                element:"div",
                className:"swiper-slide",
                child: [El({
                  element:"div",
                  child:[El({
                    element:"img",
                    className:"imgSwiper",
                    src:"photo/WallpaperDog-20534715 1.jpg"
                  }),
                El({
                  element:"div",
                  className:" mb-10 mt-10 mr-3 ml-3",
                  child:El({
                    element:"p",
                    className:"text-2xl ",
                    child:"Let’s fulfill your fashion needs with shoearight now!"
                  })
                })]
                })
     
                ]
              })
            ]
          })

       ,El({
          element:"div",
          className:"swiper-pagination"
       }),
    
     
      ] })
        ,   El({
          element:"div",
          className:"mx-2 mb-2  ",
          child:  Button({
            element :"button",
            id:"next",
            onclick:()=>{
           const btn=   document.querySelector(".mySwiper").swiper
           const next =document.getElementById("next")
           btn.slideNext()
  
            if(btn.activeIndex===2){
              next.innerHTML="get Started"
            }
         
          },
            child:"next",
            classes:"mt-10 w-full",
            variant:"black"
        })
        })
      
      
      ]
   
    })

   
 

  }
export const func =()=>{
  Router().navigate('/login')
}


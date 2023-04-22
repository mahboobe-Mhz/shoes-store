import Swiper from 'swiper/bundle';
import { func } from '../../screens/start/page3';


export const newSwiper =()=>{
    const swiper =new Swiper('.swiper', {
      loop:false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
       pagination:"true",
       type:"bullets",
       effect:"fade"
        },
        // navigation:{
        //   nextEl:'.swiper-button-next',
    
        // }
      })
     swiper.on('slideChange',()=>{
      const next = document.getElementById('next')
      if(swiper.activeIndex ===0){
        next.innerHTML='next'
      }

     if(swiper.activeIndex ===1){
      next.innerHTML='next'
    
    }

      if(swiper.activeIndex ===2){
        next.innerHTML='get started'
        next.addEventListener('click',()=>{
          func()
         } 
         )
      }
     })
  
  }

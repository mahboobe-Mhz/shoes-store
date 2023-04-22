import { svg } from "../../assets/svgs"
import { Footer } from "../../component/footer"
import { fetchShoes } from "../../instance/fetchShoes"
import { El } from "../../library/El"
import { Router } from "../../rout"

export const MyOrder=()=>{
    return El({
        element:"div",
        className:"",
        child:[
            El({
                element:"div",
                className:"p-5 bg-gray-100 h-[660px]",
                child:[
                    El({
                        element:"header",
                        className:"flex justify-between",
                        child:[ 
                             El({
                            element:"div",
                            className:" flex gap-4",
                            child:[
                                 El({
                                    element:"img",
                                    className:"w-4 h-5 mt-1",
                                    src:"photo/logo.png"
                                
                            }), El({
                                element:"h1",
                                className:"text-xl font-semibold",
                                child:"My Orders"
                            })]
                        }), El({
                            element:"div",
                            className:"flex gap-4",
                            child:[ El({
                                element:"span",
                                className:"",
                                onclick:()=>{ Router().navigate('/search')},
                               innerHTML:svg.search2
                            }), El({
                                element:"span",
                                className:" border-2 border-gray-900 rounded-full px-1 pt-[3px] pb-[2px] h-[26px] ",
                                innerHTML:svg.viewMoreIcon
                            })]
                        })]
                    }),
                    El({
                        element:"nav",
                        className:" mt-6 flex justify-around ",
                        child:[
                            El({
                                element:"div",
                                className:"border-b-2 pb-3  text-center w-full",
                                child:"Active",
                                id:"active",
                                onclick:(e)=>{
                                    Active(e)
                                }
                            }), El({
                                element:"div",
                                className:"border-b-2 pb-3  text-gray-400 text-center w-full",
                                child:"completed",
                                id:"completed",
                                onclick:(e)=>{
                                    completed(e)
                                }
                            })
                        ]
                    }),
                    El({
                        element:"section",
                        className:"mt-3",
                       id:"orderActive"
                    }),  El({
                        element:"section",
                        className:"mt-3",
                        id:"orderCompleted"
                    })
                ]
            }),  El({
                element:"footer",
                className:"fixed top-[620px]  bg-good w-full pl-9 py-1",
                onclick:(e)=>{
                    console.log( e.target.id);
                   
                }
                ,
                child:Footer()
            }), 
        ]
    })
}
export const Active= async(e)=>{
   const orderCompleted=document.getElementById('orderCompleted')
   orderCompleted.innerHTML=""
   const orderActive=document.getElementById('orderActive')
   orderActive.innerHTML=""
   const completed =document.getElementById('completed')
   const active =document.getElementById('active')
   completed.classList.add('text-gray-400')
   completed.classList.remove('border-gray-900')
   active.classList.remove("text-gray-400")
   active.classList.add("border-gray-900")

    await fetchShoes("shoes").then(res=>{
        res.data.forEach(element => {
         if(element.choices){
            console.log(element.choices);
            orderActive.innerHTML+=`<div class="bg-good mb-2  w-full   rounded-2xl flex p-4">
            <div id="${element.name}" class=" rounded-2xl px-2 ">
              <img src="${element.picture}" class=" w-[110px] h-[120px] bg-silver rounded-xl" alt=""/>
            </div>
            <div class="pl-2 flex flex-col gap-2">
            <div class="flex justify-between ">
            <h2 class="font-semibold  overflow-hidden">${element.name}</h2>
           
            </div>
       
              <div class="flex text-xs text-gray-500"> <div class="flex gap-2  pr-3"><span class="bg-${element.choices.color} px-[7px] h-[15px]  rounded-full"></span> <span class=""> ${element.choices.color}</span> </div> 
              <span class="border-r  border-gray-600 h-2 mt-1"></span>
              <div class="ml-2"> <span> size</span> <span>${element.choices.size}</span> </div> </div>
              <div class="flex flex-col">
              <span class="bg-silver pt-1 pb-1 px-3 w-[90px] text-xs  rounded-md ">
              In Delivery
            </span>
              <div class="flex  mt-2">
              <div class="font-semibold mt-2 "> <span>$</span> <span>${element.price}</span></div>
              <span class="bg-gray-900 text-gray-100 ml-3 px-2 pt-[6px] mt-1 rounded-full text-xs"> Track Order</span>
           
              
              </div>
             
              
              </div> 
              </div>
             
            </div>`
      
         }
        });
        if(res.data[0].choices){
            console.log(res.data[0]);
        }else{
       
                orderActive.innerHTML=`<div class="h-32"> <img   src="photo/60_Light_my orders active empty.jpg"/> </div>`
        

        }
    })


}
export const completed=async(e)=>{
    const orderCompleted=document.getElementById('orderCompleted')
    orderCompleted.innerHTML=""
    console.log("completed");
    const orderActive=document.getElementById('orderActive')
    const active =document.getElementById('active')
    orderActive.innerHTML=""
    e.target.classList.remove("text-gray-400")
    e.target.classList.add("border-gray-900")
    active.classList.add("text-gray-400")
    active.classList.remove("border-gray-900")
    console.log(active);
    await fetchShoes("shoes").then(res=>{
        res.data.forEach(element => {
 
         if(element.choices){
          
            orderCompleted.innerHTML+=`<div class="bg-good mb-2  w-full   rounded-2xl flex p-4">
            <div id="${element.name}" class=" rounded-2xl px-2 ">
              <img src="${element.picture}" class=" w-[110px] h-[120px] bg-silver rounded-xl" alt=""/>
            </div>
            <div class="pl-2 flex flex-col gap-2">
            <div class="flex justify-between ">
            <h2 class="font-semibold  overflow-hidden">${element.name}</h2>
           
            </div>
       
              <div class="flex text-xs text-gray-500"> <div class="flex gap-2  pr-3"><span class="bg-${element.choices.color} px-[7px] h-[15px]  rounded-full"></span> <span class=""> ${element.choices.color}</span> </div> 
              <span class="border-r  border-gray-600 h-2 mt-1"></span>
              <div class="ml-2"> <span> size</span> <span>${element.choices.size}</span> </div> </div>
              <div class="flex flex-col">
              <span class="bg-silver pt-1 pb-1 px-3 w-[90px] text-xs  rounded-md ">
              In Delivery
            </span>
              <div class="flex justify-between  mt-2">
              <div class="font-semibold mt-2 "> <span>$</span> <span>${element.price}</span></div>
              <span class="bg-gray-900 text-gray-100  px-2 pt-[6px] mt-1 rounded-full text-xs"> Track Order</span>
           
              
              </div>
             
              
              </div> 
              </div>
             
            </div>`
      
         } 
        });
        if(res.data[0].choices){
            console.log();
        }else{
       
                orderActive.innerHTML=`<img  src="photo/60_Light_my orders active empty.jpg"/>`
        

        }
    })

   
}
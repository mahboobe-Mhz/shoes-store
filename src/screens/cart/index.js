import { svg } from "../../assets/svgs"
import { Button } from "../../component/button"
import { Footer } from "../../component/footer"
import { removeFromCart } from "../../component/removeFromCart"
import { fetchShoes } from "../../instance/fetchShoes"
import { El } from "../../library/El"
import { Router } from "../../rout"
export let totalAmount=0

export const myCart =()=>{
    return El({
        element:"div",
        className:" bg-silver ",
        
        child:[
            El({
                element:"header",
                className:"flex justify-between p-5",
                child:[
                    El({
                        element:"div",
                        className:"flex gap-4",
                        child:[
                            El({
                                element:"img",
                                className:"w-4 h-5 mt-1",
                                src:"photo/logo.png"
                            }),  El({
                                element:"span",
                                className:"font-semibold text-xl ",
                                child:"My Cart"
                            })
                        ]
                    }),
                    El({
                        element:"div",
                        className:"",
                        href:"/search",
                        onclick:()=>{
                            Router().navigate("/search")
                        },
                        restAttrs:{"data-navigo":true},
                        innerHTML:svg.search2
                    })
                ]
            }),
            El({
                element:"section",
                className:" bg-silver px-4 h-[600px]",
                id:"cartData",
               
                
            }),
            El({
                element:"section",
                className:"bg-good flex gap-3 rounded-t-3xl border-t border-gray-300 pt-6 px-4 fixed w-full top-[520px] pb-12  ",
                id:"totalDiv",
                child:[
                    El({
                        element:"div",
                        className:"w-[80px] ",
                        child:[
                            El({
                                element:"span",
                                className:"text-gray-400 text-xs ",
                                child:"Total price"
                            }),
                            El({
                                element:"span",
                                className:"flex font-semibold text-xl ",
                                child:[
                                    El({
                                        element:"span",
                                        className:"",
                                        child:"$"
                                    }),
                                    El({
                                        element:"span",
                                        className:" ",
                                        id:"totalPrice",
                                       
                                    })
                                ]
                            })
                        ]
                    }),
                    El({
                        element:"div",
                        className:"w-full",
                        onclick:()=>{Router().navigate('/checkOut')},
                        child:Button({variant : 'black' , child:"Checkout ▶" ,classes:"py-3 font-light shadow-gray-300 shadow-xl"} )
                    })
                ]
            }),
            El({
                element:"footer",
                className:"fixed top-[620px]  bg-good w-full pl-9 py-1",
                child:Footer()
            })
        ]
    })
}
export const choicesShoes=async()=>{
    let totalPricee = 0
    const cartData=document.getElementById("cartData")
   await fetchShoes("shoes").then(res=>{
        res.data.forEach(element => {
         if(element.choices){
            console.log(element.choices);
            cartData.innerHTML+=`<div class="bg-good mb-2  w-full h-32 rounded-2xl flex p-4">
            <div id="${element.name}" class=" rounded-2xl px-2 
            ">
              <img src="${element.picture}" class="w-28 h-24 bg-silver rounded-xl" alt=""/>
            </div>
            <div class="pl-2 flex flex-col gap-2">
            <div class="flex justify-between w-48">
            <h2 class="font-semibold  overflow-hidden">${element.name}</h2>
            <span class="trash" ><svg id="${element.id}"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="25px" height="20px"><path d="M 11 2 L 11 4 L 21 4 L 21 2 L 11 2 z M 4 6 L 4 8 L 28 8 L 28 6 L 4 6 z M 7.9921875 9.875 L 6.0078125 10.125 C 6.0078125 10.125 7 18.074074 7 27 L 7 28 L 25 28 L 25 27 C 25 18.074074 25.992188 10.125 25.992188 10.125 L 24.007812 9.875 C 24.007812 9.875 23.120303 17.398914 23.042969 26 L 8.9570312 26 C 8.8796974 17.398914 7.9921875 9.875 7.9921875 9.875 z M 12.986328 10.835938 L 11.013672 11.164062 C 11.013672 11.164062 12 17.111111 12 23 L 14 23 C 14 16.888889 12.986328 10.835936 12.986328 10.835938 z M 19.013672 10.835938 C 19.013672 10.835938 18 16.888889 18 23 L 20 23 C 20 17.111111 20.986328 11.164064 20.986328 11.164062 L 19.013672 10.835938 z"/></svg></span>
            </div>
       
              <div class="flex text-xs text-gray-500"> <div class="flex gap-2  pr-3"><span class="bg-${element.choices.color} px-[7px] h-[15px]  rounded-full"></span> <span class=""> ${element.choices.color}</span> </div> 
              <span class="border-r  border-gray-600 h-2 mt-1"></span>
              <div class="ml-2"> <span> size</span> <span>${element.choices.size}</span> </div> </div>
              <div class="flex justify-between">
              <div class="font-semibold mt-2">
              <span>$</span> <span>${element.price}</span>
              </div>
              <div class="bg-silver pt-2 px-3  text-xs  rounded-full ">
              <span class="  mr-2">− </span> <span class=" "> 1</span > <span class=" ml-2 "> +</span>
              </div>
              
              </div> 
              </div>
             
            </div>`
            totalPricee += +element.price
         }
        });
    })
        
        removeFromCart()
        total(totalPricee)
}

export const total =(totalPricee)=>{
 
   const totalPrice1=document.getElementById('totalPrice')

   totalPrice1.innerHTML=`${totalPricee}.00`
totalAmount=totalPricee
  
}

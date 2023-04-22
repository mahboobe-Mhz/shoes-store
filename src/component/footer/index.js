import { svg } from "../../assets/svgs"
import { El } from "../../library/El"
import { Router } from "../../rout"
export const Footer=()=>{
    return El({
        element:"div",
        className:"flex mx-auto gap-9 ",
        child:[
            El({
                element:"span",
                id:"homeIcon",
                className:"",
                href:"/home",
                restAttrs:{"data-navigo":true},
                onclick:()=>{
                    Router().navigate('/home')
                },
                innerHTML:svg.home
            }),
            El({
                element:"span",
                className:"",
                id:"cartIcon",
                // href:"/myCart",
                // restAttrs:{"data-navigo":true},
                onclick:()=>{
                    Router().navigate('/myCart')
                },
                innerHTML:svg.cart
            }),
            El({
                element:"span",
                id:"orderIcon",
                onclick:()=>{
                    Router().navigate('/myOrder')
                },
                className:"",
                innerHTML:svg.order
            }),
            El({
                element:"span",
                id:"walletIcon",
                className:"",
                innerHTML:svg.wallet
            }),
            El({
                element:"span",
               
                className:"",
                innerHTML:svg.profile
            })
        ]
    })
}
export const changeIconToCart=()=>{
    const home =document.getElementById("homeIcon")
    const cart =document.getElementById("cartIcon")
    cart.innerHTML=""
    home.innerHTML=""
    home.innerHTML=`<div class="flex flex-col"><span> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
  </svg></span><span class="text-[10px]" > home </span><div> `
  cart.innerHTML=`<div class="flex flex-col"><span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg></span><span class="text-[10px] pl-[1px]" > Cart </span><div> `

}
export const changeIconToOrder=()=>{
    const home =document.getElementById("homeIcon")
    const order =document.getElementById("orderIcon")
    order.innerHTML=""
    home.innerHTML=""
    home.innerHTML=`<div class="flex flex-col"><span> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
  </svg></span><span class="text-[10px]" > home </span><div> `
  order.innerHTML=`<div class="flex flex-col"><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></span><span class="text-[10px] pt-[1.5px] pl-[1px]" > Order </span><div> `

}
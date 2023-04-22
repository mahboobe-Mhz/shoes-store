import { svg } from "../../assets/svgs"
import { searchBox } from "../../component/home-searchBox"
import { fetchShoes } from "../../instance/fetchShoes"
import { flashBack } from "../../layOut/flashBack"
import { El } from "../../library/El"
import { Router } from "../../rout"

export const wishList=()=>{
    return  El({
        element:"div",
        className:"",
       child:[
        El({
        element:"div",
        className:"flex justify-between mt-2 p-4 text-xl",
        child:[  El({
            element:"div",
            className:" flex gap-2",
            child:[
                El({
                    element:"span",
                    innerHTML:svg.leftArrow,
                    onclick:()=>{
                        
                        Router().navigate("/home")
                    }
                }),
                El({
                    element:"span",
                    className:"font-semibold",
                    child:"My WishLlist"
                }),
            ]
        }),
            
            El({
                element:"span",
                
                onclick:()=>{
                    Router().navigate("/search")
                },
                className:"",
                innerHTML:`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"/></svg>`
            })
        ]
       }),
       El({
        element:"div",
        id:"brandName",
        onclick:(e)=>{
                    
            if (e.target.id=== "All") {
                Router().navigate('/All')
             
            }else{
                Router(e.target.id).navigate(`/${e.target.id}`)
                
            }
          
        },
        className:"  flex gap-3 overflow-auto hover:overflow-scroll px-3 mt-3"
       } ),
       El({
        element:"section",
        className:" flex flex-wrap overflow-auto  gap-3 pl-5 mt-3",
        onclick:(e)=>{
            Router(e.target.parentElement.id).navigate('/stuff')
            getShoesData(e.target.parentElement.id)
            setTimeout(() => {
            
                flashBack("home")
            },100 );
       
           

        },
        id:"wishList"

    }),

        
       ]
    })
    
}
export const  getWishListData =async()=>{
    const locatedUser =JSON.parse(localStorage.getItem(`users`))
   const wishList=document.getElementById("wishList")

    await fetchShoes(`shoes?like=${locatedUser.email}`).then(res=> 
        res.data.forEach(element => {
            wishList.innerHTML+=`<div class="w-40">
            <div id="${element.name}" class="bg-silver rounded-2xl px-2">
            <div class="absolute" >
            <span class =" relative top-2 left-[120px]  "> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
          </span> 
            </div>
             
              <img src="${element.picture}" alt=""/>
                      </div>
            <div class="pl-2 text-sm ">
              <h2 class="font-semibold mt-1 h-6 overflow-hidden">${element.name}</h2>
              <div class=" flex gap-2 text-xs mt-3">
        <div class="flex gap-2  ">
        <div class="flex gap-2  mt-1 ">
        <span class="  "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
        </svg></span>
        <div class=" text-gray-500">
          <span >4.3</span>
        
        </div>
        </div>
        <div class="w-[1px] bg-black h-3 mt-2"></div>
        <div class="flex gap-1  text-xs bg-silver py-1 px-2 rounded-lg "> <span>${res.data[0].sold}</span><span>sold</span> </div>

       </div>
      </div>
      <div class="">
      <span class="font-semibold ">$</span> 
      <span class="font-semibold ">${element.price}</span>
    </div>
    </div>
            </div>`
        })
       
        )
}
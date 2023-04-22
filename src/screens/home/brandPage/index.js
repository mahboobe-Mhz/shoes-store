import { svg } from "../../../assets/svgs";
import { fetchShoes } from "../../../instance/fetchShoes";
import { flashBack } from "../../../layOut/flashBack";
import { El } from "../../../library/El";
import { Router } from "../../../rout";
import { getShoesData } from "../../showShoesData";
export const brandPagee=(brandId)=>{
    return El({
        element:"div",
        className:" px-5 py-3",
        child:[
            El({
                element:"header",
                className:"flex ",
                child:[
                    El({
                        element:"span",
                        className:"",
                        onclick:()=>{
                            Router().navigate('/home')
                        },
                        innerHTML:svg.leftArrow
                    }),
                    El({
                        element:"span",
                        className:"pl-2",
                         child:brandId
                    })
                ]
            }),
            El({
                element:"section",
                id:"brandData",
                className:"mt-3 flex gap-3 flex-wrap overflow-auto ",
                onclick:(e)=>{
                    Router(e.target.parentElement.id).navigate('/stuff')
                  
                    getShoesData(e.target.parentElement.id)
                
                    setTimeout(() => {
                        flashBack("home")
                    }, 100);
                },
               
            })
        ]
    })
}
 export const fetchBrand=(brand="Nike")=>{
    const brandData =document.getElementById("brandData")
    console.log(brandData);
    fetchShoes(`shoes?brand=${brand}`).then(res =>{
   
        res.data.forEach(element => {
            brandData.innerHTML+=`<div id="shoesPic" class="w-40 mb-2">
            <div class="bg-silver rounded-2xl px-2 
            ">
              <img src="${element.picture}" alt=""/>
            </div>
            <div class="pl-2 text-sm  font-semibold">
              <h2 class="font-semibold h-6 overflow-hidden">${element.name}</h2>
              <div class="">
                <span>$</span> 
                <span>${element.sold}</span>
              </div>
            </div>`
            
        });
    })

}

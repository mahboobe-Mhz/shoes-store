import { svg } from "../../../assets/svgs";
import { flashBack } from "../../../layOut/flashBack";
import { El } from "../../../library/El";
import { Router } from "../../../rout";
import { getShoesData } from "../../showShoesData";

;
export const seeAll =()=>{
    return El({
        element:"div",
        className:"",
       child:[
        El({
        element:"div",
        className:"flex gap-1  p-2 text-xl",
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
                child:"Most Popular"
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
                flashBack("see")
            },100 );
       
           

        },
        id:"showShoess"

    }),

        
       ]
    })
}
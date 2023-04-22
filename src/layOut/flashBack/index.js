import { Router } from "../../rout"

export const flashBack =(page)=>{
    const flash =document.getElementById("flash")
    flash.addEventListener("click",()=>{
        Router().navigate(`/${page}`)
    })
}

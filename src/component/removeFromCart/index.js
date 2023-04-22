import patchData3 from "../../instance/patchData3";
import { Router } from "../../rout";
export const removeFromCart =()=>{
 const trash =document.querySelectorAll('.trash')

 trash.forEach(item =>{
    item.addEventListener('click',(e)=>{
        patchData3(e.target.id,"")
        Router().navigate("/myCart")
    
      })
 })

}
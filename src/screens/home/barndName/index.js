import { Login } from "../../login"

const brandObj=[
    "All",
    "Nike",
    "Adidas",
    "Puma",
    "Asics",
    "Reebok",
    "NewBalance" ,
    "Converse",
   
]

export const brandName= ()=>{
    const brandNamee =document.getElementById("brandName")
   brandObj.forEach(element =>{
  brandNamee.innerHTML+= ` <span class="border-2 px-4 py-1 border-gray-700  rounded-3xl " id="${element}">${element} </span>`
   })
 
    
}

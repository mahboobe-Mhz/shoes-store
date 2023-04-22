import { fetchShoes } from "../../../instance/fetchShoes"

 
 export const ShowShoes =(id)=>{
const showShoes =document.getElementById(id)
fetchShoes("shoes").then(res =>{
res.data.forEach(element => {
    showShoes.innerHTML+=`<div class="w-40">
<div id="${element.name}" class="bg-silver rounded-2xl px-2 
">
  <img src="${element.picture}" alt=""/>
</div>
<div class="pl-2 text-sm  font-semibold">
  <h2 class="font-semibold h-6 overflow-hidden">${element.name}</h2>
  <div class="">
    <span>$</span> 
    <span>${element.price}</span>
  </div>
</div>`
});
})

}
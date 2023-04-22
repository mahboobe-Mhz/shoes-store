import { fetchShoes } from "../../instance/fetchShoes"
import { El } from "../../library/El"
import postData from "../../instance/patchData"
import patchData from "../../instance/patchData"
import { addToCart } from "../../component/addToCart"


export const showShoesData=(name)=>{
    return   El({
        element:"div",
        id:"ShoesDataId",
        className:"",
  
    })
}

export const getShoesData= async (name)=>{
    const ShoesDataId =document.getElementById("ShoesDataId")

  
        await fetchShoes(`shoes?name=${name}`).then(res=>{  
     console.log(res.data[0]);
    ShoesDataId.innerHTML=`  <div class="">
<div class="flex bg-silver w-full  ">
  <div class=" p-3" id="flash"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 16.0003C23.9998 16.2655 23.8945 16.5199 23.7069 16.7074C23.5194 16.8949 23.2651 17.0003 22.9998 17.0003H11.4138L15.7078 21.2923C15.8008 21.3853 15.8746 21.4956 15.9249 21.6171C15.9752 21.7386 16.0011 21.8688 16.0011 22.0003C16.0011 22.1318 15.9752 22.262 15.9249 22.3835C15.8746 22.5049 15.8008 22.6153 15.7078 22.7083C15.6149 22.8013 15.5045 22.875 15.383 22.9253C15.2615 22.9757 15.1313 23.0015 14.9998 23.0015C14.8683 23.0015 14.7381 22.9757 14.6167 22.9253C14.4952 22.875 14.3848 22.8013 14.2918 22.7083L8.29183 16.7083C8.19871 16.6154 8.12482 16.505 8.07441 16.3836C8.024 16.2621 7.99805 16.1318 7.99805 16.0003C7.99805 15.8688 8.024 15.7385 8.07441 15.617C8.12482 15.4955 8.19871 15.3852 8.29183 15.2923L14.2918 9.29229C14.4796 9.10451 14.7343 8.99902 14.9998 8.99902C15.2654 8.99902 15.5201 9.10451 15.7078 9.29229C15.8956 9.48006 16.0011 9.73474 16.0011 10.0003C16.0011 10.2658 15.8956 10.5205 15.7078 10.7083L11.4138 15.0003H22.9998C23.2651 15.0003 23.5194 15.1056 23.7069 15.2932C23.8945 15.4807 23.9998 15.7351 23.9998 16.0003Z" fill="black"/>
    </svg></div>
    <div class="bg-silver flex justify-center ">
      <img id="img" style="height: 250px;" width="250px" src="${res.data[0].picture}"></img>
    </div >
</div>

  <div class="p-4">
    <div id="shoesName" class="border-b pb-3">
      <div class="flex justify-between">
        <h1 class="text-2xl font-semibold ">${res.data[0].name}</h1>
        <svg id="stuffHeart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </div>
    
      <div class=" flex gap-2 mt-3">
        <div class="flex gap-1 text-xs bg-silver p-2 rounded-lg h-8"> <span>${res.data[0].sold}</span><span>sold</span> </div>
        <div class="flex gap-2  ">
          <span class="mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
        </svg></span>
        <div class="flex gap-2 text-gray-500">
          <span >4.3</span>
          <p>(<span">${res.data[0].reviews}</span> <span>reviews</span> )</p>
        </div>
       
       </div>
      </div>
    </div>
    <div id="description" class="mt-3">
      <h2 class="font-semibold">Description</h2>
      <p class=" "> <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit<span id="view" class="font-semibold"> view more</span></span><span>...</span>  <span id="more" class=" hidden">Aperiam, expedita nesciunt enim necessitatibus cupiditate, quasi perferendis inventore repellendus ipsa reiciendis dicta alias reprehenderit officia exercitationem eaque omnis.</span> </p>
    </div>
    <div id="sizeCOlor" class="mt-1 flex">
      <div class="flex flex-col ">
         <span class="font-semibold">Size</span>
        <div id="size1" class="mt-4 w-40">
          <span id="${res.data[0].size[0]}" class="size p-2 border-2 border-gray-600 rounded-full mx-1">${res.data[0].size[0]}</span>
          <span id="${res.data[0].size[1]}" class="size  p-2  border-2 border-gray-600 rounded-full mx-1">${res.data[0].size[1]}</span>
          <span id="${res.data[0].size[2]}" class="size  p-2  border-2 border-gray-600 rounded-full mx-1">${res.data[0].size[2]}</span>
        </div>
      </div>
      <div class="flex flex-col ">
        <span class="font-semibold">color</span>
       <div id="color" class=" [&_input]: flex w-[190px]   h-14 overflow-x-scroll">
         <input type="checkbox" id="${res.data[0].color[0]} " class=" focus:ring-transparent    focus:text-gray-900 px-5 py-5 mt-1 bg-${res.data[0].color[0]}  rounded-full mx-1 checked:bg-${res.data[0].color[0]}"> </input>
         <input type="checkbox" id="${res.data[0].color[1]} " class=" focus:ring-transparent    focus:text-gray-900 px-5 py-5 mt-1 bg-${res.data[0].color[1]}  rounded-full mx-1 checked:bg-${res.data[0].color[1]}"> </input>
         <input type="checkbox" id="${res.data[0].color[2]} " class="focus:ring-transparent   px-5 py-5 mt-1 bg-${res.data[0].color[2]} rounded-full mx-1 checked:bg-${res.data[0].color[2]} "></input>
         <input type="checkbox" id="${res.data[0].color[3]} " class="focus:ring-transparent   px-5 py-5 mt-1 bg-${res.data[0].color[3]} rounded-full mx-1 checked:bg-${res.data[0].color[3]} "></input>
         <input type="checkbox" id="${res.data[0].color[4]} " class="focus:ring-transparent  focus:text-gray-900  px-5 py-5 mt-1 bg-${res.data[0].color[4]} rounded-full mx-1 checked:bg-${res.data[0].color[4]} "></input>
       </div>
     </div>
    </div>
    <div id="quantity" class="mt-5 flex gap-5 border-b pb-3">
      <span class="font-semibold mt-2">Quantity</span>
      <span class="bg-silver pb-1 w-28 rounded-full"><span class="text-2xl px-4 ">-</span > <span class="font-semibold" > 2</span> <span class="text-xl px-4">+</span></span>
    </div>
    <div id="totalPrice" class="flex justify-between mt-3">
    <div>
      <span class="text-xs text-gray-400">Total price</span>
      <div class="font-semibold">
        <span>$</span>
        <span>${res.data[0].price}</span>
      </div>
    </div>
    <button id="cardBtn" class="bg-gray-900  px-16  mt-1 rounded-full" >
       <div class=" flex gap-3 text-white text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-bag-fill" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
    </svg><span> Add to Card</span></div>
  </button>
</div>
</div> 



</div>` 
stuffHeart(res.data[0])
addToCart(name,res.data[0].id) 
})

}
export const viewMore=()=>{
    const view =document.getElementById("view")
   
    const more =document.getElementById('more')
    view.addEventListener("click",()=>{
        more.classList.toggle("hidden")
    })
}
export const chooseSize =()=>{
    const sizeDiv= document.getElementById("size1")
    const size =document.getElementsByClassName("size")
   sizeDiv.addEventListener("click",(e)=>{

    size[0].classList.remove("bg-gray-900")
    size[0].classList.remove("text-gray-100")
    size[1].classList.remove("bg-gray-900")
    size[1].classList.remove("text-gray-100")
    size[2].classList.remove("bg-gray-900")
    size[2].classList.remove("text-gray-100")
   
    e.target.classList.toggle("bg-gray-900")
    e.target.classList.toggle("text-gray-100")
   })
}
export const chooesColor =()=>{
    const color =document.getElementById("color")
    const colorinput=document.querySelectorAll("input")

color.addEventListener("change",(e)=>{

    colorinput.forEach(el=>{

        el.checked=false
     })
     e.target.checked=true
 
})
}
export const stuffHeart =(data)=>{
    const stuffHeart =document.getElementById("stuffHeart")
  
    stuffHeart.addEventListener('click',(e)=>{
   
      const locatedUser =JSON.parse(localStorage.getItem(`users`))
console.log(locatedUser.email);
   
    patchData(data.id,locatedUser.email)
      
      
    })

}


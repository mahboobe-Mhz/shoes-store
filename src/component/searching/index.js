import { debounce } from "lodash"
import { svg } from "../../assets/svgs"
import { El } from "../../library/El"
import { fetchShoes } from "../../instance/fetchShoes"
import patchData2 from "../../instance/patchData2"
import postData from "../../instance/postData"
import { Router } from "../../rout"
import { getShoesData } from "../../screens/showShoesData"
import { flashBack } from "../../layOut/flashBack"
export let searchHistory2=[]
let i=1

export const searchingRout=()=>{
   return El({
        element:"form",
        onsubmit:()=>{
            console.log("hi");
        },
        className:'p-3',
        child:[
            El({
                element:"div",
                className:"relative p-1  border-2 border-gray-900 rounded-xl",
                child:[
                    El({
                        element:"div",
                        className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  ",
                        innerHTML:svg.search2
                       
                        }),   El({
                            element:"input",
                             type:"search",
                               id:"searching2",
                                placeholder:"search ...",
                                 className:"border-none bg-gray-100 focus:ring-transparent  focus:outline-none bg-gray-50  text-sm rounded-lg  block w-full pl-10 p-2.5  ",
                                  
                        }), El({
                            element:"div",
                            className:" absolute inset-y-0 right-2 flex items-center pl-3  ",
                           innerHTML:svg.filterIcon
                            })
                    ]
            }), El({
                element:"div",
                className:"border-b-2 pb-3 pt-3 font-medium flex justify-between",
                child:[
                    El({
                        element:"span",
                        className:"font-semibold",
                       
                        id:"recent",
                      
                    }),
                    El({
                        element:"span",
                        className:"",
                        id:"clearAll",
                       
                    })
                ]
            }),
            El({
                element:"div",
                className:"flex flex-wrap overflow-auto   gap-3 pl-2 mt-3",
                id:"searchData",
                onclick:(e)=>{
                  
                    showSearchingData(e.target.id)
            
            },
            }),   El({
                element:"div",
                className:"flex flex-wrap overflow-auto   gap-3 pl-2 mt-3",
                id:"searchInfo",
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

export const searchBox2=()=>{
    const searchingInput= document.getElementById("searching2")
    const showInfoDiv=document.getElementById("searchInfo")
    searchingInput.addEventListener('input',debounce((e)=>{


        saveSearch(e.target.value)
      window.addEventListener('click',()=>{
        searchingInput.value=""
      })

      },1000) )
}

export const showSearchingData =(name)=>{
     const showInfoDiv=document.getElementById("searchInfo")
     const clearAll=document.getElementById("clearAll")
     const recent=document.getElementById("recent")
     const showSearchDiv=document.getElementById("searchData")
     showSearchDiv.innerHTML=""
     showInfoDiv.innerHTML=``
     recent.innerHTML=`Result for "${name}"`
    fetchShoes(`/shoes?name=${name}`).then(res =>{
 
        clearAll.innerHTML=`${res.data.length} found`
        res.data.forEach(element => {
     
            showInfoDiv.innerHTML+=`<div class="w-40">
        <div id="${element.name}" class="bg-silver rounded-2xl px-2 
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
        if(res.data==0){
            console.log("hi");
            showInfoDiv.innerHTML+=`<img  src="photo/not found.jpg"/>`
        }
    })
} 

export const saveSearch =(data)=>{
    const user =JSON.parse(localStorage.getItem("users"))
    const showInfoDiv=document.getElementById("searchInfo")
    showInfoDiv.innerHTML=``
    const showSearchDiv=document.getElementById("searchData")

showSearchDiv.innerHTML=""
searchHistory2.push(data)
searchHistory2.concat(JSON.parse(localStorage.getItem(user.email)));
localStorage.setItem(user.email, JSON.stringify(searchHistory2));
console.log(searchHistory2);
JSON.parse(localStorage.getItem(user.email)).map(data =>{

    showSearchDiv.innerHTML+=`<div class="flex justify-between w-full p-2 text-gray-500" id="${data}">
            <p>${data}</p>
            <span><svg xmlns="http://www.w3.org/2000/svg" class="text-gray-200" height="25" viewBox="0 96 960 960" width="48"><path d="M337 719q9 9 21 9t21-9l101-101 102 102q8.186 8 20.093 8T623 719q9-9 9-21t-9-21L522 576l102-102q8-8.186 8-20.093T623 433q-9-9-21-9t-21 9L480 534 378 432q-8.186-8-20.093-8T337 433q-9 9-9 21t9 21l101 101-102 102q-8 8.186-8 20.093T337 719ZM140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24.75 0 42.375 18T880 316v520q0 24-17.625 42T820 896H140Zm0-60V316v520Zm0 0h680V316H140v520Z"/></svg></span>
            </div>`

})

    
    
}
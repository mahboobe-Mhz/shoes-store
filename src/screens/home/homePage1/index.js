import { svg } from "../../../assets/svgs"
import { addToCart } from "../../../component/addToCart"
import { Footer } from "../../../component/footer"
import { searchBox } from "../../../component/home-searchBox"
import { flashBack } from "../../../layOut/flashBack"
import { El } from "../../../library/El"
import { Router } from "../../../rout"
import { getShoesData } from "../../showShoesData"
import { wishList } from "../../wishList"

export const HomePage1=()=>{
    return El({
        element:"div",
        className:"",
        child:[
            El({
                element:"header",
                className:"",
                child:[
                    El({
                        element:"div",
                        id:"userInfo",
                        className:"flex justify-between py-2 ",
                        child:[ El({
                            element:"div",
                            className:" px-3 flex gap-3 ",
                            child:[
                                El({
                                    element:"img",
                                    className:" rounded-full h-10 ",
                                     src:"photo/480px-Woman_1.jpg"
                                }), El({
                                    element:"div",
                                    className:"",
                                    child:[
                                        El({
                                            element:"p",
                                            className:"text-gray-500 text-xs",
                                            child:"Good Morning 👋"
                                        }),  El({
                                            element:"p",
                                            className:"font-bold text-xs" ,
                                            child:"mahbo0be MHZ"
                                        })
                                    ]
                                }), 
                            ]
                        }),
                        El({
                            element:"div",
                            className:"flex gap-2 py-2 px-5 ",
                            child:[
                                El({
                                    element:"span",
                                    className:"",
                                    innerHTML:svg.bell
                                }),
                                El({
                                    element:"span",
                                    className:"",
                                    innerHTML:svg.heart,
                                    onclick:()=>{
                                        Router().navigate('/wishList')
                                    }
                                })
                            ]
                        })]
                    }),
                    El({
                        element:"div",
                        id:"searchBox",
                        className:"px-3",
                        onclick:()=>{
                            Router().navigate("/search")
                        },
                        child:searchBox()
                    }),
                    El({
                        element:"div",
                        id:"brandIcon",
                        className:"flex mt-6 pl-5 pr-3 gap-8 w-[375px] flex-wrap",
                        onclick:(e)=>{
                         
                                Router(e.target.id).navigate(`/${e.target.id}`)
                        },
                        
                    })
                   
                ]
            }),
            El({
                element:"nav",
                id:"nav",
                onclick:(e)=>{
                    if (e.target.id=== "All") {
                        Router().navigate('/All')
                    }else{
                        Router(e.target.id).navigate(`/${e.target.id}`)
                    }
                   
         
                },
                className:" mt-5",
                child:[
                    El({
                        element:"div",
                        className:"flex justify-between px-4 font-semibold text-xl",
                        child:[
                            El({
                                element:"p",
                                className:"text-sm ",
                                child:"Most Popular"
                            }), El({
                                element:"a",
                                className:"text-sm ",
                               href:"/All",
                                restAttrs:{"data-navigo":true},
                               
                                child:"See All"
                            })
                        ]
                    }),
                    El({
                        element:"div",
                        id:"brandName",
                        className:"  flex gap-3 overflow-auto hover:overflow-scroll px-3 mt-3"
                    })
                ]
            }),
            El({
                element:"section",
                className:" flex flex-wrap overflow-auto  gap-3 pl-5 mt-3",
                onclick:(e)=>{
                    Router(e.target.parentElement.id).navigate('/stuff')
                    getShoesData(e.target.parentElement.id)
                  
                  
                    setTimeout(() => {
                        flashBack("home")
                    }, 100);
                },
                id:"showShoes"

            }),
            El({
                element:'footer',
                className:"fixed top-[620px]  bg-good w-full pl-9 py-1",
                child:Footer()
            })
        ]
    })
   
}
export const brandChoiceFunc =(id="All")=>{
const brandChoice =document.getElementById(id)
brandChoice.classList.add("bg-gray-600")
brandChoice.classList.add("text-slate-100")

}

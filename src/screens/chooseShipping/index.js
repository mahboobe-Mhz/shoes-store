import { svg } from "../../assets/svgs"
import { Button } from "../../component/button"
import { El } from "../../library/El"
import { Router } from "../../rout"
export let shippingPrice=0

export const chooseShipping =()=>{
    return El({
        element:"div",
        className:"bg-gray-100  h-[667px]",
        child:[
            El({
                element:"div",
                id:"address",
                className:"p-4 pt-7",
                child:[
                    El({
                        element:"header",
                        className:"flex gap-2",
                       
                        child:[ El({
                            element:"span",
                            className:"",
                            onclick:()=>{
                                Router().navigate('/checkOut')
                            },
                            innerHTML:svg.leftArrow
                        }), El({
                            element:"h1",
                            className:"font-semibold text-lg pb-5",
                            child:"Choose Shipping"
                        })]
                    }),
                    El({
                        element:"section",
                        className:"flex flex-col gap-3",
                        child:[
                             El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3  p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"bg-silver h-14  pt-[16px] px-4 rounded-full ",
                                    innerHTML:svg.boxIcon2
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"div",
                                        className:"font-medium  ",
                                        child:[El({
                                            element:"div",
                                            className:"",
                                            child:[El({
                                                element:"span",
                                                className:"font-semibold",
                                                child:"Economy"
                                            })
                                        ]
                                        }),]
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"Estimated Arrival Dec 20-23"
                                    })]
                                }),El({
                                    element:"div",
                                    className:"font-semibold ml-4 mt-4 ",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),  El({
                                            element:"span",
                                            className:"",
                                            child:"10"
                                        })
                                    ]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full  mt-5 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),
                       
                         El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3  p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"bg-silver h-14  pt-[15px] px-4 rounded-full ",
                                    innerHTML:svg.boxIcon
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"span",
                                        className:"font-semibold",
                                        child:"Regular"
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"Estimated Arrival Dec 20-22"
                                    })]
                                }),El({
                                    element:"div",
                                    className:"font-semibold ml-4 mt-4 ",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),  El({
                                            element:"span",
                                            className:"",
                                            child:"15"
                                        })
                                    ]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full  mt-5 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),
                        El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3  p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"bg-silver h-14  pt-[15px] px-4 rounded-full ",
                                    innerHTML:svg.truck
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"span",
                                        className:"font-semibold",
                                        child:"Cargo"
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"Estimated Arrival Dec 20-22"
                                    })]
                                }),El({
                                    element:"div",
                                    className:"font-semibold ml-4 mt-4 ",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),  El({
                                            element:"span",
                                            className:"",
                                            child:"20"
                                        })
                                    ]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full  mt-5 focus:ring-transparent  border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),
                        El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3  p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"bg-silver h-14  pt-[15px] px-4 rounded-full ",
                                    innerHTML:svg.fastShipped
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"span",
                                        className:"font-semibold",
                                        child:"Express"
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"Estimated Arrival Dec 20-22"
                                    })]
                                }),El({
                                    element:"div",
                                    className:"font-semibold ml-4 mt-4 ",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),  El({
                                            element:"span",
                                            className:"",
                                            child:"30"
                                        })
                                    ]
                                })
                               , El({
                                    element:"input",
                                    className:"p-1 rounded-full  mt-5 focus:ring-transparent  border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        })
                    ]
                    }),
                  
                    
                   
                ]
            }),
            El({
                element:"footer",
                onclick:()=>{
               
                    Router().navigate('/checkOut')
                },
                className:"fixed top-[570px] p-4 border-t-2 w-full rounded-full",
                child:Button({variant:"black",child:"Apply" ,classes:"py-3 w-[350px]"})
            })
        ]
    })
    
}
export const chooseAddresss =()=>{
    const address=document.getElementById("address")
    console.log(address);

    const addressInput=document.querySelectorAll("input")
    console.log(addressInput);

    address.addEventListener("change",(e)=>{

        addressInput.forEach(el=>{

        el.checked=false
     })
     e.target.checked=true
     const span =e.target.parentElement.querySelectorAll('span')
     shippingPrice=span[4].innerHTML
     
})
}

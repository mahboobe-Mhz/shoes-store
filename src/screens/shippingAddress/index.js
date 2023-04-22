import { svg } from "../../assets/svgs"
import { Button } from "../../component/button"
import { El } from "../../library/El"
import { Router } from "../../rout"
import { changeAddressData } from "../checkout"
export const dataa=["Home","61480 sunbrook Park, PC 5679"]
export const ShippingAddress =()=>{
    return El({
        element:"div",
        className:"bg-gray-100 h-[667px]",
        child:[
            El({
                element:"div",
                id:"address",
                className:"p-4",
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
                            className:"",
                            child:"Shipping Address"
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
                                    className:"bg-silver h-14  pt-[12px] px-3 rounded-full ",
                                    innerHTML:svg.locationIcon
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
                                                child:"Home"
                                            }),El({
                                                element:"span",
                                                className:"text-xs bg-gray-200 px-3 py-1 rounded-md ml-2",
                                                child:"Default"
                                            })
                                        ]
                                        }),]
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"61480 sunbrook Park, PC 5679"
                                    })]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-9 mt-5 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
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
                                    className:"bg-silver h-14  pt-[12px] px-3 rounded-full ",
                                    innerHTML:svg.locationIcon
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"span",
                                        className:"font-semibold",
                                        child:"Office"
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"61480 sunbrook Park, PC 5679"
                                    })]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-9 mt-5 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
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
                                    className:"bg-silver h-14  pt-[12px] px-3 rounded-full ",
                                    innerHTML:svg.locationIcon
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"span",
                                        className:"font-semibold",
                                        child:"Apartment"
                                    }),El({
                                        element:"span",
                                        className:"text-gray-500 text-xs ",
                                        child:"61480 sunbrook Park, PC 5679"
                                    })]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-9 mt-5 focus:ring-transparent  border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        })
                    ]
                    }),
                    El({
                        element:"div",
                        className:"mt-5",
                    
                        child:Button({variant:"gray", child:"Add New Address", classes:"w-full py-3"})
                    })
                    
                   
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
export const chooseAddress =()=>{
    const address=document.getElementById("address")


    const addressInput=document.querySelectorAll("input")


    address.addEventListener("change",(e)=>{

        addressInput.forEach(el=>{

        el.checked=false
     })
     e.target.checked=true
     const span =e.target.parentElement.querySelectorAll("span")
     if(dataa){
        dataa.shift()
        dataa.shift()
     }
     dataa.push(span[1].innerHTML)
     dataa.push( span[2].innerHTML)
    


})
}

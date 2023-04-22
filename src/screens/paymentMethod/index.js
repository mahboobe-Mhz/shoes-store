import { svg } from "../../assets/svgs"
import { Button } from "../../component/button"
import { El } from "../../library/El"
import { Router } from "../../rout"

export const paymentMethod =()=>{
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
                        className:"flex gap-2 pt-3 pb-6",
                       
                        child:[ El({
                            element:"span",
                            className:"",
                            innerHTML:svg.leftArrow
                        }), El({
                            element:"h1",
                            className:"text-lg font-semibold",
                            child:"Payment Method"
                        }),El({
                            element:"span",
                            className:"ml-28",
                            innerHTML:svg.plus
                        })
                    ]
                    }),El({
                            element:"p",
                            className:"pb-6 text-gray-600 ",
                            child:"Select the payment method you want to use"
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
                                    className:"w-10 ",
                                    innerHTML:svg.wallet
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"div",
                                        className:"font-medium  ",
                                        child:[El({
                                            element:"div",
                                            className:"mt-2",
                                            child:[El({
                                                element:"span",
                                                className:"font-semibold ",
                                                child:"My Wallet"
                                            }),
                                        ]
                                        }),]
                                    }),]
                                }),
                                El({
                                    element:"div",
                                    className:"mt-2 ml-20 ",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }), El({
                                            element:"span",
                                            className:"",
                                            id:"payment",
                                            child:"9.379"
                                            
                                        })
                                    ]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full  mt-3 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
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
                                    className:"w-10",
                                    innerHTML:svg.payPal
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"div",
                                        className:"font-medium  ",
                                        child:[El({
                                            element:"div",
                                            className:"mt-2",
                                            child:[El({
                                                element:"span",
                                                className:"font-semibold",
                                                child:"PayPal"
                                            }),
                                        ]
                                        }),]
                                    }),]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-[172px] mt-3 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),
                        El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3  pb-5 p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"w-7 mt-1 ",
                                    innerHTML:svg.googleIcon
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"div",
                                        className:"font-medium  ",
                                        child:[El({
                                            element:"div",
                                            className:" mt-2",
                                            child:[El({
                                                element:"span",
                                                className:"font-semibold",
                                                child:"Google Pay"
                                            }),
                                        ]
                                        }),]
                                    }),]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-[150px] mt-3 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),  El({
                            element:"div",
                            className:"bg-good rounded-2xl flex gap-3 pb-5 p-3",
                            child:
                            [
                                El({
                                    element:"span",
                                    className:"mt-1 ",
                                    innerHTML:svg.apple
                                }),
                                El({
                                    element:"div",
                                    className:" gap-2  flex flex-col",
                                    child:[El({
                                        element:"div",
                                        className:"font-medium  ",
                                        child:[El({
                                            element:"div",
                                            className:"mt-1",
                                            child:[El({
                                                element:"span",
                                                className:"font-semibold",
                                                child:"Apple Pay"
                                            }),
                                        ]
                                        }),]
                                    }),]
                                }),
                                El({
                                    element:"input",
                                    className:"p-1 rounded-full ml-[160px] mt-3 focus:ring-transparent   border-2 border-gray-900   focus:text-gray-900 checked:text-gray-900",
                                    type:"checkbox"
                                    
                             
                                })
                            ]
                        }),
                    ]
                    }),
                 
                    
                   
                ]
            }),
            El({
                element:"footer",
                className:"fixed top-[570px] p-4 w-full border-t-2 rounded-full",
                onclick:()=>{
                    Router().navigate('/paySuccess')
                },
                child:Button({variant:"black",child:"Confirm Payment" ,classes:"py-3 w-[350px]"})
            })
        ]
    })
    
}
export const chooseAddress =()=>{
    const address=document.getElementById("address")
    console.log(address);

    const addressInput=document.querySelectorAll("input")
    console.log(addressInput);

    address.addEventListener("change",(e)=>{

        addressInput.forEach(el=>{

        el.checked=false
     })
     e.target.checked=true
 
})
}
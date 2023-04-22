import { svg } from "../../assets/svgs"
import { Button } from "../../component/button"
import { fetchShoes } from "../../instance/fetchShoes"
import { El } from "../../library/El"
import { Router } from "../../rout"
import { totalAmount } from "../cart"
import { shippingPrice } from "../chooseShipping"
import { chooseAddress, dataa } from "../shippingAddress"

export const checkOut =()=>{
    return El({
        element:"div",
        className:"bg-silver ",
        child:[ El({
            element:"div",
            className:"p-4",
            child:[
                El({
                    element:"header",
                    className:"flex justify-between pb-4",
                    child:[
                        El({
                            element:"div",
                            className:"flex gap-2",
                            child:[
                                El({
                                    element:"span",
                                    className:"",
                                    onclick:()=>{
                                        Router().navigate('/myCart')
                                    },
                                    innerHTML:svg.leftArrow
                                }),  El({
                                    element:"h1",
                                    className:"font-semibold text-lg",
                                    child:"Checkout"
                                })
                            ]
                        }),  El({
                            element:"span",
                            className:"border-2 border-gray-900 h-[21px] px-[1px] py-[1px] rounded-full ",
                            innerHTML:svg.viewMoreIcon
                        })
                    ]
                }),
                El({
                    element:"div",
                    className:"flex border-b pb-4 flex-col",
                    child:[El({
                        element:"h2",
                        className:"font-semibold pb-4",
                        child:"Sipping Address"
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
                                    className:"font-medium",
                                    id:"addressTop",
                                    child:"Home"
                                }),El({
                                    element:"span",
                                    id:"addressButton",
                                    className:"text-gray-500 text-xs ",
                                    child:"61480 sunbrook Park, PC 5679"
                                })]
                            }),
                            El({
                                element:"span",
                                className:"mt-6 ml-10",
                                onclick:()=>{
                                    Router().navigate('/shippingAddress')
                                },
                                innerHTML:svg.editIcon
                            })
                        ]
                    })]
                }),
                El({
                    element:"div",
                    className:"pb-3 border-b",
                    child:[
                        El({
                            element:"h2",
                            className:"font-semibold text-lg",
                            child:"Order List"
                        }),El({
                            element:"section",
                            className:"flex flex-col",
                            id:'OrderList'
                        })
                    ]
                }), 
                 El({
                    element:"section",
                    className:"pb-3 border-b",
                    child:[
                        El({
                            element:"h2",
                            className:"font-semibold text-lg pt-2 pb-2",
                            child:"Choose Shipping"
                        }),El({
                            element:"div",
                            className:"bg-good flex rounded-2xl p-3",
                            onclick:()=>{
                                Router().navigate('/chooseShipping')
                            },
                            child:[El({
                                element:"span",
                                className:"",
                                innerHTML:svg.truck
                            }),El({
                                element:"span",
                                className:"ml-3 font-semibold",
                                child:"choose Shipping Type"
                            }),El({
                                element:"span",
                                className:"ml-[87px] mt-1",
                                innerHTML:svg.rightIcon
                            })]
                        })
                    ]
                }), 
                 El({
                    element:"section",
                    className:"mb-5",
                    child:[
                        El({
                            element:"h2",
                            className:"font-semibold text-lg mt-2 mb-2 ",
                            child:"Promo Code"
                        }),
                        El({
                            element:"div",
                            className:"flex gap-3",
                            child:[
                                El({
                                    element:"input",
                                    type:"text ",
                                    className:"placeholder-gray-400 bg-gray-200 w-full pl-5  rounded-2xl",
                                    placeholder:"Enter Promo Code"
                                   
                                }),El({
                                    element:"span",
                                    className:" bg-gray-900 text-gray-100 px-4 py-2  text-xl rounded-full",
                                    child:"+"
                                })
                            ]
                        })
                    ]
                }), 
                 El({
                    element:"section",
                    className:"bg-good rounded-2xl text-gray-500 p-4 flex flex-col gap-3",
                    child:[
                        El({
                            element:"div",
                            className:"flex justify-between ",
                            child:[
                                El({
                                    element:"span",
                                    className:"",
                                    child:"Amount"
                                }),
                                El({
                                    element:"span",
                                    className:"",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),El({
                                            element:"span",
                                            className:"",
                                            id:"Amount",
                                            child:"585.00"
                                        })
                                    ]
                                })
                            ]
                        }),
                        El({
                            element:"div",
                            className:" pb-3 border-b flex justify-between",
                            child:[El({
                                element:"span",
                                className:"",
                                child:"Shipping"
                            }),
                            El({
                                element:"span",
                                className:"",
                                child:[
                                    El({
                                        element:"span",
                                        className:"",
                                        child:"$"
                                    }),El({
                                        element:"span",
                                        className:"",
                                        id:"Shipping",
                                      
                                    })
                                ]
                            })
                        ]
                        }),El({
                            element:"div",
                            className:" flex justify-between",
                            child:[
                                El({
                                    element:"span",
                                    className:"",
                                    child:"Total"
                                }),
                                El({
                                    element:"span",
                                    className:"",
                                    child:[
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"$"
                                        }),El({
                                            element:"span",
                                            className:"",
                                            id:"total",
                                          
                                        })
                                    ]
                                })
                            ]
                        })
    
                    ]
                }),
            ]
        }),
         El({
            element:"div",
            className:"",
            child:  El({
                element:"footer",
                onclick:()=>{
                    Router().navigate('/paymentMethod')
                },
                className:" border-2 border-t p-3 rounded-2xl",
                child:Button({variant:"black", child:"Continue to Payment  ->  " ,classes:"font-medium text-xs py-4"})
            })
            
        })

         
          
        ]
    })
   
}
export const OrderList=async()=>{ 
  
    const OrderListDiv=document.getElementById('OrderList')
    await fetchShoes("shoes").then(res=>{
        res.data.forEach(element => {
         if(element.choices){
          
            OrderListDiv.innerHTML+=`<div class="bg-good mb-2  w-full h-32 rounded-2xl flex p-4">
            <div id="${element.name}" class=" rounded-2xl px-2 
            ">
              <img src="${element.picture}" class="w-28 h-24 bg-silver rounded-xl" alt=""/>
            </div>
            <div class="pl-2 flex flex-col gap-2">
            <div class="flex justify-between w-48">
            <h2 class="font-semibold  overflow-hidden">${element.name}</h2>
            
            </div>
       
              <div class="flex text-xs text-gray-500"> <div class="flex gap-2  pr-3"><span class="bg-${element.choices.color} px-[7px] h-[15px]  rounded-full"></span> <span class=""> ${element.choices.color}</span> </div> 
              <span class="border-r  border-gray-600 h-2 mt-1"></span>
              <div class="ml-2"> <span> size</span> <span>${element.choices.size}</span> </div> </div>
              <div class="flex justify-between">
              <div class="font-semibold mt-2">
              <span>$</span> <span>${element.price}</span>
              </div>
              <div class="bg-silver pt-2 px-3  text-xs  rounded-full ">
             <span class=" "> 1</span > 
              </div>
              
              </div> 
              </div>
             
            </div>`
       
         }
        });
    })
}

export const changeAddressData=()=>{
    const addressTop=document.getElementById('addressTop')
    const addressButton=document.getElementById('addressButton')
    
        if(dataa[0]==="Home"){   
        addressTop.innerHTML=`${dataa[0]}`  
        addressButton.innerHTML="61480 sunbrook Park, PC 5679"
    }else{
        addressTop.innerHTML=`${dataa[0]}`
        addressButton.innerHTML=`${dataa[1]}`
    } 
  
 
}
export const changeShippingPrice =()=>{
   const Shipping=document.getElementById('Shipping')
   Shipping.innerHTML=`${shippingPrice}`
}
export const ChangAmount=()=>{
const amount =document.getElementById('Amount')
const total=document.getElementById('total')
amount.innerHTML=`${totalAmount}`
total.innerHTML=`${+totalAmount+ +shippingPrice}`
}
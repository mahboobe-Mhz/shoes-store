import { Button } from "../../component/button"
import { El } from "../../library/El"
import { Router } from "../../rout"

export const paySuccess=()=>{
    return El({
        element:"div",
        className:"",
        child:[
            El({
                element:"img",
                className:"",
               src:'photo/59_Light_checkout successful.jpg'
            }),
            El({
                element:"div",
                className:"absolute top-[446px] left-[60px]",
                child:[
                    El({
                        element:"div",
                        className:"mb-2",
                        onclick:()=>{
                            Router().navigate('/myOrder')
                        },
                        child:Button({variant:"black",child:"View Order", classes:" w-[250px] pt-4 pb-4"})
                    }),  El({
                        element:"div",
                        className:"",
                        child:Button({variant:"gray",child:"View E-Receipt",classes:" w-[250px] pt-4 pb-4"})
                    })
                ]
            })
        ]
    })
}
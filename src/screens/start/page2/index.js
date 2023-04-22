import { El } from "../../../library/El";
import { Router } from "../../../rout";
export const page2=()=>{
    return El({
        element:"div",
        className:"",
        onclick:()=>{
            Router().navigate('/aboutUs')
        },
        child:[
            El({
                element:"img",
              
                className:"w-full h-screen  ",
                src:"photo/onboarding page 2.png"
            }),
           
           
        ]
    })
}
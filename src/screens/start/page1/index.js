import { El } from "../../../library/El";
import { Router } from "../../../rout";
export const page1=()=>{
    setTimeout(() => {
       Router().navigate('/welcome')    }, 1000);
    return El({
        element:"div",
        className:"  ",
        child:[
            El({
                element:"div",
                className:"flex items-center justify-center flex-col h-screen",
                child:El({
                    element:"img",
                    className:"",
                    src:"photo/Group 2.png"
                })
            }),
            El({
                element:"img",
                className:"h-11 absolute top-[550px]  left-[155px]",
                src:"photo/Rolling-1.5s-200px.gif"
                

            })
         
        ]
    })
}


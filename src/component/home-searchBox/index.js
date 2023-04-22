import { svg } from "../../assets/svgs";
import { El } from "../../library/El";
export const searchBox =()=>{
    return  El({
            element:"div",
            className:"relative  mt-4  focus:outline-none focus:border-none outline-none border-none",
            child:[
                El({
                    element:"div",
                    className:"absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none ",
                    innerHTML:svg.search
                    }),
                     El({ element:"input",
                    type:"search",
                     name:"search",
                      id:"search",
                       className:"border-none focus:ring-transparent focus:outline-none  text-sm rounded-lg  block w-full pl-10 p-2.5  ",
                        placeholder:"",
                         required:""})
                ]
                })
  
}

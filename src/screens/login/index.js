import { svg } from "../../assets/svgs";
import { Button } from "../../component/button";
import { fetchShoes } from "../../instance/fetchShoes";
import { El } from "../../library/El";
import { Router } from "../../rout";
 export const Login =()=>{
    return El({
                element:"div",
                className:" ",
                child:[El({
                    element:"div",
                    className:"flex flex-col  items-center justify-center p-5 mt-5",
                    child:[ El({
                        element:"span",
                        className:"absolute top-3 left-4",
                        innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 20 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>`
                    }),
                        El({
                        element:"img",
                        className:"",
                        src:"photo/logo.png"
                    }),
                        El({
                            element:"h1",
                            className:"text-center mb-10 mt-20 text-3xl font-medium",
                            child:"Login to Your Account"
                        }),
                        El({
                            element:"form",
                            id:"form",
                            onsubmit:(e)=>{
                                e.preventDefault()
                                rememberMe()
                                singIn()

                            },
                            className:"w-full flex flex-col gap-10",
                        
                            child:[
                                El({
                                element:"div",
                                className:"relative group",
                                child:[
                                    El({
                                        element:"div",
                                        className:"absolute focus:outline-none inset-y-0 left-0 flex items-center pl-3 pointer-events-none ",
                                        innerHTML:` <svg aria-hidden="true" class=" w-5 h-5 group-hover:text-gray-900  text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`
                                        }), El({ element:"input",
                                        type:"email",
                                         name:"email",
                                          id:"email",
                                           className:"border-none bg-gray-100 focus:outline-none bg-gray-50  text-sm rounded-lg  block w-full pl-10 p-2.5  ",
                                            placeholder:"Email",
                                             required:""})
                                    ]
                                    }),
                                    El({
                                        element:"div",
                                        className:"relative group",
                                        child:[
                                            El({
                                                element:"div",
                                                className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  ",
                                                innerHTML:` <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900  " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                              </svg>`
                                                }),   El({
                                                    element:"input",
                                                     type:"password",
                                                      name:"password",
                                                       id:"password",
                                                         autocomplete:"new-password",
                                                        placeholder:"••••••••",
                                                         className:"border-none bg-gray-100 focus:outline-none bg-gray-50  text-sm rounded-lg  block w-full pl-10 p-2.5  ",
                                                          required:""
                                                }), El({
                                                    element:"div",
                                                    id:"Eye",
                                                    onclick:()=>{
                                                        showPass()
                                                    },
                                                    className:" absolute inset-y-0 right-2 flex items-center pl-3  ",
                                                    innerHTML:svg.eye1
                                                    })
                                            ]
                                            }), El({
                                                element:"div",
                                                className:"flex items-center justify-between mt-10  ",
                                                child:El({
                                                    element:"div",
                                                    className:"flex items-start ",
                                                    child:[
                                                    El({
                                                        element:"div",
                                                        className:"flex items-center px-3 mt-1",
                                                        child:El({
                                                            element:"input",
                                                            id:"remember",
                                                             ariaDescribedby:"remember",
                                                              type:"checkbox" ,   
                                                        })
                                                    }),
                                                    El({
                                                        element:"div",
                                                        className:"",
                                                        child:El({
                                                          
                                                            element:"label",
                                                            for:"remember", 
                                                            child:"Remember me"
                                                        })
            
            
                                                    })]
                                                })
            
                                            }),
                                            El({
                                                element:"div",
                                                className:"mt-14 w-full",
                                                
                                                child:Button({variant :"black",child:"sing in",type:"submit", })
                                            })

                                ]
                            })
                              ,
                             
                               
                            ]
                        })
                    ]
                })
                
            }     
            


export const rememberMe=()=>{
const form =document.getElementById('form')

const user={
    email:form.email.value,
    password:form.password.value,
    searching:[]
}
if(form.remember.checked){ 
    localStorage.setItem(`users`,JSON.stringify(user))
}
}
export const showPass=()=>{
    const eye =document.getElementById("Eye")
    const password =document.getElementById("password")
 const type =password.getAttribute("type")
 if(type ==="password"){
    password.setAttribute("type","text")
    eye.innerHTML=svg.eye2
 } else{
    password.setAttribute("type","password")
    eye.innerHTML=svg.eye1

 }
}
const singIn =()=>{
    const email = document.getElementById("email")
    fetchShoes("customer").then(res =>{
        if(email.value === res.data[0].Email){
        Router().navigate('/home')
    }})

    
}
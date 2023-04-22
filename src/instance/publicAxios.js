import axios from "axios";
const publicAxios =axios.create({
    baseURL:"http://localhost:3000"
})
publicAxios.interceptors.request.use((config) => {
    
    return config
}, (error) => {
    
})


publicAxios.interceptors.response.use((response)=>{
    

    return response
} , (error)=>{

  
})
export default publicAxios
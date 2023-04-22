import axios from "axios"
 async function patchData(id,data){

    try {
      await axios.patch(`http://localhost:3000/shoes/${id}`,         
   {"like":data }                           
    
          
        );
    
      } catch (error) {
        console.error(error.response);     
      }
   
    
}
export default patchData

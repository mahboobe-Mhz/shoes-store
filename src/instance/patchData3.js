import axios from "axios"
 async function patchData3(id,data){

    try {
      await axios.patch(`http://localhost:3000/shoes/${id}`,         
   {"choices":data }                           
    
          
        );
    
      } catch (error) {
        console.error(error.response);     
      }
   
    
}
export default patchData3

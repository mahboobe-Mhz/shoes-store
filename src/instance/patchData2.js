import axios from "axios"
 async function patchData2(id,search){

    try {
      await axios.patch(`http://localhost:3000/customer/${id}`,         
   {historySearch:search }                           
    
          
        );
    
      } catch (error) {
        console.error(error.response);     
      }
   
    
}
export default patchData2
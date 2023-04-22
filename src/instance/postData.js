import axios from "axios"
 async function postData(email){

    try {
      await axios.post(`http://localhost:3000/customer`,         
   email                        
    
          
        );
    
      } catch (error) {
        console.error(error.response);     
      }
   
    
}
export default postData
import react from "react";
import Http from "./Http";
function Addmodal(props){
  console.log(props.id);
  const submitData = async () => {
    try {
      const response = await http.post("/submitdata", formdata, {
        params: {
           id:props.id,
            
        }
    });


      
    } catch (error) {
        console.error('Error:', error);
       
    }
};
  
 
  return(


    <>
    
    
    
    </>
   
   






  );


}
export default Addmodal;
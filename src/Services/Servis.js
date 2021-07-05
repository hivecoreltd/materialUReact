import axios from 'axios';


export const getRepo = async() => {
    try{
        let res=await axios.get('https://jsonplaceholder.typicode.com/posts')


        if(res)
        
       {  return res.data;}

        else{
            throw new Error("Request failed")
        }
    }

    catch(error){
        let message={
            message:error.message
        }
        return message;
    }
  

  };
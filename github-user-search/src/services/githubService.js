import axios from "axios"

export const fetchUserDatat =async (username)=>{
try{
    const res =await axios.get(`https://api.github.com/users/${username}`);
    return res.data
}catch(error){
    throw new Error ("User not found")
}
}
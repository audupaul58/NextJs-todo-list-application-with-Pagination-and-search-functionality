import axios from "axios";

const baseUrl = " http://localhost:3005/todos"

export const getItem = async()=>{
    const res = await axios.get(baseUrl)
    return res.data
}
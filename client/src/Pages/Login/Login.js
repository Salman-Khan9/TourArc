import React, { useState } from 'react'
import axios from "axios"
const Login = () => {
    const initialstate = {
        email:"",
        password:"",
    }
    const [Formdata, setFormdata] = useState(initialstate)
    const {email,password} = Formdata
    const handleonchange = async(e)=>{
         try {
            const {name,value} = e.target
            setFormdata({...Formdata , [name]:value})
         } catch (error) {
            console.log(error)
         }
    }
    const handleonsubmit = async(e)=>{
        try {
           const res = await axios.post("http://localhost:5000/login",Formdata)
              console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        Login


    </div>
  )
}

export default Login
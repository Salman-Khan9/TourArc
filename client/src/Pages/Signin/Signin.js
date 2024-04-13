import React, { useState } from 'react'
import axios from "axios"
const Signin = () => {
    const initialstate = {
        name:"",
        email:"",
        password:"",
    }
    const [Formdata, setFormdata] = useState(initialstate)
    const {name,email,password}=Formdata
    const handleonchange = async(e)=>{
        
            const {name,value} = e.target
        setFormdata({...Formdata, [name]:value})
        
    }
    const handleonsubmit = async(e)=>{
        try {
            e.preventDefault()
            const res = await axios.post("http://localhost:5000/signup",Formdata)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>Signin</div>
  )
}

export default Signin
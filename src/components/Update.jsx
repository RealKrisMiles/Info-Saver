import React,{useState,useEffect} from 'react'
import { Form, json, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const [form, setForm] = useState({name:"",email:"",age:""})
  const [error, setError] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()
  const getSingleUser =async()=>{
  
    const response = await fetch(`http://localhost:3000/${id}`)
    const result = await response.json()
    if(!response.ok){
      console.log(result.error)
      setError(result.error)
    }
    if(response.ok){
    setError("")
    console.log(result)
    setForm(result)
    }
  }
  useEffect(() => {
  getSingleUser()
  }, [])

  const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = async () => {
    try {
       await fetch(`http://localhost:3000/${id}`,{method:"DELETE"})
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

  
      const result = await response.json();
  
      if (!response.ok) {
        console.error("Error:", result.error);
        // Handle the error (display to user or log)
      } else {
        console.log("Success:", result);
        navigate(`/all`)
        // Handle success (redirect, clear form, or display success message)
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle network or other fetch errors
    }
  };


  return (
    <div className="flex flex-col px-4 sm:px-8 lg:px-16">
    {error && (
      <div className="flex justify-center mx-auto mt-4 py-3 px-6 bg-red-400 text-white font-semibold rounded-lg shadow-md w-full sm:w-3/5 lg:w-1/2">
        {error}
      </div>
    )}
    
    <div className="flex justify-center items-center my-6 font-extrabold text-[#4A4947] text-2xl sm:text-3xl">
      Edit the details here
    </div>
    
    <div className="flex flex-col gap-6 items-center text-[#4A4947] font-medium">
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Name:</span>
        <input
          onChange={handleChange}
          className="w-full border border-black rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          type="text"
          value={form.name}
          name="name"
        />
      </label>
  
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Email:</span>
        <input
          className="w-full border border-black rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          value={form.email}
          type="email"
          name="email"
        />
      </label>
  
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Age:</span>
        <input
          value={form.age}
          className="w-full border border-black rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          type="text"
          name="age"
        />
      </label>
    </div>
    
    <div className="flex justify-center mt-8">
      <button
        onClick={handleSubmit}
        className="bg-[#D8D2C2] px-4 py-2 rounded-full text-[#4A4947] font-semibold shadow-md hover:bg-[#4A4947] hover:text-[#D8D2C2] transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </div>
  </div>
  )
}

export default Update
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [form, setForm] = useState({name:"",email:"",age:""})
    const [formArray, setFormArray] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }
   
    const saveInfo = async(e)=> {
        e.preventDefault()
        if(form.name.length>2 && form.email.length>3 &&form.age.length>1){
            toast(`Wow so easy !`)
                const response = await fetch("http://localhost:3000/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form), // Include form data here
                });
                const result = await response.json()
                if (!response.ok) {   
                    setError(result.error)
                    console.log(result.error)
                }
                
                if (response.ok) {
                   console.log(result)
                    setForm({ name: "", email: "", age: "" });
                    setError("")
                    navigate("/all")
                }
               

        }
    }
  return (
    <div className="flex flex-col px-4 sm:px-8 lg:px-16">
    {error && (
      <div className="flex justify-center mt-4 py-3 px-6 bg-red-400 text-white font-semibold rounded-lg shadow-md w-full sm:w-3/5 lg:w-1/2">
        {error}
      </div>
    )}
    <div className="flex justify-center items-center my-6 text-2xl sm:text-3xl font-bold text-[#4A4947]">
      Enter all the details here
    </div>
    <div className="flex flex-col gap-6 items-center text-[#4A4947] font-medium">
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Name:</span>
        <input
          className="w-full border border-gray-400 rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          type="text"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
      </label>
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Email:</span>
        <input
          className="w-full border border-gray-400 rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          type="email"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
      </label>
      <label className="w-full sm:w-3/5 lg:w-1/2">
        <span className="block mb-1 text-lg">Age:</span>
        <input
          className="w-full border border-gray-400 rounded-full p-2 focus:outline-none focus:border-[#4A4947]"
          type="text"
          onChange={handleChange}
          value={form.age}
          name="age"
        />
      </label>
    </div>
    <div className="flex justify-center mt-8">
      <button
        onClick={saveInfo}
        className="bg-[#D8D2C2] px-4 py-2 rounded-full text-[#4A4947] font-semibold shadow-md hover:bg-[#4A4947] hover:text-[#D8D2C2] transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </div>
  </div>
  )
}

export default Create
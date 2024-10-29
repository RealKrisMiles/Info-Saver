import React, { useState } from 'react'

const Create = () => {
    const [form, setForm] = useState({name:"",email:"",age:""})
    const [formArray, setFormArray] = useState([])


    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }
    const saveInfo = async(e)=> {
        e.preventDefault()
        if(form.name.length>2 && form.email.length>3 &&form.age.length>1){
            try {
                const response = await fetch("http://localhost:3000/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form), // Include form data here
                });
                if (response.ok) {
                    // Reset form after successful submission
                    setForm({ name: "", email: "", age: "" });
                } else {
                    console.error("Failed to save data", response.statusText);
                }
            } catch (error) {
                console.error("An error occurred while saving data", error);
            }

        }
    }
  return (
    <div className='flex flex-col'>
        <div className='flex min-w-full justify-center items-center my-5 font-extrabold text-[#4A4947] text-3xl'>Enter all the details here</div>
        <div className=' flex  text-[#4A4947] font-medium flex-col gap-5 items-center'>
            <h2>Name: <input className='border rounded-full border-black' type="text" onChange={handleChange} value={form.name} name="name" id="" /></h2>
            <h2>Email: <input className='border rounded-full border-black'  onChange={handleChange} value={form.email} type="email" name="email" id="" /></h2>
            <h2>Age: <input value={form.age} className='border rounded-full border-black'  onChange={handleChange} type="text" name="age" id="" /></h2>
        </div>
        <div className='flex justify-center mt-7'>
            <button onClick={saveInfo} className='bg-[#D8D2C2] p-1 px-2 rounded-full text-[#4A4947] hover:text-[#D8D2C2] hover:bg-[#4A4947]'>Submit</button>
        </div>
    </div>
  )
}

export default Create
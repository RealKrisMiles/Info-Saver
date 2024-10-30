import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
  const [infoArray, setInfoArray] = useState([])
  const [error, setError] = useState("")


  async function getData() {
    const response = await fetch("http://localhost:3000")
    const result = await response.json()

    if(!response.ok){
      console.log(result.error)
      setError(result.error)
    }
    if(response.ok){
      setInfoArray(result)
    }
    
  }
  useEffect(() => {
    getData()
  }, [])

  const handleEdit=()=>{
    
  }
  const handleDelete = async(id)=>{
    const response = await fetch(`http://localhost:3000/${id}`,{method:"DELETE"})
    const result = await response.json()
    if(!response.ok){
      console.log(result.error)
      setError(result.error)
    }
    if(response.ok){
      setError(`Deleted succesfully ${id}`)
      setTimeout(() => {
        getData();
        setError("")
        
      }, 2000);
    }
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16">
  {error && (
    <div className="flex justify-center mx-auto mt-4 py-3 px-6 bg-red-400 text-white font-semibold rounded-lg shadow-md w-full sm:w-3/5 lg:w-1/2">
      {error}
    </div>
  )}
  
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    {infoArray.map((item, index) => (
      <div 
        key={index} 
        className="bg-[#D8D2C2] rounded-xl text-[#0b0a09] text-lg p-6 m-5 w-72 shadow-lg flex flex-col items-center gap-4"
      >
        <div className="font-semibold text-2xl">{item.name}</div>
        <div className="text-lg">{item.email}</div>
        <div className="text-lg">{item.age}</div>
        
        <div className="flex gap-4 mt-4">
          <Link to={`/${item._id}`}>
            <button 
              onClick={handleEdit} 
              className="bg-[#FAF7F0] px-3 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-[#6a6761] hover:text-white transition ease-in-out duration-200"
            >
              Edit
            </button>
          </Link>
          <button 
            onClick={() => handleDelete(item._id)} 
            className="bg-[#FAF7F0] px-3 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-[#6a6761] hover:text-white transition ease-in-out duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Read
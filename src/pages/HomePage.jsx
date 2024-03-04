import { useState } from "react";
import blogData from "../data/blog.json";
const HomePage = () => {
  //  const [tip,setTip] = useState(1)
  //     return (
  //       <div className="m-10 bg-white p-5 rounded flex justify-between">
  //         <h1 className='font-semibold text-xl'>Add a tip!</h1>
  //           <div>
  //             <span className='text-xl pe-10 font-semibold'>{tip}</span>
  //             <button className='px-4 py-2 bg-blue-400 hover:bg-blue-500 font-semibold text-white rounded' onClick={()=>setTip(tip+1)}>Add tip!</button>
  //           </div>
  //       </div>
  //     )
  const [name,setName] = useState("")
  const handleName = (name) =>{
    return name.length >= 4 ? setName(name) : '';
  }
  return (
    <div className="m-10 bg-white p-5 rounded flex justify-between">
      <h1 className="font-semibold text-xl">Welcome, {name || 'Guest'}</h1>
      <div>
        <input 
        type="text" 
        id="name"
        className="px-4 py-2 bg-gray-100 text-gray-800 outline-none border border-gray-400 rounded"
         placeholder="Enter your name" 
         autoFocus
         onChange={(e)=>handleName(e.target.value)}
         />
      </div>
    </div>
  );
};

export default HomePage;

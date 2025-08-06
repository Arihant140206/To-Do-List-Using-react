"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask,setMainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()//page refresh hone se prevent karta hai
   setMainTask([...mainTask , {title,desc}])
    settitle("")//store karta hai values of title and description
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]//delete button kaam karta hai
    copytask.splice(i,1)//remove (delete) karta hai from the main array of works , array me store karke map par function lagate hai react me 
    setMainTask(copytask)

  }

  let renderTask = <h2>No Task Available</h2>

 if(mainTask.length>0){//render task fuction matlab koi kaam nahi hua , but agar humne koi task daala toh if statement chal jaayega and render(change)ho jaayega 
   renderTask = mainTask.map((t,i) =>{//tasks map(array) ke form me store hoga 
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-xl font-medium'>{t.desc}</h6>
      </div>
      <button  onClick={()=>{//delete button , same array copy karke phir uspe splice karta hai , hamare liye wo dikhta nahi par dusr array me jaake sgore ho jaatahai.
        deleteHandler(i)
      }}
      className='bg-red-400 text-white px-4 py-2 mb-5 rounded-2xl'>Delete</button>
      </li>
     
    )})}
  return (
    <>
    <body className='bg-amber-700'>
    <h1 className='bg-black text-amber-600 p-5 text-5xl *:font-bold
    text-center'
    >My todo list
    </h1>
    <form onSubmit={submitHandler}>

    
      <input type="text"
      className='text-2xl border-zinc-800 border-4 m-3 px-4 py-2 bg-amber-600' placeholder='Enter Title Here' value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
        

      }}></input>
       <input type="text"
      className='text-2xl border-zinc-800 border-4 m-3 px-4 py-2 bg-amber-600' placeholder='Enter Description  Here'value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }

      }></input>
      <button className='bg-blue-200 text-amber-600 px-4 py-3 text-2xl font-bold rounded m-5 '>Add Task</button>
    </form>
   <hr/>
   <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>

   </div>
</body>
    </>
  )
}

export default page

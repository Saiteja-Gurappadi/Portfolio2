import React from 'react'

const Projects = () => {
  return (
    <div className='h-[100%] bg-gradient-to-tr from-black via-slate-900 to-black text-white p-[30px] flex flex-col items-center gap-[60px]'>
        <h1 className='text-4xl '>My Projects</h1>
        <div className='grid grid-cols-2 gap-[10px]'>
        <div className='bg-gray-500 h-[400px] w-[300px]'>
            <h1>H1</h1>
        </div>
        <div className='bg-gray-500 h-[400px]  w-[300px]'>
            <h1>H1</h1>
        </div>
        <div className='bg-gray-500 h-[400px]  w-[300px]'>
            <h1>H1</h1>
        </div>


        </div>
    </div>
  )
}

export default Projects
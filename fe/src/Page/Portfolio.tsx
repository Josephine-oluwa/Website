import React from 'react'

export const Portfolio = () => {
  return (
   <div className='w-full h-[100vh] flex justify-center items-center '>
   <div className='w-[80%] flex justify-center items-center flex-col '>
   <div className='text-[40px] font-bold'>MY PORTFOLIO</div>
   <div className='w-full h-[150px]  flex justify-center items-center'>
    <div className='w-[40%] font-medium text-[15px] h-full flex justify-between items-center'>
        <nav>ALL</nav>
        <nav>WEB APPS</nav>
        <nav>UI/UX DESIGNS</nav>
        <nav>GRAPHIC DESIGNS</nav>
        
    </div>
   </div>
   
   <div className='w-[80%] min-h-[50vh] flex flex-wrap justify-between'>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] '></div>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] '></div>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] '></div>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] mt-5'></div>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] mt-5'></div>
    <div className='w-[350px] h-[220px] bg-pink-300 rounded-[10px] mt-5 '></div>
   
   </div>
   </div>
   </div>
  )
}

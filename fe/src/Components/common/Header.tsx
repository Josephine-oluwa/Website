import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { TbBrandBlogger } from "react-icons/tb";
import { IoHomeSharp } from "react-icons/io5";
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { dark, light } from '../../States/Global';
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

const Header = () => {

  const dispatch = useDispatch()
  const toggle = useSelector((state:any) => state.toggle)
  const main = useSelector((state:any) => state.mode)

  const [mode, setMode] = useState<boolean>(false);
  const onMode = () => {
    setMode(!mode);
  };


  return (
    <div className=''>
      <div className={`w-[100%] h-[100vh] ${
      !main ? "bg-black text-white" : "bg-white text-black "
    }   ` }>


     <div className='flex   w-full justify-center items-center  '
     onClick={() => {
      onMode();
     }}
     >
      {main ? (
         <   MdOutlineNightlight className=' mt-5 rounded-full  text-[50px] px-3 py-3 bg-slate-300 hover:cursor-pointer hover:scale-[1.2] duration-[450ms] transition-all'
         onClick={() => {
          dispatch(dark());
         }}
         />
      ) : (
        <MdLightMode className=' mt-5 rounded-full   text-[50px]  px-3 py-3 bg-slate-700 hover:cursor-pointer hover:scale-[1.2] duration-[450ms] transition-all' 
        onClick={() => {
          dispatch(light());
         }}
        />
      )}
    
     
 
    
     </div>
    <div className='h-[80%] w-full flex justify-center items-center '>
    <div className='w-[60%] h-[50%] flex justify-between items-center flex-col font-bold text-[20px]  '>
<button className='px-4 py-4 rounded-full bg-[#ff7e20]
'>      <IoHomeSharp /></button>
      <IoPersonOutline />
      <FaGift />
      <TiContacts />
      <TbBrandBlogger />

      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Header
import { FaMap } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
        <div className="w-[80%]  ">
            <center className="text-[40px] font-bold">GET IN TOUCH</center>
 <div className="flex w-full h-full ">
 <div className="w-[40%] h-[500px] bg-pink-300 flex flex-col">
    <span>DON'T BE SHY</span>
    <span>Feel free to get in touch with me. <br/> I am always open to 
        discussing new projects, creative ideas <br/>
        or opportunities to be part of your visions.</span>
     
   <div className="h-[40%] flex justify-between flex-col mt-5">
   <div className="flex ">
       
       <div className="text-[40px] "><FaMap /></div>
    <div className="flex-col ml-5">
    <div className="text-gray-700">ADDRESS POINT</div>
           <div>Lagos, Nigeria</div>
    </div>
   
       </div>
    
       <div className="flex ">
      
       <div className="text-[40px] "><FaMap /></div>
    <div className="flex-col ml-5">
    <div className="text-gray-700">ADDRESS POINT</div>
           <div>Lagos, Nigeria</div>
    </div>
   
       </div>
       <div className="flex ">
      
       <div className="text-[40px] "><FaMap /></div>
    <div className="flex-col ml-5">
    <div className="text-gray-700">ADDRESS POINT</div>
           <div>Lagos, Nigeria</div>
    </div>
   
       </div>
      
   </div>
 <div className="flex h-[40px] w-[40%] justify-between mt-8">
 <button className="px-3 py-3 bg-slate-500 rounded-full "><FaLinkedin /></button>
   <button className="px-3 py-3 bg-slate-500 rounded-full "><FaLinkedin /></button>
   <button className="px-3 py-3 bg-slate-500 rounded-full "><FaLinkedin /></button>
   <button className="px-3 py-3 bg-slate-500 rounded-full "><FaLinkedin /></button>
   <button className="px-3 py-3 bg-slate-500 rounded-full "><FaLinkedin /></button>
 </div>
 </div>
    <div className="w-[60%]  h-[500px] bg-yellow-300 flex justify-center items-center flex-wrap ">
        <div className="flex h-full justify-between items-center flex-wrap">
        <div className="w-[400px] h-[50px] rounded-[40px] border border-black"></div>
        <div className="w-[400px] h-[50px] rounded-[40px] border border-black"></div>
        <div className="w-[100%] h-[50px] rounded-[40px] border border-black"></div>
        </div>
    </div>
 </div>
        </div>
    </div>
  ) 
}

export default Contact
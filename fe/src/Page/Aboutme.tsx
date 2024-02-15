import { useSelector } from "react-redux";
import { Slide } from "react-awesome-reveal";
import { TfiGift } from "react-icons/tfi";







const Aboutme = () => {

  const mode = useSelector((state: any) => state.mode);
  return (
    <div className='w-full min-h-[120vh] flex justify-center items-center flex-col'>
  <div className='w-[70%]  flex justify-center items-center flex-col'>
  <div className='text-[50px] font-bold '>ABOUT ME</div>
  <div className='w-full flex'>
  <div className='w-1/2  h-[500px] flex justify-center items-center'>
<div className='w-[80%]  h-[400px] flex justify-between flex-col'>
  
<span className='text-[30px] font-semibold '>PERSONAL INFOS</span>
    <div className='w-full flex justify-between text-[17px] '>
      <span className='text-slate-400'>FIRST NAME: <span className='text-black'>Josephine</span> </span>
      <span className='text-slate-400'>LAST NAME: <span className='text-black'>Oluwafemi</span> </span>
    
    </div>
    <div className='w-full flex justify-between text-[17px] '>
      <span className='text-slate-400'>FIRST NAME: <span className='text-black'>Josephine</span> </span>
      <span className='text-slate-400'>LAST NAME: <span className='text-black'>Oluwafemi</span> </span>
    
    </div>
    <div className='w-full flex justify-between text-[17px] '>
      <span className='text-slate-400'>FIRST NAME: <span className='text-black'>Josephine</span> </span>
      <span className='text-slate-400'>LAST NAME: <span className='text-black'>Oluwafemi</span> </span>
    
    </div>
    <div className='w-full flex justify-between text-[17px] '>
      <span className='text-slate-400'>FIRST NAME: <span className='text-black'>Josephine</span> </span>
      <span className='text-slate-400'>LAST NAME: <span className='text-black'>Oluwafemi</span> </span>
    
    </div>

    <button className="w-[240px] h-[60px]  border-[#ff7e20] border rounded rounded-[40px] bg-white flex justify-center  relative items-center"> DOWNLOAD CV
       <div className="w-[50px] h-full rounded-[40px] bg-[#ff7e20] font-bold absolute m-2 ">   </div>
           </button>
</div>

  </div>




      <div className='w-1/2  h-[500px] flex  justify-center  items-center'>
      <div className='w-[90%] flex justify-between  flex-wrap'>
      <div className='w-[250px] h-[150px]  rounder border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(78, 84, 95, 0.02),0px_0px_0px_1px_rgba(86, 95, 109, 0.08)]'></div>
      <div className='w-[250px] h-[150px]  rounder border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(78, 84, 95, 0.02),0px_0px_0px_1px_rgba(86, 95, 109, 0.08)]'></div>
      <div className='w-[250px] h-[150px] mt-10 rounder border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(78, 84, 95, 0.02),0px_0px_0px_1px_rgba(86, 95, 109, 0.08)]'></div>
      <div className='w-[250px] h-[150px] mt-10 rounder border shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(78, 84, 95, 0.02),0px_0px_0px_1px_rgba(86, 95, 109, 0.08)]'></div>
      </div>
      </div>
  </div>








  <div
      id="skills"
      className={`${
        !mode ? "bg-black text-white" : "bg-white text-black"
      } min-h-[60vh] w-[80%] flex justify-center  text-white flex-col`}
    >
      <div className="w-full flex items-center flex-col">
        <div
          className={`mt-[67px] font-[Buba] text-4xl max-md:text-2xl ${
            !mode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Skills
        </div>
        <div className="w-full flex flex-col items-center h-auto">
          <div className="flex justify-between items-center max-md:flex-col w-[90%] mt-5">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className=" text-[orange] text-[16px]">
                HTMl/CSS
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[89%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    89%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">React</div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[95%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    95%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                JavaScript
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[80%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    80%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                TypeScript
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Tailwindcss
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[99%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    99%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Api Consumption
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[95%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    95%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Frontend Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[99%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    99%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Backend Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[76%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    75%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                State Management
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Mobile Development
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[60%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    60%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-[90%] ">
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                ExpressJS
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[90%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    90%
                  </div>
                </Slide>
              </div>
            </div>
            <div className=" w-[45%] max-md:w-[95%]  flex flex-col items-center max-md:items-start my-3 rounded-md">
              <div className="font-[Buba] text-[orange] text-[16px]">
                Code Utilization
              </div>
              <div
                className={` overflow-hidden h-[30px] max-md:h-[25px] rounded-md ${
                  mode ? "bg-black" : "bg-white"
                } w-full`}
              >
                <Slide triggerOnce={true} delay={1000}>
                  <div className="  h-[30px] max-md:h-[25px] w-[80%] bg-[orange] rounded-tl-md rounded-bl-md flex items-center justify-center">
                    80%
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>


   
    </div>



    <div className="w-full min-h-[70vh] mt-10  flex-col flex justify-center items-center">
    <center className="mt-10 font-bold text-[30px]">EXPERIENCE AND EDUCATION</center>
  <div className="flex justify-between w-full">
  <div className="w-1/2 h-[500px] "> 
  <div className="w-full h-[130px] flex justify-between ">





 <div className="" >
 <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur <br/>
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>

  
  <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur <br/>
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>




  <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur <br/>
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>
 </div>



  </div>
  </div>






    <div className="w-1/2 h-[500px] "> 
    <div className="" >
 <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur 
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>

  
  <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur 
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>



  
  <div className="flex mt-10">
<div className="flex flex-col ">
<div className="w-[50px] h-[50px] flex justify-center  items-center rounded-full bg-pink-200 text-[20px]"><TfiGift />
</div>


</div>
<div className="flex-wrap ml-5 ">
  <div>2018 - PRESENT</div>
  <div className="text-[20px]">SOFTWARE DEVELOPER - CODELAB </div>
  <div>Lorem ipsum dolor sit amet, consectetur 
    tempor incididunt ut labore adipisicing elit</div>
</div>
  </div>
 </div>


    </div>
  </div>
    </div>



<div className="w-full min-h-[100vh]  flex-col flex items-center"> <br/>
<div className=" font-bold text-[30px]">SUMMARY</div>
<div className="w-full h-full flex mt-10">
<img className="w-1/2 h-[500px]" src=""/>
<div className="w-1/2  text-[20px] ">

<br/>
 You can call me Josephine or Taiwo <br/>
 I currently work at CodeLab as a software Engineer where i build web Applications. I have personally and collectively built more than 10 different web Applications. <br/>
 I am currently building a project monitoring Application. 
<br/>
<br/>
I have 2 degrees in Computer Science. One is a National certificate From Lagos State university of Education and the other is a Bachelors degree from Lagos State University.
 <br/>
<br/>
 In tech, I love Networking a lot and I am also a huge fan of great Application experiences driven by AI.
 At a tech event, you'd find me asking a lot of questions about Tech from people or trying to play a game (and possibly failing at it).

 <br/>
 <br/>
Asides from engineering, I’m involved in other commendable activities in the tech ecosystem,  where I’m constantly sharing opportunities, giving mentorship, or volunteering.

<br/>
<br/>
With over 10+ speaking engagements, I spend my time helping people 
get started in tech, build early tech careers.

I do this by hosting 1:1 sessions, masterclasses, and I also 
 dedicate my time to posting contents on social media
</div>
</div>
</div>


   
  </div>







    </div>
  )
}

export default Aboutme

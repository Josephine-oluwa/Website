// import mine2 from "../assets/mine2.jpg"
import mine from "../assets/mine.png"
import Typewriter from 'typewriter-effect'
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";


const Hero = () => {
  const mode = useSelector((state: any) => state.mode);

  const mainVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    // <div className='w-[100%] h-[100vh] bg-black '> 
    <div className={`w-[100%] h-[100vh] bg-black ${
      mode ? "text-black bg-white" : "text-white bg-black"
    } `}> 







    <div className="w-[20%] h-full bg-[#ffb400] absolute    ">     </div>

<div className="w-[100%] h-[100vh] flex   justify-center items-center sm:hidden lg:flex md:flex "> 
  


      
<div className={`w-[90%] rounded-[20px] h-[90%] relative bg-black shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex justify-between 
 ${
  mode ? "text-black bg-white" : "text-white bg-black"}

`}> 
    <img className='h-full rounded-[20px]  w-[35%] object-cover bg-black' />
    <div className="w-[60%]  h-full  flex justify-center items-center ">
      <div className="h-[50%] w-full  flex justify-center items-center ">
   <div className="h-full w-[80%] justify-between flex flex-col ">





   <motion.div
                variants={mainVariant}
                initial="hidden"
                animate="show"
                className="text-5xl max-md:text-4xl pt-14 font-black max-sm:text-center w-[630px] max-md:w-full"
              >
            
                <span className="font-bold text-[50px] text-[#ff7e20] animate-slidein300 ">I'M JOSEPHINE OLUWAFEMI.</span>
              </motion.div>

   
    <div className='text-[50px] font-bold  flex  '> 
      
        <span className='static '> I am a  <br/> </span>
        <span className="ml-2 static"> </span>

        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter: any) => {
            typewriter
              .typeString("Believer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Software Engineer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Designer...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Technical Writter...")
              .pauseFor(1500)
              .deleteAll()
              .typeString("AI/Web3 Enthusiast...")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
         </div>
         <br/>
        <div className="text-[18px] ">I'm a Tunisian based web designer & front‑end developer focused on crafting <br/>
        clean & user‑friendly experiences, 
          I am passionate about building excellent
          <br/> software that improves the lives of those around me.</div>
       
<br/>
          <button className="w-[240px] h-[60px]  border-[#ff7e20] border rounded rounded-[40px] bg-white flex justify-center  relative items-center"> MORE ABOUT ME
       <div className="w-[50px] h-full rounded-[40px] bg-[#ff7e20] font-bold absolute m-2">   </div>
           </button>
   </div>
     
      </div>







    </div>
    </div>
</div>



<div className="w-[100%] h-[100vh] flex justify-center items-center sm:flex md:hidden lg:hidden">
  <div className={`w-full sm:w-[90%] md:w-[90%] lg:w-[50%] rounded-[20px] h-[90%] relative bg-black shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex flex-col justify-between ${mode ? "text-black bg-white" : "text-white bg-black"}`}>
    <img className='h-[35%] sm:h-full rounded-[20px] object-cover bg-black' />
    <div className="w-full h-[65%] sm:h-full flex flex-col justify-center items-center">
      <div className="h-[43%] w-full flex justify-center items-center">
        <div className="h-full w-full sm:w-[80%] justify-between flex flex-col">
          <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="show"
            className="text-5xl max-md:text-4xl pt-14 font-black max-sm:text-center w-[630px] max-md:w-full"
          >
            <span className="font-bold text-[50px] text-[#ff7e20] animate-slidein300">I'M JOSEPHINE OLUWAFEMI.</span>
          </motion.div>

          <div className='text-[50px] font-bold flex'>
            {/* <span className='static '> I am a <br/> </span> */}
            <span className="ml-2 static"> </span>
            {/* Rest of your Typewriter component */}
          </div>
          <br/>
          <div className="text-[18px] ">I'm a Tunisian based web designer & front‑end developer focused on crafting <br/>
            clean & user‑friendly experiences,
            I am passionate about building excellent
            <br/> software that improves the lives of those around me.</div>
          <br/>
          <button className="w-full sm:w-[240px] h-[60px] border-[#ff7e20] border rounded rounded-[40px] bg-white flex justify-center relative items-center">
            MORE ABOUT ME
            <div className="w-[50px] h-full rounded-[40px] bg-[#ff7e20] font-bold absolute m-2"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



{/* 
<div className="bg-pink-400 sm:flex">

</div>
   */}
  
    {/* <GrFormNextLink /> */}
    </div>

  )
}

export default Hero
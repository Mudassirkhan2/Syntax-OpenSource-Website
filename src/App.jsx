import About from './components/Pages/About'
import { motion, transform } from 'framer-motion'
import Project from './components/Pages/Project'
import Home from './components/Pages/Home'
import Marquee from './components/Marquee/Marquee'
import { useEffect } from 'react'
import Contactus from './components/Pages/Contactus'
import Projectandabout from './components/Project/Projectandabout'
import Contributors from './components/Pages/Contributors'
import Contactusdiv from './components/Pages/Contactusdiv'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import homePlanet from './assets/images/homeplanet.png'
import earth from './assets/images/earth.png'
import moon from './assets/images/moon.svg'
import NavBar from './components/Navbar/NavBar'
import { useState } from 'react'
import earthclear from './assets/images/earthclear.png'
function App() {
  //for responsiveness
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener("resize", watchWidth);
  }, [windowWidth]);
  
  // const isLargeDevice = windowWidth > 768; // Adjust the breakpoint as per your needs
  // note 0 to 0.20 is the range of scrollYProgress for first two pages
  // 0.65 contributers page
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  // scale animation for moon
  const scale = useTransform(
    scrollYProgress,
    [0.1,0.12,0.15, 0.20,0.25,0.30,0.35,0.40,0.45,0.50,0.55],
    [1,2, 5.2, 8,8,8,4,4,4,2,2]
  );

  

  // animate x for moon
  const x = useTransform(
    scrollYProgress,
    [0.1,   0.12,    0.15,    0.20,    0.25,   0.30,   0.35,   0.40,  0.45,  0.50],
    ["0vw", "-55vw", "-70vw", "-85vw","-75vw","-70vw","-50vw","-30vw","-30vw","0vw"]
  );
//  transition for moon
  const transition = useTransform(
    scrollYProgress,
    [0.1,   0.12,    0.15,    0.20,    0.25,   0.30,   0.35,   0.40,  0.45,  0.50],
    ["0.5s", "0.5s", "0.5s", "0.5s","0.5s","0.5s","0.5s","0.5s","0.5s","0.5s"]
  );
  // animate y for moon
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80],
    ["0vh", "80vh", "110vh", "160vh","240vh","230vh","370vh","480vh","490vh","500vh","540vh","480vh","540vh","640vh","640vh","640vh"] 
  );
  const xHomeplanet = useTransform(
    scrollYProgress,
    [0, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.37,0.40,0.45,0.50,0.55],
    ["0vw", "-1vw", "-2.5vw", "-4vw","-4vw","-4vw" ,"-4vw","-30vw","-50vw", "-50vw", "-50vw","-4vw"]
  );
  // animation for homeplanet
  const yHomeplanet = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30,0.35,0.40,0.45,0.50,0.55],
    ["0vh", "-10vh", "-50vh", "-40vh","50vh","40vh","130vh","150vh", "150vh","250vh", "330vh" ]
  );
  // rotate animation for homeplanet
  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.40, ,0.45,0.50,0.55],
    ["0deg", "90deg", "100deg", "180deg","350deg","360deg" ,"450deg","490deg", "490deg", "560deg","490deg", "720deg" ]
  );
  // smooth transition for homeplanet
  const transitionHomeplanet = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.40, 0.45,0.50,0.55],
    ["0.5s", "0.5s", "0.5s", "0.5s","0.5s","0.5s" ,"0.5s","0.5s", "1s", "1s", "1s"]
  );
    

  // y animation for earth
  const yEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20 ,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80],
    ["0vh", "10vh", "30vh", "120vh","150vh","220vh","270vh","300vh","370vh","420vh","500vh","450vh","630vh","630vh","700vh","700vh" ]
  );
  // x animation for earth
  const xEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30,0.35,0.40 ,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80],
    ["0vw", "55vw", "70vw", "85vw","-4vw","-4vw","-4vw","-4vw","-4vw","-4vw","-4vw","-4vw","10vw","0vw","-4vw","-4vw"]
  );
  // scale animation for earth
  const scaleEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20 ,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80],
    [1, 1, 1, 1,1,1,1,1,1,1,1,2,6,6,3,1]
  );
  // transition animation for earth
  const transitionEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20 ,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80],
    ["0.5s", "0.5s", "0.5s","0.5s","0.5s","0.5s","0.5s","0.5s","0.5s", "0.5s", "0.5s","0.5s","0.5s","0.5s","0.5s","0.5s"]

  );

  return (
    <div className='text-white ' ref={targetRef}>
      <NavBar windowWidth={windowWidth}  ref={targetRef}/>
      <Home />
     {
      windowWidth > 768  ? 
      <>
        <motion.img src="https://i.ibb.co/bXc0zxY/homeplanet.png"  alt="homeplanet"  className='absolute -bottom-1/3 lg:-bottom-[90%] lg:w-2/3  -z-10 lg:left-[20%]'
         style={{rotate,
          y:yHomeplanet,
          x:xHomeplanet,
          transition:transitionHomeplanet,
        }}
        />
        <motion.img src="https://i.ibb.co/QQjhF4n/earthclear.png" alt="earth" width='100px'  
        className='absolute left-14 top-1/2 -z-10' style={{
          y:yEarth,
          x:xEarth,
          scale:scaleEarth,
          transition:transitionEarth,
        }}
        />
        <motion.img src={moon} alt="moon"  className='absolute right-10 lg:right-16 top-1/2 -z-10' style={{scale,x,y,transition,
        }}/>
      </>
        : 
        <>
         <img src="https://i.ibb.co/bXc0zxY/homeplanet.png"  alt="homeplanet"  className='absolute -bottom-1/4 w-full left-1/2 -translate-x-1/2 lg:-bottom-[90%]  lg:w-2/3 -z-10 lg:left-[20%]'/>
        <img src="https://i.ibb.co/QQjhF4n/earthclear.png" alt="earth"  className='absolute w-20 animate-floatingrotation left-14 top-[55%] -z-10' />
        <img src={moon} alt="moon"  className='absolute right-10 lg:right-16 top-[20%] animate-floatingrotation -z-10' />
        </>
     }
      <Projectandabout />
      <div >

        <Project />
        <About />
        <Contributors windowWidth={windowWidth} />
        <Contactusdiv/>
        <Contactus/>
      </div>
      <Marquee />
      
    </div>
  )
}

export default App

import BGIMGROTATE from '../assets/bg-img-rotate.jpg'
import IMGROTATE from '../assets/loop.png'
function About(props) {


  return (
    <>
        <div id="about" className="relative top-16 pt-24 pb-24 md:pl-20 md:pr-20 pl-3 pr-3 bg-slate-50 dark:bg-gray-700 dark:text-white text-gray-950">
          <div className="flex gap-4 md-custom:flex-row flex-col md:justify-around items-center">
            <div className={`md-custom:w-[50%] w-full mt-0 md-custom:mt-20`}>
              <div className=" relative">
                <img className="rounded-br-[40%_40%] rounded-bl-[20px_20px] rounded-tl-[20px_20px] rounded-tr-[20px_20px] " src={BGIMGROTATE} alt="bg-img-rotate"/>
              <div className="bg-slate-50 dark:bg-cyan-600 sm:w-32 sm:h-32 md:w-52 md:h-52 md-custom:w-32 w-20 md-custom:h-32 h-20 rounded-[50%] absolute right-0 bottom-0 border-2 border-gray-950 dark:border-slate-50">
                <img className="animate-rotate" src={IMGROTATE} alt="rotate" />
              </div>
              </div>
            </div>
            <div className="md-custom:w-[50%] w-full">
              <h1 className="text-3xl font-bold leading-tight tracking-tight Primary-color uppercase">About Me</h1>
              <p className="mt-4 text-2xl font-bold md:text-justify text-start">{props.AboutHeading}</p>
              <p className="mt-4 text-lg md:text-justify text-start">
                {props.AboutData}
              </p>
            </div>
          </div>
          <div id="skill" className="flex gap-2 md-custom:flex-row flex-col md:justify-around items-center">
          <h1 className="sm:text-4xl text-4xl font-bold Primary-color flex justify-center items-center mt-4">
            TECH STACK<span className="text-5xl ml-5 hidden md-custom:block">|</span>
          </h1>
          <div className="flex justify-center items-center gap-5 sm:pt-10 pt-4">
            <div className="flex justify-center items-center gap-2 cursor-pointer sm:p-0 p-3 hover:translate-y-[-10px] duration-200">
              <img className="rounded-md"
              src={props.TechStackImg1}
              alt={props.TechStackImg1Alt}
              />
              <img className="rounded-md" 
              src={props.TechStackImg2}
              alt={props.TechStackImg2Alt}
              />
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer sm:p-0 hover:translate-y-[-10px] duration-200">
              <img
                className="rounded-md"
                src={props.TechStackImg3}
                alt={props.TechStackImg3Alt}
              />
              <img
                className="rounded-md"
                src={props.TechStackImg4}
                alt={props.TechStackImg4Alt}
              />
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer sm:p-0 p-3 hover:translate-y-[-10px] duration-200">
              <img
                className="rounded-md"
                src={props.TechStackImg5}
                alt={props.TechStackImg5Alt}
              />
              <img
                className="rounded-md"
                src={props.TechStackImg6}
                alt={props.TechStackImg6Alt}
              />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default About
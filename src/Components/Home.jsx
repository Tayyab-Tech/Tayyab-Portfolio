import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Home(props) {
  return (
    <>
      <div
        id="home"
        className="relative top-16 md:pt-24 md:pb-24 md:pl-10 md:pr-10 pl-3 pr-3 pt-14 pb-14 bg-slate-50 dark:bg-gray-700 dark:text-white text-gray-950"
      >
        <div className="flex flex-col-reverse gap-4 md-custom:flex-row md:justify-around items-center">
          <div className=" my-auto dark:text-slate-50 text-gray-950 font-extrabold flex justify-center items-center">
            <div className="animate-slideInBottom">
              <div className="ml-1 bg-gray-400 text-xs p-2 rounded-2xl font-medium mb-2 mt-4 inline-block">Tayyab Saleem</div>
              <h1 className="">
                <span className="Primary-color text-6xl md:text-8xl">Hi, I'm</span>
                <br />
                <TypeAnimation
                  sequence={[props.Skill1, 1000, props.Skill2, 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-5xl md:text-6xl font-bold"
                />
              </h1>
              <div className="text-justify font-semibold">
                {props.YourInfo}
              </div>
              <div className="flex gap-2 mt-4">
                    <a target="_blank" href={props.LinkedIn}><FaLinkedin className="dark:text-slate-50 text-gray-950 sm:text-4xl text-xl hover:text-cyan-600 dark:hover:text-cyan-600"/></a>
                    <a target="_blank" href={props.GitHub}><FaSquareGithub  className="dark:text-slate-50 text-gray-950 sm:text-4xl text-xl hover:text-cyan-600 dark:hover:text-cyan-600"/></a>
              </div>
            </div>
          </div>
          <div className="mr-5 ml-5 animate-slideInTop">
            <div className="animate-picSuffle h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 border-8 border-gray-950 dark:border-slate-50 overflow-hidden rounded-[60%_40%_30%_70%/_60%_30%_70%_40%]">
              <img src={props.YourImg} alt={props.YourImgAlt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

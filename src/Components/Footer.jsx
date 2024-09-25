import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
function Footer(props) {
  return (
    <>
        <div className="bg-slate-50 dark:bg-gray-700 relative top-16 sm:p-5 p-3 dark:text-white text-gray-950 flex flex-col-reverse gap-0 md:flex-row md:justify-around items-center">
            <div className="sm:text-2xl mt-3 text-[13px]">
                <p>&copy;{new Date().getFullYear()} {props.YourName}. All rights reserved.</p>
            </div>
            <div className="">
                <div className="flex gap-2">
                    <a target="_blank" href={props.LinkedIn}><FaLinkedin className="dark:text-slate-50 text-gray-950 sm:text-4xl text-xl hover:text-cyan-600 dark:hover:text-cyan-600"/></a>
                    <a target="_blank" href={props.GitHub}><FaSquareGithub  className="dark:text-slate-50 text-gray-950 sm:text-4xl text-xl hover:text-cyan-600 dark:hover:text-cyan-600"/></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
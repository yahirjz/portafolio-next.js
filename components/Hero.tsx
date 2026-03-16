import { data } from "@/data/data"
import Skills from "./Skills"
const Hero = () => {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-20 w-full pt-12 gap-10">
            <div className="max-w-lg">
                <h1 className=" text-white font-bold text-6xl pb-4">{data.name}</h1>
                <h2 className=" bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-bold text-6xl"> {data.role} </h2>
                <p className="text-gray-300 text-lg my-4"> {data.about} </p>
                <Skills/>
            </div>
            <div>
                <img src="https://res.cloudinary.com/deyjebm1c/image/upload/v1773261817/Full_Stack_Developer_Portfolio_Image_it4sxl.jpg" alt="Código"/>
            </div>
        </div>
    )
}

export default Hero
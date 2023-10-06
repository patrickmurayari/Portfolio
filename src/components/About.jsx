import React from "react"
import img from "../img/fotoLink3.png"

const About = () => {
    return (
        <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Sobre mi</h1>
            <div className=' md:w-1/2 pr-0 md:pr-4 md:ml-55 mt-20  sm:flex justify-center md:px-72 ' >
                <img className=' w-80 h-80 md:h-96 md:w-96 border-4 rounded-full object-cover' src={img} alt="Quienes Somos" />
            </div>
        </div>
    )
}


export default About



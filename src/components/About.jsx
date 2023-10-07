import React from "react";
import img from "../img/pa1.png";

const About = () => {
    return (
        <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Sobre mí</h1>
            <div className="flex flex-col md:flex-row md:mt-20 justify-center items-center shadow-lg bg-gray-200 shadow-gray-500 m-1 p-6">
                <img
                    className=" w-64 h-80 md:h-96 md:w-96 border-4 object-cover rounded-full md:order-1 transform scale-110 py-9"
                    src={img}
                    alt="img"
                />|
                <div className="md:order-2">
                    <p className="py-8 md:ml-4 text-center md:text-left">
                        Desarrollador Full Stack con más de 2 años de experiencia. Mi versatilidad se traduce en un enfoque integral en
                        proyectos colaborativos, mejorando la experiencia del usuario y contribuyendo al éxito general de los equipos de
                        desarrollo. Mi dedicación al desarrollo de software se refleja en un compromiso constante con la excelencia, la resolución de
                        problemas y la innovación, lo que me impulsa a seguir contribuyendo a proyectos de alto impacto en el mundo digital.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;



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
                    Desarrollador Full Stack con un enfoque integral, especializado en la creación de componentes de Frontend, y desarrollo de 
                    servidores Backend. Mi versatilidad se traduce en una contribución valiosa a proyectos colaborativos, mejorando la experiencia 
                    del usuario y aportando al éxito general de los equipos de desarrollo. Mi dedicación al desarrollo de software se refleja en un 
                    compromiso constante con la excelencia, la resolución de problemas y la innovación. Estoy entusiasmado por seguir contribuyendo a 
                    proyectos de alto impacto en el mundo digital, manteniendo un enfoque proactivo y una mentalidad orientada a resultados.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;



import React from "react";
import ProjectItems from "./ProjectItems";
import vk from "../img/vk.png"
import granjaelsol from "../img/granjaelsol.png"
import chefcitoos from "../img/chefcitoos.png"
import dogs from "../img/dogs.png"
import terapias from "../img/terapias111.png"

const Projects = () => {
    return ( 
        <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Proyectos</h1>
            <p className=" text-center py-8">
            ¡Saludos! Soy un desarrollador y diseñador web con un historial probado en la creación de proyectos digitales que no solo destacan,
            sino que dejan una impresión duradera. A continuación, presento algunos de mis proyectos destacados que reflejan mi dedicación a la excelencia
            y la innovación en el mundo del desarrollo web y diseño.
            </p>
            <div className=" grid sm:grid-cols-2 gap-12">
                <ProjectItems link="https://www.vkdesign.com.ar/" img={vk} title='Vk Design' tech='React js - JavaScript TailwindCSS ' />
                <ProjectItems link="https://www.granjaelsol.com.ar/" img={granjaelsol} title='Granja el sol' tech="React js - JavaScript TailwindCSS"/>
                <ProjectItems link="https://www.youtube.com/watch?v=-FsFdFItVcA&t=214s" img={chefcitoos} title='Chefcitoos' tech="JavaScript - React Js  Sequelize - Firebase  AWS - Node Js Tailwind"/>
                <ProjectItems link="https://www.youtube.com/watch?v=_mOxPU8pD7A&t=11s" img={dogs} title='Dogs App' tech="JavaScript - React Js  Sequelize - Node Js CSS - PostgreeSQL"/>
                <ProjectItems link="https://www.terapiasholisticasdmc.com.ar" img={terapias} title='Terapias Holsiticas' tech="JavaScript - React Js  Sequelize - Firebase  AWS - Node Js Tailwind"/>
            </div>
        </div>
    )
}

export default Projects
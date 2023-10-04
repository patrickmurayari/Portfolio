import React from "react";
import ProjectItems from "./ProjectItems";
import vk from "../img/vk.png"
import granjaelsol from "../img/granjaelsol.png"
import chefcitoos from "../img/chefcitoos.png"

const Projects = () => {
    return ( 
        <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className=" text-center py-8">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et 
            Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. 
            Rackham.
            </p>
            <div className=" grid sm:grid-cols-2 gap-12">
                <ProjectItems img={vk} title='vk Design' />
                <ProjectItems img={granjaelsol} title='Granja el sol'/>
                <ProjectItems img={chefcitoos} title='Chefcitoos'/>
                <ProjectItems img={chefcitoos} title='vk Design'/>
            </div>
        </div>
    )
}

export default Projects
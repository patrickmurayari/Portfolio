import WorkItem from "./WorkItem"

const data = [
    {
        year: 2023,
        title: 'Full Stack Developer - Pauin Tech Deveploment',
        duration: 'ago. 2023 - actualidad',
        details:
            ' Diseño y desarrollo de sitios web para clientes. Colaboración en proyectos de diseño web desde la concepción hasta la implementación. Uso de herramientas y tecnologías específicas, como JavaScript, React.js, Node.js, Redux, Tailwind, Firebase, SCRUM, GIT etc. Trabajo en estrecha colaboración con clientes para comprender sus requisitos y objetivos. '
    },
    {
        year: 2023,
        title: 'Full Stack Teaching Assistant - Henry',
        duration: 'abr. 2023 - jul. 2023',
        details:
            ' Coordine un grupo de estudiantes con el objetivo de lograr su adaptación al programa. Oriente a los estudiantes en los primeros pasos de la cursada y resolver sus inquietudes. Asistí y acompañe en la resolución de ejercicios y a promover la colaboración grupal (Pair Programming). Propuse ideas para la mejora de los procesos del Bootcamp. Promoví la cohesión grupal y generar comunidad '
    },
    {
        year: 2023,
        title: 'Full Stack Developer - Henry',
        duration: 'mar. 2023 - jul. 2023',
        details:
            ' Forme parte de un grupo de 6 desarrolladores en donde se implementó un plataforma llamada "Chefcitoos App", diseñada para permitir a los usuarios realizar pedidos personalizados en un restaurante multicomidas. Los usuarios podrán elegir entre una variedad de productos como hamburguesas, perros calientes, sandwiches y burritos, cada uno de ellos divididos en diferentes tipos. '
    },
    {
        year: 2016,
        title: 'Analista en comercialización de productos - Granja el sol',
        duration: 'nov. 2016 - abr. 2022',
        details:
            ' Con mas de 5 años de experiencia en la comercialización de carne vacuna desempeñe un rol clave en el negocio, contribuyendo al éxito y crecimiento de la empresa. Mi desempeño se centró en la gestión integral de las operaciones comerciales, garantizando la satisfacción de los clientes y el cumplimiento de los objetivos comerciales.' 
    },

]

const Work = () => {
    return (
        <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e]">Experiencia</h1>
            {
                data.map((item, i) => {
                    return (<WorkItem
                        key={i}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />)
                })
            }
        </div>
    )
}

export default Work
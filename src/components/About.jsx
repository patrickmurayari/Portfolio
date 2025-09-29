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
                        Soy estudiante de Ciencia de Datos en camino a convertirme en un profesional capaz de transformar información en decisiones estratégicas.  
                        Mi formación combina el rigor del análisis exploratorio con la práctica en preparación de datos y el entrenamiento de modelos supervisados 
                        como también los no supervisados.  
                    </p>

                    <p className="py-8 md:ml-4 text-center md:text-left">
                        Más allá de lo técnico, disfruto entender qué cuentan los datos: encontrar patrones, formular hipótesis y validarlas con métricas sólidas como Accuracy,
                        F1-score y ROC-AUC. Cada proyecto me ha permitido recorrer el ciclo completo de la ciencia de datos, desde la limpieza de un dataset hasta la 
                        comunicación clara de los resultados. 
                    </p>

                      <p className="py-8 md:ml-4 text-center md:text-left">
                       Me defino como alguien orientado al aprendizaje continuo, con la convicción de que la curiosidad y la disciplina son claves para dominar la ciencia de datos. Busco aportar valor con soluciones reproducibles y efectivas, manteniendo siempre una mentalidad analítica, rigurosa y enfocada en la mejora constante. 
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;



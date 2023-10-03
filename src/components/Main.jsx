import img from '../img/img.jpg'
import { TypeAnimation } from 'react-type-animation'


const Main = () => {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover object-left scale-x-[-1]  ' src={img} alt='img'></img>
            <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div>
                    <h1>Soy Patrick Murayari</h1>
                    <h2> Soy un
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Desarrollador',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Entusiasta por la tecnologia',
                                2000,
                                'Codificador',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' ,  display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
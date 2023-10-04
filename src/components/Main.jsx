import img from '../img/img.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter , FaFacebookF, FaInstagram , FaLinkedinIn } from  'react-icons/fa'


const Main = () => {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover object-left scale-x-[-1]  ' src={img} alt='img'></img>
            <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center marker:'>
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800 '>
                        Soy Patrick Murayari</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> 
                        Soy un
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
                    <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className=' cursor-pointer' size={20} />
                        <FaFacebookF  className=' cursor-pointer' size={20} />
                        <FaInstagram  className=' cursor-pointer' size={20}/>
                        <FaLinkedinIn  className=' cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
import img from '../img/mainimg2.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn , FaGithub } from 'react-icons/fa'


const Main = () => {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover object-left scale-x-[-1]  ' src={img} alt='img'></img>
            <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center marker:'>
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800 '>
                        Soy Patrick Murayari</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Orientado al aprendizaje en Machine Learning',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Comprometido con el desarrollo en Data Science',
                                2000,
                                'Enfocado en resolver problemas con datos',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://twitter.com/Patoo_lu' target="_blank" rel="noopener noreferrer" >
                            <FaTwitter className=' cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.facebook.com/patrick.murayari.18/'  target="_blank" rel="noopener noreferrer" >
                            <FaFacebookF className=' cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.instagram.com/patrick_m_cc/' target="_blank" rel="noopener noreferrer" >
                            <FaInstagram className=' cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.linkedin.com/in/patrick-murayari-coronel/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className=' cursor-pointer' size={20} />
                        </a>
                        <a href='https://github.com/patrickmurayari' target="_blank" rel="noopener noreferrer">
                            <FaGithub className=' cursor-pointer' size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
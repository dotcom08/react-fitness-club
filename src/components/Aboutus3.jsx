import banner from '../assets/banner.png'

const Aboutus3 = () => {
  return (
    <div className="bg-gray-300 dark:bg-black dark:text-slate-50 py-10 px-8">

        <div className='max-w-[1140px] mx-auto py-10 px-8'>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">

                <div 
                data-aos="fade-up"
                className='flex items-center justify-center'>
                    <img src={banner} alt="/" className='w-80 hover:scale-125 transition-all duration-300'/>
                </div>
                <div className='space-y-6'>
                    <div 
                    data-aos="zoom-in"
                    className='flex items-center gap-4 '>
                        <span className='text-7xl font-bold'>03</span>
                        <div className=''>
                            <span className='text-orange-500'>Global Fitness</span>
                            <h2 className='text-2xl font-bold '>About us</h2>
                        </div>
                    </div>
                    <p
                     data-aos="fade-up" 
                    >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime?
                    </p>
                    <p
                    
                    data-aos="fade-up" data-aos-delay='300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora.
                    </p>

                    <button 
                      data-aos="fade-up" 
                    className='px-5 py-3  text-orange-400 border-2 border-orange-400 text-xl font-semibold rounded-lg '>Get Started</button>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Aboutus3
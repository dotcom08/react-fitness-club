import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className="h-[640px] relative  ">

        <img src={hero} alt="/" className='w-full h-full object-cover'/>
        {/* overlay */}
        <div className='absolute h-full w-full top-0 left-0 bg-white/60 dark:bg-black/70 flex items-center justify-center'>

          <div className='max-w-[900px] dark:text-white text-center space-y-7'>
              <h2 
              data-aos="fade-up"
              className='text-orange-500 font-semibold text-3xl md:text-4xl'>
              Start Your Fitness Journey
              </h2>
              <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className='font-bold text-5xl md:text-7xl text-center md:max-w-xl'>
              Your Fitness Journey Begins!
              </p>

              <p 
              data-aos="fade-up"
              data-aos-delay="500"
              className=''>
              “The body achieves what the mind believes.”
              </p>

              <button 
              data-aos="fade-up"
              data-aos-delay="700"
              className='px-2 py-1 bg-orange-400 text-white text-lg font-semibold rounded-lg '>Get Started</button>
          </div>

        </div>
    </div>
  )
}

export default Hero
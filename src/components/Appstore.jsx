import dumbell from '../assets/dumbell.jpg'
import appStore from '../assets/website/app_store.png'
import playStore from '../assets/website/play_store.png'

function Appstore() {
  return (
    <div className="bg-white dark:bg-black">

        <div className="max-w-[1140px] mx-auto px-8 py-16 ">

            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <img src={dumbell} alt="/" className='w-full h-full absolute top-0 left-0 object-cover'/>
                {/* overlay */}
                <div className='w-full h-full bg-black/20 absolute text-center'>
                    <div className="flex items-center justify-center w-full h-full max-w-md mx-auto text-white  md:mr-0 md:justify-end">
                        <div className='flex flex-col items-center gap-y-6 md:px-4'>
                            <h1 
                            data-aos="fade-up" 
                            className='text-4xl font-bold'>Get Started with our app</h1>
                            <p 
                            data-aos="fade-up" data-aos-delay='300'
                            className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?</p>
                            <div 
                            data-aos="fade-up" data-aos-delay='500'
                            className='flex gap-2'>
                                <img src={playStore} alt="" className='w-[150px]'  />
                                <img src={appStore} alt=""  className='w-[150px]'/> 
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Appstore
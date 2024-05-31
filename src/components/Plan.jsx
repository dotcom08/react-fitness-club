

const Plan = () => {
  return (
    <div className="bg-gray-400/30 dark:bg-black">
        <div className="max-w-[1140px] mx-auto px-8 py-16 text-center dark:text-white">

            <h1 
            data-aos="fade-up"
            className="text-4xl font-bold pb-10">Why <span className="text-orange-400">Choose</span> Us</h1>

            <div className="grid grid-cols-1  py-10   sm:grid-cols-2  lg:grid-cols-3 gap-6 ">
                {/* card */}

                <div 
                data-aos="fade-up" data-aos-delay='300'
                className="bg-white dark:bg-gray-900/50 space-y-5 py-5 px-3 rounded-md dark:hover:bg-orange-400/60 transition-all group">
                    <div>
                    <h1 className="text-4xl font-bold my-2">Gold Card</h1>
                    <p className="text-4xl font-bold text-orange-400">$499</p>

                    </div>
                    <ul className="space-y-4 md:space-y-8 text-lg  ">
                        <li>Monthly access to fitness area.</li>
                        <li>Training sessions on demand</li>
                        <li>Personal trainer on demand.</li>
                        <li>Live classes on demand.</li>
                    </ul>

                    <p className="text-2xl font-bold py-3">Duration : 12 month</p>

                    <button className="px-5 py-3 bg-orange-400 group-hover:scale-105 transition-all duration-300 rounded-md">Learn more</button>

                </div>

                <div 
                data-aos="fade-up" data-aos-delay='700'
                className="bg-white dark:bg-gray-900/50 space-y-5 py-5 px-3 rounded-md dark:hover:bg-orange-400/60 transition-all group">
                    <div>
                    <h1 className="text-4xl font-bold my-2">Flexible Card</h1>
                    <p className="text-4xl font-bold text-orange-400">$899</p>

                    </div>
                    <ul className="space-y-4 md:space-y-8 text-lg  ">
                        <li>Monthly access to fitness area.</li>
                        <li>Training sessions on demand</li>
                        <li>Personal trainer on demand.</li>
                        <li>Live classes on demand.</li>
                    </ul>

                    <p className="text-2xl font-bold py-3">Duration : 12 month</p>

                    <button className="px-5 py-3 bg-orange-400 group-hover:scale-105 transition-all duration-300 rounded-md">Learn more</button>

                </div>

                <div 
                data-aos="fade-up" data-aos-delay='900'
                className="bg-white dark:bg-gray-900/50 space-y-5 py-5 px-3 rounded-md dark:hover:bg-orange-400/60 transition-all group">
                    <div>
                    <h1 className="text-4xl font-bold my-2">Platinum Card</h1>
                    <p className="text-4xl font-bold text-orange-400">$1299</p>

                    </div>
                    <ul className="space-y-4 md:space-y-8 text-lg  ">
                        <li>Monthly access to fitness area.</li>
                        <li>Training sessions on demand</li>
                        <li>Personal trainer on demand.</li>
                        <li>Live classes on demand.</li>
                    </ul>

                    <p className="text-2xl font-bold py-3">Duration : 12 month</p>

                    <button className="px-5 py-3 bg-orange-400 group-hover:scale-105 transition-all duration-300 rounded-md">Learn more</button>

                </div>

            </div>



        </div>

    </div>
  )
}

export default Plan
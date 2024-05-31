/* eslint-disable no-unused-vars */
import { BiPhoneCall } from 'react-icons/bi'
import logo from '../assets/logo.png'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import Darkmode from './Darkmode'



const navLinksList = [
    {
        id: 1,
        name: "SERVICES",
        link: "/#services",
      },
      {
        id: 2,
        name: "ABOUT",
        link: "/#about",
      },
      {
        id: 3,
        name: "JOIN",
        link: "/#join",
      },
]

const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className=' bg-white dark:bg-black shadow-sm shadow-black dark:text-gray-200'>

        <div className='max-w-[1140px] mx-auto group transition-all duration-500'>

            <div className='flex justify-between items-center px-4 py-4'>
                {/* contact */}
                <div className='hidden md:flex items-center'>
                    <BiPhoneCall size={25} className='mr-2 text-orange-400 animate-pulse group-hover:scale-105 duration-200'/>

                    <span className='font-semibold'>+91 123456789</span>
                </div>
           
                {/* logo */}
                <div >
                    <img src={logo} alt="/" className={`left-10 w-16 top-2 md:w-24 absolute md:top-0 md:left-[50%] translate-x-[-50%]  ${nav ? ' z-[-2]' : 'z-[100]'}`}/>
                </div>
                
                <div className='flex items-center gap-4'>
                    <ul className='hidden md:flex space-x-4'>
                        {navLinksList.map((item)=>(
                            <li 
                            className='hover:text-orange-400 transition-all duration-300'
                            key={item.id}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* darmode */}

                    {/* icons */}

                    <div className='flex items-center gap-x-4'>

                        <Darkmode/>

                        {nav ? 
                        <HiMenuAlt1
                        onClick={()=>setNav(!nav)} 
                        className='cursor-pointer md:hidden'
                        size={30}/> : 

                        <HiMenuAlt3
                        onClick={()=>setNav(!nav)} 
                        className='cursor-pointer md:hidden'
                        size={30}/>

                        }


                    </div>
                    
                </div>
                

                

                {/* menu mobile */}
                <div className={`${nav ? "left-0" : "-left-[100%]"
      } fixed top-0 w-[75%] h-screen z-[30]  dark:bg-gray-900 dark:text-white bg-white border-e rounded-lg shadow-lg transition-all duration-300 md:hidden`}>

                    <div className='px-10 pt-20 '>

                        {/* user */}
                        <div className='pb-16 flex items-center'>
                            <FaUserCircle size={50} className='mr-4'/>
                            <div>
                                <h1 className='text-lg font-semibold'>Hello User</h1>
                                <p className='text-sm dark:text-slate-400'>Premium user</p>
                            </div>
                        </div>

                        <div>
                            <ul className='space-y-10 text-xl '>
                            {navLinksList.map((item)=>(
                                <li key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                            </ul>
                        </div>


                        <div className='absolute bottom-4'>
                            <p>Made with ❤ by Dotcom.</p>
                        </div>
                    </div>
                </div>

            
            </div>

        </div>

    </div>
  )
}

export default Navbar
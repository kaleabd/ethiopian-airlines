import Logo from '../assets/et-logo.png'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav 
    className='
    flex justify-between font-railway
    text-primary w-11/12 mx-auto
    '>
        
        <div className='flex items-center lg:justify-start justify-between lg:w-auto w-full'>
            <img src={Logo} alt="" className='lg:w-[25%] lg:mt-0 mt-3 w-[40%]'/>
            <ul className='lg:flex gap-6 mt-14 text-lg hidden '>
                <li className='font-railway font-bold'>Home</li>
                <li>Plan a trip</li>
                <li>Flight info</li>
                <li>Service</li>
                <li>Help</li>
            </ul>
            <AiOutlineMenu className="text-4xl mt-10 lg:hidden flex"/>
        </div>
        <div className='lg:flex items-center mt-14 gap-6 hidden'>
            <FiSearch />
            <select name="" id="" className='outline-none bg-transparent'>
                <option value="EN">EN</option>
                <option value="AMH">AMH</option>
            </select>
            <button className='border-[2px] border-primary rounded-[10px] px-4 py-1'>
                Sign in 
            </button>
        </div>
    </nav>
  )
}

export default Navbar
import Logo from '../assets/et-logo.png'
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav 
    className='
    flex justify-between font-railway
    text-primary w-11/12 mx-auto
    '>
        
        <div className='flex items-center'>
            <img src={Logo} alt="" className='w-[25%]'/>
            <ul className='flex gap-6 mt-14 text-lg '>
                <li className='font-railway font-bold'>Home</li>
                <li>Plan a trip</li>
                <li>Flight info</li>
                <li>Service</li>
                <li>Help</li>
            </ul>
        </div>
        <div className='flex items-center mt-14 gap-6'>
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
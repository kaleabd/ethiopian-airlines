import Logo from '../assets/et-logo.png'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import { motion} from 'framer-motion';
import {useState} from 'react';
import Sidebar from './Sidebar';

const imgVariant = {
    open: {
        x: 0,
        transition: { type: "spring", stiffness: 200 }
    },
    closed: {
        x: -100,
    },
}
const ulVariants = {
    
    open: {
        scale: 1.05,
        transition: {
        staggerChildren: .3,
        delayChildren: .2,
        staggerDirection: 1, // forward 1, backwards -1
        when: "afterChildren"
    }},
    closed: {
        scale: 1
    },
}
const liVariants = {
    open: {y:0, opacity: 1},
    closed: {y: -20, opacity: 0},
}


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(prev => !prev)
    }
  return (
    <motion.div

    className='
    flex justify-between font-railway
    text-primary w-11/12 mx-auto
    '>
        
        <div className='flex items-center lg:justify-start justify-between lg:w-max w-full'>
            <motion.img 
            variants={imgVariant}
            initial="closed"
            animate="open"
            src={Logo} alt="" className='lg:w-[25%] lg:mt-0 mt-3 w-[40%]'/>
            <motion.ul 
            variants={ulVariants}
            initial="closed"    
            animate={"open"}
            exit="closed"
            className='lg:flex gap-6 mt-14 text-lg hidden '>
                <motion.li 
                variants={liVariants}
                className='font-railway font-bold cursor-pointer'>Home</motion.li>
                <motion.li variants={liVariants}
                className='cursor-pointer'
                >Plan a trip</motion.li>
                <motion.li variants={liVariants}
                className='cursor-pointer'
                >Flight info</motion.li>
                <motion.li variants={liVariants}
                className='cursor-pointer'
                >Service</motion.li>
                <motion.li variants={liVariants}
                className='cursor-pointer'
                >Help</motion.li>
            </motion.ul>
            <motion.div 
            variants={liVariants} 
            initial="closed"    
            animate="open"
            exit="closed"
            >
                <AiOutlineMenu className="text-4xl mt-10 lg:hidden flex" onClick={toggleNav}/>
            </motion.div>
            
        </div>
        <motion.div 
            variants={ulVariants} 
            initial="closed"    
            animate="open"
            exit="closed"
        className='lg:flex items-center mt-14 gap-6 hidden'>
            <motion.div
            variants={liVariants} 
            >
                <FiSearch />
            </motion.div>
            
            <motion.select variants={liVariants}  name="" id="" className='outline-none bg-transparent'>
                <option value="EN">EN</option>
                <option value="AMH">AMH</option>
            </motion.select>
            <motion.button 
            variants={liVariants}  
            className='border-[2px] border-primary rounded-[10px] px-4 py-1
            hover:bg-primary hover:text-white transition-all ease-in-out duration-300
            '>
                Sign in 
            </motion.button>
        </motion.div>
        <Sidebar isNavopened={isNavOpen} setNavOpened={toggleNav} />
    </motion.div>
  )
}

export default Navbar
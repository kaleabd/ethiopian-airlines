import {motion} from 'framer-motion'
import Logo from '../assets/et-logo.png'
import {AiFillCloseCircle} from'react-icons/ai'

const variants = {
    open:{
        opacity: 1,
        x: 0,
    },
    closed: {
        opacity: 0,
        x: 300,
        transition: {delay: .2}
    }
}

const liVariants = {
    open: {y:0, opacity: 1},
    closed: {y: -20, opacity: 0},
}
const ulVariants = {
    
    open: {
        scale: 1.05,
        transition: {
        staggerChildren: .3,
        delayChildren: 0.2,
        staggerDirection: 1, // forward 1, backwards -1
        when: "afterChildren"
    }},
    closed: {
        scale: 1
    },
}

interface SideProp {
    isNavopened: boolean
    setNavOpened: () => void
}
const Sidebar = ({isNavopened, setNavOpened}: SideProp) => {

    const links = ['Home', 'Plan a trip', 'Flight info', 'Service', 'Help']
  return (

    <motion.div
    variants={variants}
    initial="closed"    
    animate={isNavopened ? "open" : "closed"}
    exit="closed"
    transition={{ damping: 300 }}
    className="absolute top-0 right-0 p-6 bg-white rounded-lg shadow-lg font-railway w-[70%]">
        {
            isNavopened && (
                <div className='flex flex-col gap-6 text-start text-lg'>
                    <div className='flex justify-between items-center w-full'>
                        <img src={Logo} alt="et-logo" className='w-[80%]'/>
                        <AiFillCloseCircle className="text-[1.7rem]"onClick={setNavOpened}/>
                    </div>
                    <motion.ul variants={ulVariants}
                    className='flex flex-col gap-2 ml-4'
                    >

                        {
                            links.map((link, index) => {
                                return (
                                    <motion.li
                                    variants={liVariants}
                                    key={index}
                                    className='font-semibold hover:font-bold cursor-pointer'
                                    >
                                        {link}
                                    </motion.li>
                                )
                            })
                        }
                    </motion.ul>
                </div>
            )
        }

    </motion.div>
  )
}

export default Sidebar
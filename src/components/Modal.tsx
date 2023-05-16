import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import {BsAirplaneEngines} from 'react-icons/bs'
import {AiFillCloseCircle} from'react-icons/ai'
type ModalProps = {
    toggle: boolean;
    ontoggle: () => void;
    children: React.ReactNode;
  };

  const Modal: React.FC<ModalProps> = ({ toggle,ontoggle, children }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit={{opacity: 0}}
            className=''
        >
            <motion.div 
                initial={{ y: 50 }}
                animate = {{ y: 0 }}
                exit={{y: 30}}
                className="flex flex-col justify-center items-center bg-white rounded-md shadow-lg px-4 "
            >
                <motion.div
                initial={{ y: 0 }}
                animate = {{ y: -500 }}
                transition={{duration: 2}}
                exit={{y: 0}}
                className='text-[10rem] text-primary'
                >
                    <BsAirplaneEngines />
                </motion.div>
                <div className='text-center translate-y-[-5rem] relative'>
                  <AiFillCloseCircle onClick={ontoggle} className = 'absolute top-[-8rem] lg:right-[-7rem] right-[-5rem] text-primary text-4xl'/>
                  {children}
                </div>
                
            </motion.div>


        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
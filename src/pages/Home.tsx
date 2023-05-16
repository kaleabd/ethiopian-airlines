import Navbar from "../components/Navbar"
import SearchFlight from "../components/SearchFlight"
import { motion} from 'framer-motion';

const h1Variant = {
    open: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: .7 },
    },
    closed: {
        opacity: 0,
        x: -100,
    },
}
const pVariant = {
    open: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, delay: 1 },
    },
    closed: {
        opacity: 0,
        x: -100,
    },
}

const searchVariant = {
    open: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, delay: 2 },
        },
        closed: {
            opacity: 0,
            y: -50,
        },
}
const Home = () => {
  return (
    <motion.div className="w-full relative flex flex-col font-railway">
        <div className="absolute top-0 left-0 right-0 py-4 bg-white bg-opacity-10 backdrop-blur rounded-bl-2xl rounded-br-2xl">
            <Navbar />
        </div> 
        <div className="lg:mt-[12%] sm:mt-[25%] mt-[40%] text-white flex flex-col gap-5 w-11/12 mx-auto lg:text-start text-center">
            <motion.h1
            variants={h1Variant}
            initial="closed"
            animate = "open"
            exit="closed"
            className="font-extrabold lg:text-8xl sm:text-6xl text-4xl flex-wrap lg:w-[50%] sm:w-full ">
                Take of with confidence
            </motion.h1>
            <motion.p
            variants={pVariant}
            initial="closed"
            animate = "open"
            exit="closed"
            className="lg:text-xl sm:text-lg w-full">Your next adventure is just a search away</motion.p>
            <motion.div
            variants={searchVariant}
            initial="closed"
            animate = "open"
            exit="closed"
            className="bg-white bg-opacity-5 backdrop-blur rounded-xl py-6 px-10 mt-10 mb-10 w-11/12 mx-auto">
                <SearchFlight />
            </motion.div>
        </div>
        
    </motion.div>
  )
}

export default Home
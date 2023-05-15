import Navbar from "../components/Navbar"
import SearchFlight from "../components/SearchFlight"
import { motion} from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full relative flex flex-col font-railway">
        <div className="absolute top-0 left-0 right-0 py-4 bg-white bg-opacity-10 backdrop-blur rounded-bl-2xl rounded-br-2xl">
            <Navbar />
        </div> 
        <div className="lg:mt-[12%] sm:mt-[25%] mt-[40%] text-white flex flex-col gap-5 w-11/12 mx-auto lg:text-start text-center">
            <h1 className="font-extrabold lg:text-8xl sm:text-6xl text-4xl flex-wrap lg:w-[50%] sm:w-full ">
                Take of with confidence
            </h1>
            <p className="lg:text-xl sm:text-lg lg:w-full sm:w-full">Your next adventure is just a search away</p>
        </div>
        <div className="bg-white bg-opacity-5 backdrop-blur rounded-xl py-6 px-10 mt-14 w-11/12 mx-auto">
            <SearchFlight />
        </div>
        
    </div>
  )
}

export default Home
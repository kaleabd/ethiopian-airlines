import Home from "./pages/Home"
import {AnimatePresence, motion} from 'framer-motion';
import useToggleStore from "./useToggleStore";
import Modal from "./components/Modal";

const App = () => {
  const {isToggled, toggle} = useToggleStore();
  return (
    <AnimatePresence>
      <div className="relative bg-cover w-full lg:h-screen bg-hero-image overflow-x-hidden">
        <div className="absolute  inset-0 bg-black opacity-40"></div>
        <Home />
      </div>
      <motion.div className="fixed top-[30%] lg:left-[30%] left-[25%] z-[200] lg:w-[45%] w-[50%]">
          <Modal toggle={isToggled} ontoggle={toggle}>
              <h2 className="text-lg font-semibold font-railway">Unfortunately, we currently do not offer flights to your selected destination.</h2>
          </Modal>
      </motion.div>
      {
        isToggled && (
          <motion.div className="fixed inset-0 z-[100] bg-opacity-75 backdrop-filter backdrop-blur-sm"></motion.div>
        )
      }
    </ AnimatePresence>
  )
}

export default App
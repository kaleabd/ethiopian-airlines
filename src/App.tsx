import Home from "./pages/Home"
import {AnimatePresence} from 'framer-motion';

const App = () => {
  return (
    < AnimatePresence>
      <div className="relative bg-cover lg:h-screen bg-hero-image">
        <div className="absolute inset-0 bg-black opacity-40"></div>
          <Home />
      </div>
    </ AnimatePresence>
  )
}

export default App
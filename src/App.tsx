import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <div className="relative bg-cover lg:h-screen bg-hero-image">
        <div className="absolute inset-0 bg-black opacity-40"></div>
          <Home />
        </div>

    </div>
  )
}

export default App
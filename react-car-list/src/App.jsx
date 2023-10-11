import Footer from "./components/Footer"
import CarCards from "./components/CarsCards"

function App() {

  return (
    <>
    <nav className='text-2xl flex justify-around 
    bg-gray-300 p-6'>
      <a href="/html/">Carzoona</a> 
      <a href="/css/">Get a car</a>
      <a href="/js/">About</a> 
      <a href="/python/">Login</a>
    </nav>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
      <CarCards/>
      <CarCards/>
      <CarCards/>
      <CarCards/>
      <CarCards/>
    </div>
    <Footer/>

    </>
  )
}

export default App

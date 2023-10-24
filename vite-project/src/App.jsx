import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="bg-orange-300 p-3">
        <h1 className="text-indigo-700 text-3xl font-semibold">
          Carvana</h1>
      </div>
      <div className="my-10">
        <div className="flex justify-center">
        <img className="w-3/4" 
        src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default App

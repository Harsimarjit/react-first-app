import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='text-2xl flex justify-around 
    bg-gray-300 p-6'>
      <a href="/html/">HTML</a> 
      <a href="/css/">CSS</a>
      <a href="/js/">JavaScript</a> 
      <a href="/python/">Python</a>
    </nav>
    <div className='bg-red-100 h-64 lg:126 my-4'>
      Learn more...
    </div>
    

    </>
  )
}

export default App

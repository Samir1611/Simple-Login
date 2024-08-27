import './App.css'

function App() {
  

  return (
    <>
    <div className="w-full min-h-screen flex  md:flex-row items-center md:items-start">
      {/* left */}
      <div className="hidden w-full relative  md:flex md:w-1/2 md:h-screen bg-cover bg-center flex-col justify-center" style={{ backgroundImage: "url('/login.jpg')" }} >
      <div className="absolute top-1/2 left-[10%]  flex flex-col">
        <h1 className='text-4xl text-[#1e293b] font-bold my-4'>Welcome to the Login Page</h1>
      </div>
      </div>

      {/* Right */}

      <div className="w-full md:w-1/2 h-screen  md:bg-[#1e293b] flex flex-col p-10 md:p-20 justify-center items-center right-container" >
      <h1 className="text-2xl text-black font-bold mb-8">NAME OF APP</h1>

      <div className="w-full flex flex-col max-w-[500px]">
       
          <h3 className='text-2xl font-semibold mb-4'>Login</h3>
          <p className="text-md mb-2">Welcome Back</p>
      

        <div className="w-full flex flex-col mb-4">
          <input type="email" placeholder='Email' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none ' />
        </div>
        <div className="w-full flex flex-col">
          <input type="password" placeholder='Password' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none ' />
        </div>

        <div className="w-full flex  items-center justify-between mb-4">
          <div className="flex items-center" >
            <input type="checkbox" className='w-4 h-4 mr-2 '/>
            <p className='text-sm '>Remember me</p>
          </div>
          <p className="text-sm font-medium  cursor-pointer underline underline-offset-2">Forgot Password?</p>
        </div>

<div className="w-full flex flex-col my-4" >
  <button className='w-full text-white my-2 bg-[#1d4ed8] rounded-md font-semibold p-4 '>Login</button>
  <button className='w-full text-black my-2 bg-[#60a5fa] border-2 font-semibold  border-black rounded-md p-4'>SignUp</button>
</div>


      <div className="w-full flex items-center justify-center">
        <p className="text-sm">Don't have a account? </p>
        <span className='font-semibold mx-1 underline'> Signup for free</span>
      </div>
      
      
    
      </div>

    </div>
    </div>
    </>
  )
}

export default App

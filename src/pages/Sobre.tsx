import React from 'react'
import Navbar from '../components/Navbar'
import logoTtams from '../assets/img/logoTtams.png'

function Sobre() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex items-center justify-center" style={{ height: "100vh" }}>
        <img
            src={logoTtams}
            className="w-80 h-80 rounded-full"
            alt="logo"
        />

        <h1 className=" text-3xl rounded-full px-10">
            Olá! Me chamo <strong className=' text-red-600'> Guilherme Reis </strong> <br/> 

            SOU O DEV DESSE INCRIVEL CLONE DO YOUTUBE <br/><br/>

            ESSE PROJETO TEM COMO INTUITO ENTENDER E ESTUDAR: <br/>
            
            <strong className=' text-red-600'> APIS, REACT, REDUX, TYPESCRIPT E TAILWIND. </strong>
        </h1>


      </div>

      


    </div>
  )
}

export default Sobre
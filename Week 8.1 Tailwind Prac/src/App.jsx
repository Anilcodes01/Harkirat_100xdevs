import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import Sidebar from './components/sidebar'
import  Navbar  from './components/navbar'

function App() {


  return (<div className='grid grid-cols-6'>
    <div className='col-span-1' >
<Sidebar />
    </div>
    <div className='col-span-5'>
<Navbar />
    </div>
  
    </div>
  )
}

export default App

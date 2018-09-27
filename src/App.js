import Routes from './routers'
import React from 'react'
import { AuthProvider } from './context/AuthProvider'


const App = () => {
  return(
  	<AuthProvider>
   	 <Routes />
   </AuthProvider>
  )
}

export default App
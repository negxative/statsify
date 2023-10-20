import { useState ,createContext} from 'react'
import './App.css'
import { Homepage } from './components/homepage/Homepage';
import Header from './components/Header/header';
interface globalContextType{
  token:string | undefined,
  setToken:React.Dispatch<React.SetStateAction<string | undefined>>,
}
export const globalContext = createContext<globalContextType | undefined>(undefined)

function App() {
  const [token,setToken]=useState<string | undefined>();
  console.log("token ",token)
  return (
    <globalContext.Provider value={{token,setToken}}>
      <Header />
      {!token ? <Homepage/> : <>hello</>}
    </globalContext.Provider>
  )
}

export default App

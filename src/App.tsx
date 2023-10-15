import { useState ,createContext} from 'react'
import './App.css'
import { Homepage } from './components/homepage/Homepage';
interface globalContextType{
  token:string | undefined,
  setToken:React.Dispatch<React.SetStateAction<string | undefined>>,
}
export const globalContext = createContext<globalContextType | undefined>(undefined)

function App() {
  const [token,setToken]=useState<string | undefined>();

  return (
    <globalContext.Provider value={{token,setToken}}>
      <center> 
        <Homepage/>
      </center>
    </globalContext.Provider>
  )
}

export default App

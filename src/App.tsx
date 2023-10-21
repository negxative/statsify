import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import { globalContext } from "./utils/Config";
import { AppRouter } from "./Router/Router";
import { BrowserRouter} from "react-router-dom"

function App() {
  const [token, setToken] = useState<string | undefined  >(
    localStorage.getItem("token") || undefined
  );
  console.log("token ", token);
  return (
    <BrowserRouter>
    <globalContext.Provider value={{ token, setToken }}>
      <div className="h-full">
        <Header />
        <AppRouter/>
      </div>
    </globalContext.Provider>
    </BrowserRouter>
  );
}

export default App;

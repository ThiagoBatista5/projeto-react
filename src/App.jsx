import{ useState} from "react"
import Login from "./Components/Login/Login"
import Formulario from "./Components/Cadastro/Formulario"
import './Components/Login/Login.css'

 
 function App() {
      const [tela, setTela]= useState("login")
    return(
       <div>
        {tela === "login" && <Login mudarTela={setTela}/>}
        {tela === "Formulario" && <Formulario mudarTela={setTela}/>}
       </div>
   )
 }
 
 export default App

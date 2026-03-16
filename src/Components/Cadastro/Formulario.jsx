

function Formulario({mudarTela}){
   return(
    <div>
     <form>
      <h1>Cadastro</h1>
      <label>Nome Completo</label>
      <input type="nome completo" placeholder="Nome"/>
      <label>Email</label>
       <input type="email" placeholder="E-mail"/>
       <label>Criar Senha</label>
       <input type="password" placeholder="Crie sua Senhar"/>
      <button type="button" onClick={()=>mudarTela("login")}>criar Contar</button>
      </form>
    </div>
  )
}

export default Formulario

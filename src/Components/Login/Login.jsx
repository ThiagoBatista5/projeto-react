

function Login ({mudarTela}) {
  return (
    <div>
      <form>
      <h1>Login</h1>
      
        <label>Email</label>
        <input type="email" placeholder="E-mail"/>
        <label>Senha</label>
        <input type="password" placeholder="Senha"/>
        <button href="Formulario.jsx" type="button"
        onClick={() =>mudarTela("Formulario")}>Criar Conta</button>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login

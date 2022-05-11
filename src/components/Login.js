

const Login = () => {
  
  const styleLogin = {
    // estilos css
  };
  
  return (
    <div className={`container ${styleLogin}`}>
      <form className='form-control'>
        <label>Nome:</label>
        <input type="email" />
        <label>Senha:</label>
        <input type="password"/>
      </form>
    </div>
  )
}

export default Login
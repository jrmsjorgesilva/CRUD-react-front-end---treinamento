import { useState, useEffect } from 'react'

const Login = () => {

  // STATE
  const [login, setLogin] = useState({
    logado: false
  })

  // ESTILOS CSS
  const styleLogin = {
    // estilos css
  };

  // FUNÇÃO SETA LOGADO
  const logar = () => {
    setLogin({
      logado: true
    });
    console.log("função logar()")
  }

  return (
    <>
      {/* substituido login.logado por false para nunca aparecer o menu - temporario */}
      {false &&
        <div className='container'>
          <form className={`form-control ${styleLogin}`}>
            <img src='../logo' alt="logo" />
            <label>Nome:</label>
            <input type="email" />
            <label>Senha:</label>
            <input type="password" />
            <p style={{ fontSize: '10px' }}>
              <a href='#' style={{ color: 'red', textDecoration: 'none' }}>
                * Esqueci minha senha
              </a>
            </p>
            <p style={{ fontSize: '10px' }}>
              <a href='#' style={{ color: 'red', textDecoration: 'none' }}>
                * Já possuo cadastro
              </a>
            </p>
            <button className='btn' onClick={() => logar()}>Entrar</button>
          </form>
        </div>
      }
    </>
  )
}

export default Login
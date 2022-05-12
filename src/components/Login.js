import { useState, useEffect } from 'react'

const Login = () => {

  // STATE

  const [login, setLogin] = useState([
    {
      user: 'usuario',
      password: 'senha',
      logado: false
    }
  ])

  // ESTILOS CSS
  const styleLogin = {
    // estilos css
  };

  // FUNÇÃO ESTA OU NAO LOGADO
  const estaLogado = (e) => {
    e.preventDefault();
    if (true === false) {
      return true
    }
    return false
  }

  // FUNÇÃO SETA LOGADO
  
  return (
    <>
      {!estaLogado &&
      <div className='container'>
        <form className={`form-control ${styleLogin}`}>
          <img src='../logo' alt="logo" />
          <label>Nome:</label>
          <input type="email" />
          <label>Senha:</label>
          <input type="password"/>
          <p style={{ fontSize: '10px' }}>
            <a href='#' style={{ color: 'red', textDecoration: 'none'}}>
              * Esqueci minha senha
            </a>
          </p>
          <p style={{ fontSize: '10px' }}>
            <a href='#' style={{ color: 'red', textDecoration: 'none'}}>
              * Já possuo cadastro
            </a>
          </p>
          <button class='btn' onClick={estaLogado}>Entrar</button>
        </form>
      </div>
      }
    </>
  )
}

export default Login
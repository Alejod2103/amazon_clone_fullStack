import React from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'

function LogIn() {
    return (
        <div className='login'>
            
          <Link to='/'>
              <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
          </Link>

          <div className='login_container'>

              <h1>Iniciar Sesion</h1>

              <form>
                  <h5>E-mail</h5>
                  <input type='text' />
                  <h5>Contraseña</h5>
                  <input type='password' />
                  <button className='botonLogin'>Iniciar Sesion</button>
              </form>

              <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon.</p>

              <button className='botonCrearCuenta'> Crear Cuenta</button>

          </div>

        </div>
    )
}

export default LogIn

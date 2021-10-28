import React from 'react';
import './Header.css' ;
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';

function Header() {
   const [{basket}] = useStateValue();
  return (
       //BEM Wrapper
       
        <div className='header'>
          {/* Logo Header */}
          <Link to="/">
            <img className="headerLogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
          </Link>
          {/* Buscador Header */}
          <div className="headerSearch">
           <input className="headerInputButton" type="text" /> 
           <SearchIcon className="header_searchIcon" />
          </div>
            {/* Opciones del Header */}
          <div className="headerNav">
              <Link to="/logIn">
            <div className="headerOption">
              <span className="headerOptionUno">Bienvenido</span>
              <span className="headerOptionDos">Iniciar Sesion</span>
            </div>
            </Link>
            <div className="headerOption">
              <span className="headerOptionUno">Reclamos</span>
              <span className="headerOptionDos">Y Pedidos</span>
            </div>
            <div className="headerOption">
              <span className="headerOptionUno">Your</span>
              <span className="headerOptionDos">Prime</span>
            </div>

            {/* Carrito de compras */}
            <Link to="/checkout">
              <div className="headerOptionBasket">
                <ShoppingBasketIcon />
                  <span className="headerOptionLineTwoheaderBasketCount">{basket?.length}</span>
              </div>
            </Link>
          </div>

        </div>
    )
}

export default Header

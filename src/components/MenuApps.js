import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MenuApps = () => {

    const styleNavigation = {
        display: 'flex'
    }

    return (
        <div>
            <ul className={styleNavigation}>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/infos">Infos</Link>
                </li>
                <li>
                    <Link to="/vetores">Vetores</Link>
                </li>
                <li>
                    <Link to="/sites">Sites</Link>
                </li>
                <li>
                    <Link to="/lists">Listas</Link>
                </li>
                <li>
                    <Link to="/pokemon">Pokemons</Link>
                </li>
                <li>
                    <Link to="/noticias">Noticias</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuApps
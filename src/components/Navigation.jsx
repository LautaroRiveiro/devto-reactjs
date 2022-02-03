import { useState } from 'react'
import { FaGuitar, FaRegBell } from 'react-icons/fa'

const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => setShowMenu(!showMenu)

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <FaGuitar size="2rem" />
          Searchband
        </a>

        <div className="header-right">
          <button>Publicá gratis</button>
          <a href="/register">Ingresar</a>
          <i>
            <FaRegBell />
          </i>
          <span onClick={toggle} className="header-user">
            <img src="https://picsum.photos/200" alt="profile" />
          </span>
        </div>
      </div>

      {showMenu &&
        <div className="header-dropdown-menu">
          <ul>
            <li onClick={toggle}>
              <a href="/profile">{'{username}'}</a>
            </li>
            <li onClick={toggle}>
              <a href="/create">Publicar anuncio</a>
            </li>
            <li onClick={toggle}>
              <a href="/applies">Mis postulaciones</a>
            </li>
            <li onClick={toggle}>
              <a href="/logout">Salir</a>
            </li>
          </ul>
        </div>
      }
    </header>
  )
}
export default Navigation